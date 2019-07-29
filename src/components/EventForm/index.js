import React, { Component, Fragment } from "react";
import { Button, Form, Segment, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createEvent, updateEvent, deleteEvent } from "../EventList/eventActions";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import cuid from "cuid";
import TextInput from "../../common/form/TextInput";
import TextArea from "../../common/form/TextArea";
import RadioInput from "../../common/form/RadioInput";
import SelectInput from "../../common/form/SelectInput";
import { openModal } from "../../modals/ModalActions";
import {withFirestore} from 'react-redux-firebase'
import toastr from 'react-redux-toastr'

const mapState = (state, ownProps) => {
  const eventID = ownProps.match.params.id;
  let event = {};

  if (state.firestore.ordered.events && state.firestore.ordered.events.length >0){
    event = state.firestore.ordered.events.filter(event => event.id === eventID)[0] || {}

}
  return {
    initialValues: event
  };
};
const actions = {
  createEvent,
  updateEvent,
  deleteEvent,
  openModal
};

const validate = combineValidators({
  title: isRequired({ message: "The field is required" }),
  category: isRequired({ message: "This field is required" }),
  description: composeValidators(
    isRequired({ message: "Field is required" }),
    hasLengthGreaterThan(4)({
      message: "description needs to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue")
});

class EventForm extends Component {

    
  state = {
    event: Object.assign({}, this.props.event),
    isTrade: ""
  };

  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`events/${match.params.id}`);
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`events/${match.params.id}`);
  }
//   componentDidMount() {
//     this.props.openModal("LoginModal");
//   }
  handleTrade = value => {
    this.setState({ isTrade: true });
  };
  handleScholar = value => {
    this.setState({ isTrade: false });
  };

  handleSubmit = async values => {
      
      try{
        if (this.props.initialValues.id) {
            this.props.updateEvent(values);
            console.log(values)
            this.props.history.goBack();
          } else {
           
            let createdEvent = await this.props.createEvent(values);
            this.props.history.push(`/events/${createdEvent.id}`);
          }

      }catch{
        console.log(this)

      }
   
  };

  // handleDelete = async values => {
  //    this.props.deleteEvent(values);
  //   this.props.history.push(`/events`)
   
   
  // };

  render() {
    const { invalid, submitting, pristine } = this.props;

    return (
      <Grid>
     

        <Grid.Column width={10}>
          <h1>Author Questionnaire</h1>
          <p>
            Many thanks for taking the time to complete this form thoughtfully.
            The information you provide here is an essential part of our success
            in marketing your book and helping potential readers discover it. If
            you prefer to supply your responses in an electronic MS Word file,
            please contact your acquisitions editor.
          </p>
          <Segment>
            <Header color="black" content="Trade or Scholarly?" />
            <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
              <Form.Group inline>
                <Field
                  name="choices"
                  type="radio"
                  value="trade"
                  label="trade"
                  component={RadioInput}
                  onChange={() => this.handleTrade()}
                />
                <Field
                  name="choices"
                  type="radio"
                  value="scholarly"
                  label="scholarly"
                  component={RadioInput}
                  onChange={() => this.handleScholar()}
                />
                {/* todo: Gender Radio button */}
              </Form.Group>
              <Header
                color="black"
                content="Name as you would like it to appear on the title page"
              />

              <Field
                name="fullAuthor"
                type="text"
                component={TextInput}
                placeholder="Name as you would like it to appear on the title page"
                disabled=""
              />
              <Header color="black" content="Legal Name" />
              <Form.Group inline>
                <Field
                  name="lastName"
                  type="text"
                  component={TextInput}
                  placeholder="Last Name"
                  disabled=""
                />
                <Field
                  name="firstName"
                  type="text"
                  component={TextInput}
                  placeholder="First Name"
                  disabled=""
                />
              </Form.Group>

              <Header color="black" content="Email address" />

              <Field
                name="email"
                type="text"
                component={TextInput}
                placeholder="Email Address"
                disabled=""
              />

              <Header color="black" content="Pronouns" />
              <Field
                name="pronouns"
                type="text"
                component={TextInput}
                placeholder="Pronouns"
                disabled=""
              />

              <Header
                color="black"
                content="What country or countries are you a citizen of?"
              />
              <p> This information is required for some awards nominations.</p>

              <Field
                name="countryofOrigin"
                type="text"
                component={TextInput}
                placeholder="What country or countries are you a citizen of?"
                disabled=""
              />
              <Header
                color="black"
                content="Working Title and Subtitle of the Book"
              />

              <Field
                name="titleofBook"
                type="text"
                component={TextArea}
                placeholder="Working Title and Subtitle of the Book"
                disabled=""
              />

              <Header
                color="black"
                content="Please list here any social media accounts or handles that we may use for book marketing:"
              />

              <Field
                name="social"
                type="text"
                component={TextArea}
                placeholder="Please list here any social media accounts or handles that we may use for book marketing:"
                disabled=""
              />

              <Header
                color="black"
                content="Please provide a 150-200 word description of the book written for a nonspecialist academic audience"
              />
              <p>
                This description will be the starting point for the book
                description on the back of the book, in our catalog, on our
                website, and on Amazon and other online retailers. Please (a)
                write the text in the third person, (b) use short, declarative
                sentences, (c) identify the audience for the book, and (d) use
                relevant keywords.
              </p>

              <Field
                name="bookDesc"
                type="text"
                rows={12}
                component={TextArea}
                placeholder="Please provide a 150-200 word description of the book written for a nonspecialist academic audience"
              />

              <Header
                color="black"
                content="Please provide an author bio of up to 60 words prioritizing current academic affiliations, past publications, and any awards you have received."
              />

              <Field
                name="authorBio"
                type="text"
                rows={12}
                component={TextArea}
                placeholder="Please provide an author bio of up to 60 words prioritizing current academic affiliations, past publications, and any awards you have received."
              />

              <Header
                color="black"
                content="Please provide a list of 3-5 prominent writers or scholars who you think might be willing to write an endorsement of your book for use on the book and online. Please provide an email address whenever possible"
              />
              <Field
                name="blurber"
                type="text"
                rows={12}
                component={TextArea}
                placeholder="Please provide a list of 3-5 prominent writers or scholars who you think might be willing to write an endorsement of your book for use on the book and online. Please provide an email address whenever possible"
              />

              {this.state.isTrade !== true ? (
                <Fragment>
                  <Header
                    color="black"
                    content="Please list as many as ten journals that you think might publish a review of your book. Please also note any contacts you have at these publications. Please rank them in order of importance:"
                  />
                  <Field
                    name="scholarReviewers"
                    type="text"
                    rows={12}
                    component={TextArea}
                    placeholder="Please list as many as ten journals that you think might publish a review of your book. Please also note any contacts you have at these publications. Please rank them in order of importance:"
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <Header
                    color="red"
                    content="Please list as many as 20 periodicals or book review venues in any medium that you think might publish a review of your book.. Please also note any contacts you have at these publications. Please rank them in order of importance:"
                  />

                  <Field
                    name="tradeReviewers"
                    type="text"
                    rows={12}
                    component={TextArea}
                    placeholder="Please list as many as 20 periodicals or book review venues in any medium that you think might publish a review of your book.Please also note any contacts you have at these publications. Please rank them in order of importance:"
                  />
                </Fragment>
              )}
              <Header
                color="black"
                content="Please provide the first and last name, title, and email address of the public information or marketing person at your institution or academic department. We will send them a book announcement."
              />

              <Form.Group inline>
                <Field
                  name="pubInfoLastname"
                  type="text"
                  component={TextInput}
                  placeholder="Last Name"
                />

                <Field
                  name="pubInfoFirstname"
                  type="text"
                  component={TextInput}
                  placeholder="First Name"
                />

                <Field
                  name="pubInfoEmail"
                  type="text"
                  component={TextInput}
                  placeholder="Email"
                />
              </Form.Group>

              <Header
                color="black"
                content="Please organize book launch events no sooner than four weeks after the publication date. Please list here any book launches, readings, book festivals, or conferences you plan to organize or attend during the 12 months after the publication date. Please identify in particular the locations and dates of any overseas events you plan to participate in."
              />
              <Field
                name="bookLaunches"
                type="text"
                component={TextArea}
                placeholder="Please organize book launch events no sooner than four weeks after the publication date. Please list here any book launches, readings, book festivals, or conferences you plan to organize or attend during the 12 months after the publication date. Please identify in particular the locations and dates of any overseas events you plan to participate in."
              />

              {this.state.isTrade !== true ? (
                <Fragment>
                  <Header
                    color="black"
                    content="We have a budget of 5-7 books for use as award submissions. Please list in order of importance awards for which your book is eligible and for which you’d like the book submitted. If you’d like the book submitted for additional awards, you may do so through the purchase of copies at your author discount."
                  />
                  <Field
                    name="scholarAwardSub"
                    type="text"
                    rows={12}
                    component={TextArea}
                    placeholder="We have a budget of 5-7 books for use as award submissions. Please list in order of importance awards for which your book is eligible and for which you’d like the book submitted. If you’d like the book submitted for additional awards, you may do so through the purchase of copies at your author discount."
                  />
                </Fragment>
              ) : (
                <Fragment>
                  <Header
                    color="red"
                    content="We have a budget of 12-15 books for use as award submissions. Please list in order of importance awards for which your book is eligible and for which you’d like the book submitted. If you’d like the book submitted for additional awards, you may do so through the purchase of copies at your author discount."
                  />

                  <Field
                    name="tradeAwardSub"
                    type="text"
                    rows={12}
                    component={TextArea}
                    placeholder="We have a budget of 12-15 books for use as award submissions. Please list in order of importance awards for which your book is eligible and for which you’d like the book submitted. If you’d like the book submitted for additional awards, you may do so through the purchase of copies at your author discount."
                  />
                </Fragment>
              )}
              <Header
                color="black"
                content="Please list here any scholarly or professional organizations you are a member of. Please plan to make a book announcement on listservs or bulletin boards in your organization when possible."
              />
              <Field
                name="orgMemberships"
                type="text"
                rows={12}
                component={TextArea}
                placeholder="Please list here any scholarly or professional organizations you are a member of. Please plan to make a book announcement on listservs or bulletin boards in your organization when possible."
              />

             <Header
                color="black"
                content="Please list any reviews, articles, or other pieces you have published and/or any television or radio appearances. If this information is provided in your CV, please indicate that here rather here rather than resubmit the same material."
              />
              <Field
                name="otherMaterials"
                type="text"
                rows={12}
                component={TextArea}
                placeholder="Please list any reviews, articles, or other pieces you have published and/or any television or radio appearances. If this information is provided in your CV, please indicate that here rather here rather than resubmit the same material."
              />

              <Header
                color="black"
                content="Please indicate the names and contact information for any external publicist, literary agent, or speaker bureau you may be using during the development and launch of the book."
              />
              <Field
                name="publicist"
                type="text"
                rows={12}
                component={TextArea}
                placeholder="Please indicate the names and contact information for any external publicist, literary agent, or speaker bureau you may be using during the development and launch of the book."
              />

              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              {/* <Button
                positive
                type="submit"
              >
                Delete
              </Button>
              <Button onClick={this.props.history.goBack} type="button">
                Cancel
              </Button> */}
            </Form>
          </Segment>
        </Grid.Column>
        {/* } */}
      </Grid>
    );
  }
}

export default withFirestore( connect(
  mapState,
  actions
)(
  reduxForm({ form: "eventForm}", enableReinitialize: true, validate })(
    EventForm
  )
));

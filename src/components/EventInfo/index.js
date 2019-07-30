import React,{Fragment}from 'react'
import { Segment, Icon, Grid, Button, Header} from 'semantic-ui-react'

const EventInfo =({event, profile}) =>  {

    return(
   <Segment.Group>
      <Segment attached="top">
        <Grid>
        <Grid.Column width={16}>
        <Header color="black" content="Trade or Scholarly?" />
        <p>{event.choices}</p>
       
            <Header
                color="black"
                content="Name as you would like it to appear on the title page"
              />
            <p>{event.fullAuthor}</p>
            <Header color="black" content="Legal Name" />
            <p>{event.lastName}, {event.firstName}</p>
            <Header color="black" content="Email address" />
            <p>{event.email}</p>

            <Header color="black" content="Pronouns" />
            <p>{event.pronouns}</p>

            <Header
                color="black"
                content="What country or countries are you a citizen of?"
              />
            <p>{event.countryofOrigin}</p>

              <Header
                color="black"
                content="Working Title and Subtitle of the Book"
              />
               <p>{event.titleofBook}</p>

                <Header
                color="black"
                content="Please list here any social media accounts or handles that we may use for book marketing:"
              />
              <p>{event.social}</p>
              <Header
            color="black"
            content="Please provide a 150-200 word description of the book written for a nonspecialist academic audience"
              />
            <p>{event.bookDesc}</p>

              <Header
                color="black"
                content="Please provide an author bio of up to 60 words prioritizing current academic affiliations, past publications, and any awards you have received."
              />
              <p>{event.authorBio}</p>

               <Header
                color="black"
                content="Please provide a list of 3-5 prominent writers or scholars who you think might be willing to write an endorsement of your book for use on the book and online. Please provide an email address whenever possible"
              />
              <p>{event.blurber}</p>

{event.choices !== "trade" ? (
  <Fragment>
    <Header
      color="black"
      content="Please list as many as ten journals that you think might publish a review of your book. Please also note any contacts you have at these publications. Please rank them in order of importance:"
    />
    <p>{event.scholarReviewers}</p>
  </Fragment>
) : (
  <Fragment>
    <Header
      color="red"
      content="Please list as many as 20 periodicals or book review venues in any medium that you think might publish a review of your book.. Please also note any contacts you have at these publications. Please rank them in order of importance:"
    />
<p>{event.tradeReviewers}</p>
   
  </Fragment>
)}

  <Header
     color="black"
     content="Please provide the first and last name, title, and email address of the public information or marketing person at your institution or academic department. We will send them a book announcement."
      />
      <p>
      Last name: {event.pubInfoLastname}, First name: {event.pubInfoFirstname}. Email {event.pubInfoEmail}
      </p>

  <Header
    color="black"
    content="Please organize book launch events no sooner than four weeks after the publication date. Please list here any book launches, readings, book festivals, or conferences you plan to organize or attend during the 12 months after the publication date. Please identify in particular the locations and dates of any overseas events you plan to participate in."
      />
      <p>{event.bookLaunches}</p>


              {event.choices !== "trade" ? (
                <Fragment>
                  <Header
                    color="black"
                    content="We have a budget of 5-7 books for use as award submissions. Please list in order of importance awards for which your book is eligible and for which you’d like the book submitted. If you’d like the book submitted for additional awards, you may do so through the purchase of copies at your author discount."
                  />
                {event.scholarAwardSub}
                </Fragment>
              ) : (
                <Fragment>
                  <Header
                    color="red"
                    content="We have a budget of 12-15 books for use as award submissions. Please list in order of importance awards for which your book is eligible and for which you’d like the book submitted. If you’d like the book submitted for additional awards, you may do so through the purchase of copies at your author discount."
                  />
                  <p>{event.tradeAwardSub}</p>
                </Fragment>
              )}
    <Header
                color="black"
                content="Please list here any scholarly or professional organizations you are a member of. Please plan to make a book announcement on listservs or bulletin boards in your organization when possible."
              />
           <p> {event.orgMemberships}</p>
            <Header
                color="black"
                content="Please list any reviews, articles, or other pieces you have published and/or any television or radio appearances. If this information is provided in your CV, please indicate that here rather here rather than resubmit the same material."
              />
            <p>{event.otherMaterials}</p> 
              
            <Header
                color="black"
                content="Please indicate the names and contact information for any external publicist, literary agent, or speaker bureau you may be using during the development and launch of the book."
              />
             <p>{event.publicist}</p>

      </Grid.Column>
        </Grid>
        </Segment>
        </Segment.Group>
     
  
    )
}

    
    export default EventInfo
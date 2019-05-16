import React, {Component} from 'react'
import { connect } from 'react-redux'

const mapState = (state) =>({
    data: state.test.data
})

class Test extends Component {
    render() {
        return(
            <div>
                <h3>This is the state from redux: {this.props.data}</h3>
            </div>
        )
    }

}

export default connect (mapState)(Test)
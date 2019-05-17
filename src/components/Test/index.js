import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {incrementCounter, decrementCounter} from './testActions'

const mapState = (state) =>({
    data: state.test.data
})

const actions ={
incrementCounter,
decrementCounter
}

class Test extends Component {
    render() {
        const {incrementCounter, decrementCounter, data} = this.props;
        return(
            <div>
                <h3>This is the state from redux: {data}</h3>
            <Button onClick = {incrementCounter} content = "increment"/>
            <Button onClick = {decrementCounter} content = "decrement"/>
            </div>

        )
    }

}

export default connect (mapState, actions) (Test)
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {incrementCounter, decrementCounter} from './testActions'
import {openModal} from '../../modals/ModalActions'

const mapState = (state) =>({
    data: state.test.data
})

const actions ={
incrementCounter,
decrementCounter,
openModal
}

class Test extends Component {
    render() {
        const {incrementCounter, decrementCounter, data, openModal} = this.props;
        return(
            <div>
                <h3>This is the state from redux: {data}</h3>
            <Button onClick = {incrementCounter} content = "increment"/>
            <Button onClick = {decrementCounter} content = "decrement"/>
            <Button onClick={()=>openModal('TestModal',{data: 44})} content = "open Modal"/>

            </div>

        )
    }

}

export default connect (mapState, actions) (Test)
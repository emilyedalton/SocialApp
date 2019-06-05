import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {incrementAsync, decrementAsync} from './testActions'
import {openModal} from '../../modals/ModalActions'

const mapState = (state) =>({
    data: state.test.data,
    loading: state.test.loading
})

const actions ={
incrementAsync,
decrementAsync,
openModal
}

class Test extends Component {
    render() {
        const {incrementAsync, decrementAsync, data, openModal, loading} = this.props;
        return(
            <div>
                <h3>This is the state from redux: {data}</h3>
            <Button loading ={loading} onClick = {incrementAsync} content = "increment"/>
            <Button loading={loading} onClick = {decrementAsync} content = "decrement"/>
            <Button onClick={()=>openModal('TestModal',{data: 44})} content = "open Modal"/>

            </div>

        )
    }

}

export default connect (mapState, actions) (Test)
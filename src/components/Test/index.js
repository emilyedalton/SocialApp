import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Button} from 'semantic-ui-react'
import {incrementAsync, decrementAsync} from './testActions'
import {openModal} from '../../modals/ModalActions'

const mapState = (state) =>({
    data: state.test.data,
    loading: state.test.loading,
    buttonName: state.async.elementName
})

const actions ={
incrementAsync,
decrementAsync,
openModal
}

class Test extends Component {
    render() {
        const {incrementAsync, decrementAsync, data, openModal, loading, buttonName} = this.props;
        return(
            <div>
                <h3>This is the state from redux: {data}</h3>
            <Button 
            name = 'increment'
            loading ={buttonName ==='increment' && loading} 
            onClick = {(e)=>incrementAsync(e.target.name)} 
            content = "increment"/>
            <Button 
            name = 'decrement'
            loading ={buttonName ==='decrement' && loading} 
            onClick = {(e) => decrementAsync(e.target.name)} 
            content = "decrement"/>
            <Button 
            onClick={()=>
                openModal('TestModal',{data: 44})} 
                content = "open Modal"/>

            </div>

        )
    }

}

export default connect (mapState, actions) (Test)
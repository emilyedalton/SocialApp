import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import Login from '../components/Login';
import {closeModal} from "./ModalActions";

const actions = {closeModal};

class LoginModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Login to NU Press Author Portal
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Login />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(LoginModal);
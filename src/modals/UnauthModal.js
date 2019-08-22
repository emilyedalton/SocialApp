import React, {Component} from 'react';
import {Modal, Button } from 'semantic-ui-react';
import {connect} from 'react-redux';

import {closeModal, openModal} from "./ModalActions";

const actions = {closeModal, openModal};

class UnauthModal extends Component {
    render() {
        const {openModal, closeModal} = this.props;
        return (
            <Modal
                size='mini'
                open={true}
                onClose={closeModal}
            >
                <Modal.Header>
                    You need to be signed in to do that!
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <p>Please either login or create an account to view this page</p>
                        <Button.Group widths={4}>
                            <Button fluid color='teal' onClick={() => openModal("LoginModal")}>Login</Button>
                            <Button fluid onClick={() => openModal("RegisterModal")}>Create New Account</Button>
                        </Button.Group>
                        
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(UnauthModal);
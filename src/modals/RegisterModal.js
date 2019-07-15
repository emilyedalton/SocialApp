import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import Register from '../components/Register'
import {closeModal} from "./ModalActions";
const actions = {closeModal};

class RegisterModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Sign Up to Re-vents!
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Register />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(RegisterModal);
import React, {Component} from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';

import ResetForm from '../components/Reset';
import {closeModal} from "./ModalActions";

const actions = {closeModal};

class ResetModal extends Component {
    render() {
        return (
            <Modal
                size='mini'
                open={true}
                onClose={this.props.closeModal}
            >
                <Modal.Header>
                    Reset Your Password
                </Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <ResetForm />
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }
}

export default connect(null, actions)(ResetModal);
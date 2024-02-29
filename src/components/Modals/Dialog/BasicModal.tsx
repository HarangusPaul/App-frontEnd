import React from 'react';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Modal,
} from 'semantic-ui-react'


export interface ModalProps {
    modalTitle:string;
    text:string;
    open: boolean;
    setOpen:(opt:boolean)=>{};
}

function BasicModal(props:ModalProps) {

    return (
        <Modal
            onClose={() => props.setOpen(false)}
            onOpen={() => props.setOpen(true)}
            open={props.open}
        >
            <ModalHeader>{ props.modalTitle }</ModalHeader>
            <ModalContent image>
                <ModalDescription>
                    {props.text}
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                <Button onClick={() => props.setOpen(false)}>Exit!</Button>
            </ModalActions>
        </Modal>
    )
}

export default BasicModal

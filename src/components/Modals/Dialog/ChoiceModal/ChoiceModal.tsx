import React, {Dispatch, SetStateAction, useEffect} from 'react';
import {Button, Modal, ModalActions, ModalContent, ModalHeader} from 'semantic-ui-react';
import './ChoiceModal.css';
import DropdownButton from '../../../Inputs/Buttons/DropdownButton/DropdownButton';

export interface ModalPropsChoice {
    messageButton: string;
    text: string;
    header: string;
    // size: any;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    options: Option[]
}

interface Option {
    key: string;
    text: string;
    value: string;
}

export const ChoiceModal = ({props}: { props: ModalPropsChoice }) => {
    const [open, setOpen] = React.useState(false);
    const [counter, setCounter] = React.useState(0);

    useEffect(() => {
        if (counter === 0) {
            setCounter(1);
            return;
        }
        setOpen(true);
    }, [props]);

    return (
        <Modal
            className={'modalFrame'}
            size={'tiny'}
            height={2000}
            open={open}
            onClose={() => {
                if (props.setOpen != undefined) props.setOpen(false);
            }}
        >
            <ModalHeader>{props.header}</ModalHeader>
            <ModalContent>
                <p>{props.text}</p>
                <DropdownButton multiple={true} search={true} options={props.options}/>
            </ModalContent>
            <ModalActions>
                <Button positive onClick={() => {
                    if (props.setOpen != undefined) {
                        setCounter(0)
                        props.setOpen(false)
                        setOpen(false);
                    }
                }}>
                    {props.messageButton}
                </Button>
            </ModalActions>
        </Modal>
    );
};

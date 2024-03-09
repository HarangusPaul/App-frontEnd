import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import React, {useEffect} from "react";
import "./NotificationModal.css";

export interface ModalProps {
    open: boolean;
    size: any;
    setOpen: (opt: boolean) => {};
}

export const NotificationModal = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const [counter, setCounter] = React.useState(0);

    useEffect(() => {
            if (counter === 0) {
                setCounter(1)
                return;
            }
            setOpen(true)
            props.props.setOpen(false);
        }
        , [props])

    return (
        <Modal className={"modalFrame"}
               size={props.size}
               open={open}
               onClose={() => {
                   if (props.setOpen != undefined) props.setOpen(false)
               }}
        >
            <ModalHeader>{props.props.header}</ModalHeader>
            <ModalContent>
                <p>{props.props.text}</p>
            </ModalContent>
            <ModalActions>
                <Button positive onClick={() => {
                    setOpen(false)
                }}>
                    {props.props.messageButton}
                </Button>

            </ModalActions>
        </Modal>
    )
}
import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import CropAndLoad from "./CropAndLoad";
import Button from "@mui/material/Button";
import {stateOfModalWindow} from "store/reduxToolkit/features/settings-page/settingsSelectors";
import {useSelector} from "react-redux";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import {changeStateOfModalWindow} from "store/reduxToolkit/features/settings-page/settingsSlice";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CropperModal() {
    const modalState = useSelector(stateOfModalWindow)
    const dispatch = useTypeDispatch()
    const handleClickOpen = () => {
        dispatch(changeStateOfModalWindow(true))
    };

    const handleClose = () => {
        dispatch(changeStateOfModalWindow(false))
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Change avatar
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={"lg"}
                open={modalState}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Upload and send photo"}</DialogTitle>
                <DialogContent
                >
                    <CropAndLoad/>
                </DialogContent>
            </Dialog>
        </div>
    );
}

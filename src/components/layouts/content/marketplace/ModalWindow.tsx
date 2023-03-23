import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {TransitionProps} from '@mui/material/transitions';
import {useSelector} from "react-redux";
import {
    infoAboutProduct,
    stateOfModalWindow
} from "../../../../store/reduxToolkit/features/marketplace-page/marketplaceSelectors";
import {changeStateOfModalWindow} from "../../../../store/reduxToolkit/features/marketplace-page/marketplaceSlice";
import {useTypeDispatch} from "../../../../hooks/useTypeDispatch";
import s from "./marketplace.module.sass"

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalWindow=()=> {
    const dispatch = useTypeDispatch()
    const modalState = useSelector(stateOfModalWindow)
    const aboutProduct = useSelector(infoAboutProduct)
    const handleClose = () => {
        dispatch(changeStateOfModalWindow(false))
    }

    return (
        <div>
            {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
            {/*    Change avatar*/}
            {/*</Button>*/}
            <Dialog
                fullWidth={true}
                maxWidth={"md"}
                open={modalState}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"About product"}</DialogTitle>
                <DialogContent>
                    <div className={s.aboutProductWrapper}>
                        <img src={aboutProduct.image} alt={aboutProduct.name}/>
                        <div className={s.infoProduct}>
                            <div>{aboutProduct.name}</div>
                            <div>{aboutProduct.price}</div>
                            <div>{aboutProduct.shop}</div>
                        </div>

                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
}


export default ModalWindow
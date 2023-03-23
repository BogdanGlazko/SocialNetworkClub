import React, {useEffect, useRef, useState} from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {Alert, Input} from "@mui/material";
import s from "./settings.module.sass"
import {useSelector} from "react-redux";
import {getUserDataForSidebar} from "store/reduxToolkit/features/sidebar-page/sidebarSelectors";
import {useTypeDispatch} from "hooks/useTypeDispatch";
import {changeUserAvatar} from "store/reduxToolkit/features/settings-page/settingsThunks";
import Button from "@mui/material/Button";
import Loader from "../../../shared/additionalComponents/Loader";
import {changeErrorStatus, uploadingPhoto} from "store/reduxToolkit/features/settings-page/settingsSlice";
import {error, loadingPhotoStatus} from "store/reduxToolkit/features/settings-page/settingsSelectors";
import Snackbar from "@mui/material/Snackbar";


const defaultSrc =
    "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

export const CropAndLoad: React.FC = () => {
    const dispatch =useTypeDispatch()
    const isUploading=useSelector(loadingPhotoStatus)
    const userDataForSidebar = useSelector(getUserDataForSidebar)
    const [image, setImage] = useState(userDataForSidebar?.photos.large)
    const [cropData, setCropData] = useState<any>("#")
    const [cropper, setCropper] = useState<Cropper>()
    const imageRef = useRef<HTMLImageElement>(null)
    const errorImage=useSelector(error)

    useEffect(()=>{
        if(cropData==="#"){
            return
        }
        dispatch(changeUserAvatar(cropData))
    },[cropData])

        const handleFileInputChangeValidation = (event:any) => {
            const file = event.target.files[0];
            const allowedImageFormats = ['image/JPG', 'image/JPEG','image/jpg', 'image/jpeg', 'image/png','image/PNG'];
            const fileNameParts = file.name.split('.');
            const fileExtension = fileNameParts[fileNameParts.length - 1];
            console.log(fileExtension)
            console.log(file.type)

            if (!allowedImageFormats.includes(file.type) || !allowedImageFormats.includes(`image/${fileExtension}`)) {
                dispatch(changeErrorStatus(true))
            } else {
                console.log('Image file selected:', file.name);
                cropImage(event)
            }
        };

        const cropImage = (e: any) => {
            console.log(e.target.files)
            e.preventDefault();
            let files;
            if (e.dataTransfer) {
                files = e.dataTransfer.files;
            } else if (e.target) {
                files = e.target.files;
            }
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as any);
            };
            reader.readAsDataURL(files[0]);
        };
        const getCropData = async () => {
            dispatch(uploadingPhoto(true))
            if (typeof cropper !== undefined) {
                setCropData(cropper!.getCroppedCanvas().toDataURL())
            }
        };
        const handleCloseAlert = (event: React.SyntheticEvent | Event, reason?: string) => {
            if (reason === 'clickaway') {
                return;
            }
            dispatch(changeErrorStatus(false))
        };


        return (
            <div className={s.wrapperCrop}>
                {isUploading ?
                    <div className={s.loaderWrap}><Loader/></div> :
                    <div className={s.wrapperCrop}>
                        <Input type="file"
                               onChange={handleFileInputChangeValidation}
                        />
                        <br/>
                        <br/>
                        <Cropper
                            style={{height: "50vh", width: "65%"}}
                            initialAspectRatio={1}
                            src={image ? image : defaultSrc}
                            ref={imageRef}
                            viewMode={1}
                            guides={true}
                            minCropBoxHeight={10}
                            minCropBoxWidth={10}
                            background={false}
                            responsive={true}
                            checkOrientation={false}
                            onInitialized={(instance) => {
                                setCropper(instance);
                            }}
                        />
                        <br/>
                        <Button onClick={getCropData}>
                            Crop Image
                        </Button>
                        <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center',}}
                                  open={errorImage}
                                  autoHideDuration={6000}
                                  onClose={handleCloseAlert}>
                            <Alert onClose={handleCloseAlert}
                                   severity="error"
                                   sx={{width: '100%', marginTop:"18%"}}>
                                {"Try again with another photo or change type of file to JPEG or PNG"}
                            </Alert>
                        </Snackbar>
                    </div>
                }
                <br style={{clear: "both"}}/>
            </div>
        );
    };

export default CropAndLoad;

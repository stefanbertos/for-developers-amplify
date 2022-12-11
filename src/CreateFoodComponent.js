import {EditFood} from "./ui-components";
import {Alert, Flex, LocationSearch, MapView, View} from "@aws-amplify/ui-react";
import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {toast} from 'react-toastify';
import {DataStore} from "aws-amplify";
import {Food} from "./models";
import {Storage} from "@aws-amplify/storage"

export default function CreateFoodComponent(props) {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [pickUpTime, setPickUpTime] = useState("");
    const [image, setImage] = useState("Food.png");
    const [location, setLocation] = useState("");

    const [message, setMessage] = useState('');
    const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(false);

    const notifyToast = (info) => toast(info);

    const inputRef = useRef(null);
    const handleClick = () => {
        // 👇️ open file input box on click of other element
        inputRef.current.click();
    };
    const handleFileChange = event => {

        const fileObj = event.target.files && event.target.files[0];
        if (!fileObj) {
            return;
        }
        // add user prefix
        // if File Uploader from https://ui.docs.amplify.aws/react/connected-components/storage/fileuploader would have a prefix possibility we wouldn't need to craft this code
        const fileName = props.username + '_' + fileObj.name;

        Storage.put(fileName, fileObj, {
            resumable: true,
            level: 'public', // this is to make the object really publicly accessible -> also we need to have override.ts policy statement with s3:PutObjectAcl
            acl: 'public-read',
            completeCallback: (event) => {
                console.log('file upload completed', event);
                Storage.get(fileName, {level: 'public'}).then((url) => {
                    //we will by default receive signed url, but we don't want to store this into database as it expires and then the user would not be able to reach the url for image
                    //and because we configured the acl for public read, when we strip the context path which is for signed url we will receive public url
                    //the full url is like this https://giveaway-storage-1318d81d93700-staging.s3.eu-central-1.amazonaws.com/public/6fcbd573-75ac-4c76-b38f-69d9ce947c8e_apple.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Date=20221211T105212Z&X-Amz-Expires=604800&X-Amz-Security-Token=VzTHq82ohFJpYn&X-Amz-SignedHeaders=host&x-amz-user-agent=aws-sdk-js%2F3.6.1%20os%2FWindows%2FNT_10.0%20lang%2Fjs%20md%2Fbrowser%2FChrome_108.0.0.0%20api%2Fs3%2F3.6.1%20aws-amplify%2F5.0.3_js&x-id=GetObject
                    let publicUrl = url.split("?")[0];
                    setImage(publicUrl);
                    console.log(publicUrl);
                });
            },
            progressCallback: (progress) => {
                console.log(`file uploaded: ${progress.loaded}/${progress.total}`);
            },
            errorCallback: (err) => {
                console.error('Unexpected error while uploading', err);
            }
        });
    };

    // if the Amplify UI Forms - Form builder would support the Slot component or something similar we could use it and not need to craft the code this way to customize the image and location component
    const editFoodOverrides = {
        "Image": {
            src: image
        }, "UploadButton": {
            onClick: () => {
                handleClick()
            }
        }, "CancelButton": {
            onClick: () => {
                navigate('/')
            }
        }, "SaveButton": {
            disabled: title === "" || quantity === 0 || quantity === "" || pickUpTime === "" || image === "Food.png" || location === "",
            onClick: () => {
                console.log('before save', title, description, quantity, pickUpTime, location, image);
                DataStore.save(new Food({
                    title: title,
                    description: description,
                    quantity: parseInt(quantity),
                    pickUpTime: pickUpTime,
                    location: JSON.stringify(location),
                    image: image
                })).then((value) => {
                    console.log(value);
                    navigate("/");
                    notifyToast("Food item successfully created")
                }, (reason) => {
                    setMessage(reason);
                    setIsErrorMessageVisible(true)
                });
            }
        }, "TitleField": {
            onChange: (event) => {
                setTitle(event.target.value)
            }
        }, "DescriptionField": {
            onChange: (event) => {
                setDescription(event.target.value)
            }
        }, "QuantityField": {
            type: 'number', onChange: (event) => {
                setQuantity(event.target.value)
            }
        }, "PickUpTimeField": {
            onChange: (event) => {
                setPickUpTime(event.target.value)
            }
        }
    };

    const handleMapClick = (event) => {
        console.log(event);
        setLocation(event.lngLat)
    };

    return (<Flex justifyContent="center">
            {isErrorMessageVisible && (
                <Alert variation="error" isDismissible={false} hasIcon={true} heading="Error">{message}</Alert>)}
            <input
                style={{display: 'none'}}
                ref={inputRef}
                type="file"
                onChange={handleFileChange}
                accept="image/png, image/jpeg"
            />
            <EditFood overrides={editFoodOverrides} location={<View>
                <Flex direction={'column'} alignItems={'flex-start'}>
                    <span>Location</span>
                    <MapView onClick={handleMapClick}
                             initialViewState={{
                                 longitude: 14.420580503976879, latitude: 50.08698353367768, zoom: 10,
                             }}
                             style={{width: '600px', height: '300px'}}
                    >
                        <LocationSearch position="top-left"/>
                        ))}
                    </MapView>
                </Flex>
            </View>}/>
        </Flex>)
}

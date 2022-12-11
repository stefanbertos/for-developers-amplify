import {useNavigate} from "react-router-dom";
import {Flex, MapView, View} from "@aws-amplify/ui-react";
import {FoodDetail} from "./ui-components";

export default function FoodDetailComponent(props) {
    const navigate = useNavigate();
    const foodDetailOverrides = {
        "BackButton": {
            onClick: () => {
                navigate('/')
            }
        }
    }

    return (<Flex justifyContent="center">
        <FoodDetail model={props.food} overrides={foodDetailOverrides} location={<View>
            <Flex direction={'column'} alignItems={'flex-start'}>
                <span>Location</span>
                <MapView initialViewState={{
                    longitude: props.food.location.lng, latitude: props.food.location.lat, zoom: 15,
                }}
                         style={{width: '600px', height: '300px'}}></MapView></Flex></View>}/>
    </Flex>)
}
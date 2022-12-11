import './App.css';
import {Banner, FoodCardCollection, Footer, NavBar} from './ui-components';
import {Route, Routes, useNavigate} from "react-router-dom";
import CreateFoodComponent from "./CreateFoodComponent";
import {withAuthenticator} from '@aws-amplify/ui-react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FoodDetailComponent from "./FoodDetailComponent";
import {useState} from "react";

function App({signOut, user}) {
    const navigate = useNavigate();
    const [food, setFood] = useState();

    const navBarOverrides = {
        "Logo": {
            src: "Logo.png"
        }
    }

    return (<>
        <div className="content">
            <NavBar overrides={navBarOverrides} width={"100%"} user={<>
                <button onClick={signOut}>Sign out</button>
                <h1>{user.attributes.name}</h1></>}/>
            <ToastContainer/>
            <Routes>
                <Route path="/createFood" element={<CreateFoodComponent username={user.attributes.sub}/>}></Route>
                <Route path="/foodDetail" element={<FoodDetailComponent food={food}/>}></Route>
                <Route exact path="/" element={<><Banner className="banner" width={"100%"}/><FoodCardCollection
                    className="foodCards"  overrideItems={({item, index}) => ({
                    overrides: {
                        "ViewButton": {
                            onClick: () => {
                                setFood(item);
                                navigate('/foodDetail');
                            }
                        }
                    }
                })}/> </>}></Route>
            </Routes>
        </div>
        <Footer className="footer" width={"100%"}/>
    </>)
}

export default withAuthenticator(App);


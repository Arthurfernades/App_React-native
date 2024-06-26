import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

import Home from "../view/Home"
import Login from "../view/Login"
import Registrar from "../view/Register"

import HomeUser from "../view/user/HomeUser"
import Registro from "../view/user/Registro";
import DashBoard from "../view/user/DashBoard";

import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../auth/AuthContext";

const Stack = createStackNavigator();

const InsideStack = createStackNavigator();

function Navigator() {

    const [user, setUser] = useState(null);

    useEffect(() => {

        onAuthStateChanged(FIREBASE_AUTH, (user) => {
            console.log(user);
            setUser(user);
        });

    }, [])

    return (

        <NavigationContainer>
            {!user ?
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} options={{headerStyle: {backgroundColor: '#A987DE'}, title: 'Home'}} />
                    <Stack.Screen name="Registrar" component={Registrar} options={{headerStyle: {backgroundColor: '#A987DE'}, title: 'Home'}} />
                </Stack.Navigator>
                :
                <InsideStack.Navigator>
                    <InsideStack.Screen name="HomeUser" component={HomeUser} options={{ headerShown: false }} />
                    <InsideStack.Screen name="Registro" component={Registro} options={{headerStyle: {backgroundColor: '#A987DE'}, title: 'Home'}} />
                    <InsideStack.Screen name="DashBoard" component={DashBoard} options={{headerStyle: {backgroundColor: '#A987DE'}, title: 'Home'}} />
                </InsideStack.Navigator>
            }
        </NavigationContainer>

    );

}

export default Navigator;
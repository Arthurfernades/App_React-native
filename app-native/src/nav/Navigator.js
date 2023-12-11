import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";

import Home from "../view/Home"
import Login from "../view/Login"
import Registrar from "../view/Register"

import HomeUser from "../view/user/HomeUser"
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
            {user ?
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Registrar" component={Registrar} />
                </Stack.Navigator>
                :
                <InsideStack.Navigator>
                    <InsideStack.Screen name="HomeUser" component={HomeUser} options={{ headerShown: false }} />
                </InsideStack.Navigator>
            }
        </NavigationContainer>

    );

}

export default Navigator;
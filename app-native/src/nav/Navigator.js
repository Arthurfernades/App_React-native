import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../view/Home"
import Login from "../view/Login"
import Registrar from "../view/Register"

const Stack = createStackNavigator();

function Navigator() {

    return(

        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Login" component={Login}/>
                <Stack.Screen name="Registrar" component={Registrar}/>
            </Stack.Navigator>
        </NavigationContainer>

    );

}

export default Navigator;
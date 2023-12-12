import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import { FIREBASE_AUTH } from "../../auth/AuthContext";

import monkey from "../../img/king_monkey.jpg"
import { StyleSheet } from "react-native";

function HomeUser({ navigation }) {

    return (

        <ImageBackground source={{ uri: monkey }} style={style.img}>
            <View style={style.container2}>
                <IconButton icon='emoticon-poop' style={style.button} iconColor="#A987DE" size={50} onPress={() => navigation.navigate("Registro")} />
                <IconButton icon='view-dashboard' style={style.button} iconColor="#A987DE" size={50} onPress={() => navigation.navigate("DashBoard")} />
                <IconButton icon='exit-run' style={style.button} iconColor="#A987DE" size={50} onPress={() => FIREBASE_AUTH.signOut()} />
            </View>
        </ImageBackground>

    )

}

export default HomeUser;

const style = StyleSheet.create({
    img: {
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
    },
})
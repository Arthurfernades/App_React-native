import { ImageBackground, StyleSheet, View } from "react-native";
import { IconButton } from "react-native-paper";

function Home({ navigation }) {

    return (

        <View style={style.container}>
            <ImageBackground  resizeMode="cover" style={style.image}>
                <IconButton
                    style={style.button}
                    icon='account'
                    iconColor="blue"
                    size={64}
                    onPress={() => navigation.navigate("Login")} />
                <IconButton
                    style={style.button}
                    icon='account-plus'
                    iconColor="blue"
                    size={64}
                    onPress={() => navigation.navigate("Registrar")} />
            </ImageBackground>

        </View>

    );

}

const style = StyleSheet.create({

    container: {
        flex: 1
    },
    button: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    }

})

export default Home;
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { TouchableOpacity } from "react-native-web";

function Home({ navigation }) {

    return (

        <View style={style.container}>
            <View>
                <Text style = {style.title}>
                    Did I Poop Today?
                </Text>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate("Login")}>
                        <Text style = {style.text}>Acessar conta</Text>
                    </TouchableOpacity>
                <TouchableOpacity
                    style={style.button}
                    onPress={() => navigation.navigate("Registrar")}>
                        <Text style = {style.text}>Criar conta</Text>
                    </TouchableOpacity>
            </View>

        </View>

    );

}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#DEB787",
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    title: {
        flex: 2,
        fontFamily: "milks-casual",
        fontSize: 60,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 30
    },
    button: {
        flex: 1,
        backgroundColor: '#A987DE',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

})

export default Home;
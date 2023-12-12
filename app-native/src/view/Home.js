import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";

function Home({ navigation }) {

    const [fontsLoaded] = useFonts({

        'milks-casual': require('../../assets/fonts/milks-casual.ttf')

    });

    return (

        <View style={style.container}>
            <Text style={style.title}>
                Did I
                <br/>
                Poop
                <br/>
                Today?
            </Text>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("Login")}>
                <Text style={style.text}>Acessar conta</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.button}
                onPress={() => navigation.navigate("Registrar")}>
                <Text style={style.text}>Criar conta</Text>
            </TouchableOpacity>
        </View>

    );

}

const style = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#DEB787",
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#A987DE',
        textAlign: 'center',
        marginVertical: 10,
        textAlign: 'center',
        fontFamily: 'milks-casual',
        lineHeight: '100px'
    },
    text: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'milks-casual'
    },
    button: {
        backgroundColor: '#A987DE',
        width: '80%',
        alignItems: 'center',
        borderRadius: '10px',
        borderBottomWidth: 2,
        borderBottomColor: '#DE9987',
        elevation: 5,
        margin: '40px'
    },

})

export default Home;
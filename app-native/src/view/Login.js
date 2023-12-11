import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Avatar, TextInput } from "react-native-paper";
import { FIREBASE_AUTH } from "../auth/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {

    const [user, setUser] = useState({
        email: '',
        senha: '',
    })

    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const singIn = async () => {

        setLoading(true);
        try {

            const response = await signInWithEmailAndPassword(auth, user.email, user.senha)
            console.log(response);
            navigation.navigate("HomeUser");
        } catch (error) {

            console.log(error);
            alert('Falha ao tentar entrar' + error.message);

        } finally {

            setLoading(false);

        }
    }

    return (

        <View style={style.container}>
            <Avatar.Icon size={96} icon="account" color="blue" style={style.avatar} />
            <TextInput
                mode="outlined"
                label="E-mail"
                autoCapitalize="none"
                style={style.input}
                value={user.email}
                onChangeText={(e) => setUser({ ...user, email: e })}
            />
            <TextInput
                mode="outlined"
                label="Senha"
                secureTextEntry={true}
                right={<TextInput.Icon icon="eye" />}
                style={style.input}
                value={user.senha}
                onChangeText={(e) => setUser({ ...user, senha: e })}
            />
            {loading ?
                <ActivityIndicator size="large" color="#898075" />
                :
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} onPress={singIn}>Entrar</Text>
                </TouchableOpacity>
            }

        </View>

    );

}

const style = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        margin: 10
    },
    button: {
        width: '30%',
        backgroundColor: '#6495ed',
        alignItems: 'center',
        borderRadius: '3px',
    },
    buttonText: {
        color: 'white',
        padding: 10
    },
    avatar: {
        backgroundColor: 'white'
    }

})

export default Login;
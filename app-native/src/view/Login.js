import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Avatar, TextInput } from "react-native-paper";
import { FIREBASE_AUTH } from "../auth/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login({ navigation }) {

    const [user, setUser] = useState({
        email: 'arthurfernandes1666@gmail.com',
        senha: '123456',
    })

    const [loading, setLoading] = useState(false);

    const [openEye, setOpenEye] = useState(true);

    const [iconEye, setIconEye] = useState('eye-off');

    const changeEye = () => {
        if (openEye) {
            setOpenEye(false);
            setIconEye('eye');
        } else {
            setOpenEye(true);
            setIconEye('eye-off');
        }
    }

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
            <Avatar.Icon size={96} icon="emoticon-poop" color="#898075" style={style.avatar} />
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
                secureTextEntry={openEye}
                right={<TextInput.Icon icon= {iconEye} onPress={changeEye} />}
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
        backgroundColor: '#DEB787'
    },
    input: {
        width: '80%',
        margin: 10
    },
    button: {
        backgroundColor: '#A987DE',
        width: '60%',
        alignItems: 'center',
        borderRadius: '10px',
        borderBottomWidth: 2,
        borderBottomColor: '#DE9987',
        elevation: 5,
        margin: '40px'
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
import { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Avatar, TextInput } from "react-native-paper";
import { FIREBASE_AUTH } from "../auth/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Register({ navigation }) {

    const [user, setUser] = useState({
        email: '',
        senha: '',
        confirmSenha: ''
    })

    const [loading, setLoading] = useState(false);

    const auth = FIREBASE_AUTH;

    const singUp = async () => {

        setLoading(true);
        try {

            const response = await createUserWithEmailAndPassword(auth, user.email, user.senha)
            console.log(response);
            alert('Verifique seu E-mail!');
            navigation.navigate("Home");
        } catch (error) {

            console.log(error);
            alert('Falha ao tentar criar a conta' + error.message);

        } finally {

            setLoading(false);

        }

    }

    return (
        <KeyboardAvoidingView behavior="padding">
            <View style={style.container}>
                <Avatar.Icon size={96} icon="account" color="blue" style={style.avatar} />
                <TextInput
                    mode="outlined"
                    label="E-mail"
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
                <TextInput
                    mode="outlined"
                    label="Confirme a senha"
                    secureTextEntry={true}
                    right={<TextInput.Icon icon="eye" />}
                    style={style.input}
                    value={user.confirmSenha}
                    onChangeText={(e) => setUser({ ...user, confirmSenha: e })}
                />
                {loading ?
                    <ActivityIndicator size="large" color="#898075" />
                    :
                    <TouchableOpacity style={style.button}>
                        <Text style={style.buttonText} onPress={singUp}>Cadastrar</Text>
                    </TouchableOpacity>
                }
            </View>
        </KeyboardAvoidingView>
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

export default Register;
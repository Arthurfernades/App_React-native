import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ActivityIndicator, Avatar, TextInput } from "react-native-paper";
import { FIREBASE_AUTH } from "../auth/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Register({ navigation }) {

    const [user, setUser] = useState({
        email: '',
        senha: '',
        confirmSenha: ''
    })

    const comparaSenha = () => {

        if (user.senha != user.confirmSenha) {
            setUser({ ...user, confirmSenha: '' });
            return false;
        }

        return true;
    }

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
        // <KeyboardAvoidingView behavior="padding">
        <View style={style.container}>
            <Avatar.Icon size={96} icon="emoticon-poop" color="#898075" style={style.avatar} />
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
                secureTextEntry={openEye}
                right={<TextInput.Icon icon={iconEye}onPress={changeEye} />}
                style={style.input}
                value={user.senha}
                onChangeText={(e) => setUser({ ...user, senha: e })}
            />
            <TextInput
                mode="outlined"
                label="Confirme a senha"
                secureTextEntry={openEye}
                right={<TextInput.Icon icon={iconEye}onPress={changeEye} />}
                style={style.input}
                value={user.confirmSenha}
                onChangeText={(e) => setUser({ ...user, confirmSenha: e })}
                onEndEditing={comparaSenha}
            />
            {loading ?
                <ActivityIndicator size="large" color="#898075" />
                :
                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText} onPress={singUp}>Cadastrar</Text>
                </TouchableOpacity>
            }
        </View>
        // </KeyboardAvoidingView>
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

export default Register;
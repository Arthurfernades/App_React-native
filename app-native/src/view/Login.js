import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Avatar, TextInput } from "react-native-paper";


function Login({ navigation }) {

    const [user, setUser] = useState({
        email: '',
        senha: '',
    })

    return (

        <View style = {style.container}>
            <Avatar.Icon size={96} icon="account" color="blue" style = {style.avatar}/>
            <TextInput
                mode="outlined"
                label="E-mail"
                style =  {style.input}
                value={user.email}
                onChangeText={(e) => setUser({ ...user, email: e })}
            />
            <TextInput
                mode="outlined"
                label="Senha"
                secureTextEntry = {true}
                right={<TextInput.Icon icon="eye" />}
                style =  {style.input}
                value={user.senha}
                onChangeText={(e) => setUser({ ...user, senha: e })}
            />
            <TouchableOpacity style = {style.button}>
                <Text style = {style.buttonText}>Entrar</Text>
            </TouchableOpacity>
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
        backgroundColor: 'blue',
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
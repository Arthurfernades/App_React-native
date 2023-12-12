import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProgressBar } from "react-native-paper";
import { Audio } from 'expo-av';

function Registro({ navigation }) {

    const [sound, setSound] = useState();

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../../../assets/sound/fart1.mp3')
        );
        setSound(sound);

        await sound.playAsync();
    }

    useEffect(() => {
        return sound
          ? () => {
              sound.unloadAsync();
            }
          : undefined;
      }, [sound]);

    const [progress, setProgress] = useState(0);

    const incriseProgress = () => {

        let count = progress + 0.034;

        playSound();

        setProgress(count)

    }

    return (

        <View style={style.container}>
            <TouchableOpacity style={style.button} onPress={incriseProgress}>
                <Text style={style.buttonText}>Caguei</Text>
            </TouchableOpacity>
            <ProgressBar progress={progress} style={style.barra} color="#574025" />
        </View>

    )

}

export default Registro;

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
    button: {
        backgroundColor: '#574025',
        paddingVertical: 12,
        paddingHorizontal: 24,
        width: '30%',
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 16,
        marginBottom: 16,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    barra: {
        marginTop: 16,
        width: '100%',
        height: 10,
        borderRadius: 5,
    },
});
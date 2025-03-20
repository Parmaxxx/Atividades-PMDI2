import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversor de Unidades</Text>

            {/* Botão para conversão de temperatura */}
            <TouchableOpacity style={styles.button} onPress={() => router.push('/temperature')}>
                <Image source={require('../src/assets/Temp.webp')} style={styles.image} />
                <Text style={styles.buttonText}>Converter Temperatura</Text>
            </TouchableOpacity>

            {/* Botão para conversão de velocidade */}
            <TouchableOpacity style={styles.button} onPress={() => router.push('/speed')}>
                <Image source={require('../src/assets/Speed.jpg')} style={styles.image} />
                <Text style={styles.buttonText}>Converter Velocidade</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    button: { alignItems: 'center', margin: 10 },
    image: { width: 100, height: 100, marginBottom: 10 },
    buttonText: { fontSize: 18, fontWeight: 'bold' },
});

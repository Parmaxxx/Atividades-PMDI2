import React from 'react';
import {View, Text, StyleSheet, Button, ImageBackground} from 'react-native';
import { useRouter } from 'expo-router';

export default function SpeedScreen() {
    const router = useRouter();
    return (
        <ImageBackground
            source={require('../src/assets/bg-Speed.webp')}
            style={styles.background}
            resizeMode="cover"
        >
        <View style={styles.container}>
            <Text style={styles.title}>Escolha a Conversão</Text>
            <Button title="Km/h → Mph" onPress={() => router.push('/convert?mode=KtoM')} />
            <Button title="Mph → Km/h" onPress={() => router.push('/convert?mode=MtoK')} />
        </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {flex: 1,width: '100%',height: '100%'},
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});

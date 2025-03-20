import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';


export default function TemperatureScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Escolha a Conversão</Text>
            <Button title="Celsius → Fahrenheit" onPress={() => router.push('/convert?mode=CtoF')} />
            <Button title="Fahrenheit → Celsius" onPress={() => router.push('/convert?mode=FtoC')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
});

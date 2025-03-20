import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ConvertScreen() {
    const { mode } = useLocalSearchParams();
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [unit, setUnit] = useState('');

    const convert = () => {
        const value = parseFloat(input);
        if (isNaN(value)) return;

        let converted;
        let unitText = '';
        switch (mode) {
            case 'CtoF':
                converted = (value * 9/5) + 32;
                unitText = `${converted.toFixed(2)} °F`;
                break;
            case 'FtoC':
                converted = (value - 32) * 5/9;
                unitText = `${converted.toFixed(2)} °C`;
                break;
            case 'KtoM':
                converted = value * 0.621371;
                unitText = `${converted.toFixed(2)} milhas`;
                break;
            case 'MtoK':
                converted = value / 0.621371;
                unitText = `${converted.toFixed(2)} km`;
                break;
            default:
                return;
        }
        // @ts-ignore
        setResult(unitText);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Conversão</Text>
            <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={input}
                onChangeText={setInput}
                placeholder="Digite o valor"
            />
            <Button title="Converter" onPress={convert} />
            {result !== null && <Text style={styles.result}>Resultado: {result}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', height: 50, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 10, fontSize: 18, backgroundColor: '#fff', marginBottom: 10 },
    result: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
});

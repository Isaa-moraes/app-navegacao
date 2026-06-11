import  {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Contador() {
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador</Text>
            <Text style={styles.text}>{contador}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setContador(contador + 1)}>
                <Text style={styles.buttonText}>Aumentar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setContador(contador - 1)}>
                <Text style={styles.buttonText}>Diminuir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={() => setContador(0)}>
                <Text style={styles.buttonText}>Zerar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f3b5b5ff",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
    },

    text: {
        fontSize: 150,
        fontWeight: "bold",
        marginVertical: 20,
    },

    button: {
        backgroundColor: "#d6618aff",  
        marginTop: 20,
        padding: 10,
        borderRadius: 15,
        fontSize: 16,
        fontWeight: "bold",
    },

    buttonText: {
        color: "#ffc4daff",
        fontSize: 16,
        fontWeight: "bold",

    },
});
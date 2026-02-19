import { Text, TouchableOpacity, StyleSheet } from "react-native";

// Define as props para o componente Button
type ButtonProps = {
    title: string;
    onPress: () => void;
    color?: string; // ? opcional para personalizar a cor do botão
};

export default function Button({ title, onPress, color }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 50,
    },

    buttonText: {
        fontSize: 16,
        color: "#dfdfdfff", 
        fontWeight: "bold",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    }
});
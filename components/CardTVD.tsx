import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type CardProps = {
    title: string;
    description: string;
    buttonText: string;
    onPress: () => void;
};

export default function CardTVD({
    title,
    description,
    buttonText,
    onPress,
}: CardProps) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <Text style={styles.description}>
                {description}
            </Text>

            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#f2f2f2",
        width: "90%",
        padding: 20,
        borderRadius: 25,
        marginVertical: 20,

        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },

    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#000",
    },

    description: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
        lineHeight: 22,
    },

    button: {
        backgroundColor: "#7b1e3a", // vinho vampiro
        paddingVertical: 14,
        borderRadius: 40,
        alignItems: "center",
    },

    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity,  } from "react-native";

export default function Home() {
    const router = useRouter();
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>Bem vindo ao React Native</Text>
            <Text style={styles.subtitle}>Está é a tela inicial do nosso app</Text>

            <TouchableOpacity onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Ir para detalhes</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles=StyleSheet.create({
    conteiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#f3b5b5ff",
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 14,
    },
    subtitle: {        
        fontSize: 18,
        color: "#333",
        marginBottom: 8,
        fontWeight: "400",
    },
    buttonText: {
        fontSize: 16,
        color: "#dfdfdfff", 
        fontWeight: "bold",
        backgroundColor: "#a8325cff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    }
});
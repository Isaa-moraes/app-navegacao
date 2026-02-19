import { useRouter } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Detalhes() {
    const router = useRouter();
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>Tela de Detalhes</Text>
            <Image
                source={require("../assets/images/vampire-diaries.jpg")}
                style={styles.image}
            />
            <Text style={styles.descricao}>The Vampire Diaries</Text>

            <View></View>
            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.buttonText}>Voltar para a tela inicial</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/outrapag')}>
                <Text style={styles.buttonText}>Ir para TVD</Text>
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
    descricao: {        
        fontSize: 18,
        color: "#333",
        marginBottom: 15,
        fontWeight: "400",
    },

    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
        borderRadius: 30,
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
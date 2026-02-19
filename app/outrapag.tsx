import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity,  } from "react-native";

export default function TVD() {
    const router = useRouter();
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>Bem vindo ao Mundo de Mystic Falls</Text>
            <Text style={styles.subtitle}>The Vampire Diaries (Diários do Vampiro) é uma série sobrenatural baseada nos livros de L.J. Smith, focada na adolescente Elena Gilbert, que se apaixona pelo vampiro Stefan Salvatore na cidade de Mystic Falls. A trama se complica com a chegada do perigoso irmão de Stefan, Damon, gerando um triângulo amoroso e confrontos com criaturas sobrenaturais.</Text>

            <TouchableOpacity onPress={() => router.push('/detalhes')}>
                <Text style={styles.buttonText}>Voltar para detalhes</Text>
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
        alignItems: "center",
        justifyContent: "center",
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
import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity,  } from "react-native";

import Button from "../components/Button";
import CardTVD from "../components/CardTVD";



export default function Home() {
    const router = useRouter();
    const handlePress = () => {
        console.log("Botão pressionado!");
    }
    return (
        <View style={styles.conteiner}>
            <Text style={styles.title}>Bem vindo ao React Native</Text>
            <Text style={styles.subtitle}>Está é a tela inicial do nosso app</Text>

            <CardTVD
                title="The Vampire Diaries (Diários do Vampiro)"
                description="Série sobrenatural ambientada em Mystic Falls, envolvendo vampiros, lobisomens e os irmãos Salvatore."
                buttonText="Ver detalhes"
                onPress={() => router.push('/detalhes')}
            />



            <Button 
                title="Clique aqui"
                onPress={() => router.push('/detalhes')}
                color="#a8325cff"
            />

            <Button title="Salvar" onPress={handlePress} color="#b86390ff" />
            <Button title="Cancelar" onPress={() => router.back()} color="#bd4187ff" />
            <Button title="Comfirmar" onPress={handlePress} color="#c66785ff" />


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
        color: "#dfdfdfff", 
        fontWeight: "bold",
        backgroundColor: "#a8325cff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
    },

    cardText: {
        color: "#fff",
        fontSize: 16,
    }

});
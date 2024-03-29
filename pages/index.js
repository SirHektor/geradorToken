import { View, StyleSheet, Text, Image, TouchableOpacity, Modal } from "react-native";
import { ModalTokens } from '../components/modal';
import Slider from "@react-native-community/slider";
import { useState } from "react";

export function Home() {

    const [qtde, defineQtde] = useState(6)
    const [telaModal, configTelaModal] = useState(false)

    function gerarToken() {
        configTelaModal(true);
    }

    return (
        <View style={ESTILO.container}>
            <Image source={require("../assets/logo.png")} style={ESTILO.logo} />
            <Text style={ESTILO.caracteres}>
                {qtde} Estrelas
            </Text>
            <View style={ESTILO.area}>
                <Slider style={{ height: 50 }} minimumValue={1} maximumValue={6} minimumTrackTintColor="#ff0000"
                    maximumTrackTintColor="#000"
                    thumbTintColor="#392de9"
                    value={qtde}
                    onValueChange={(value) => defineQtde(value.toFixed(0))} />
            </View>
            <TouchableOpacity style={ESTILO.button} onPress={gerarToken}>
                <Text style={ESTILO.buttonText}>
                    Avalie nossos serviços
                </Text>
            </TouchableOpacity>
            <Modal visible={telaModal} animationType="fade" transparent={true}>
            <ModalTokens handleClose={()=> configTelaModal(false)} />
            </Modal>
        </View>
    )
}

const ESTILO = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        marginBottom: 60,
        width: 300,
        height: 350,
    },
    area: {
        marginBottom: 14,
        marginTop: 14,
        width: "80%",
        backgroundColor: "#FFF",
        borderRadius: 8,
        padding: 8
    },
    button: {
        backgroundColor: "#BB2335",
        width: "80%",
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    buttonText: {
        color: "#FFF"
    },
    caracteres: {
        fontSize: 30,
        fontWeight: "bold"
    },
})
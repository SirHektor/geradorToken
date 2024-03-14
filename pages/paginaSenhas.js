import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";

export function PaginaSenhas() {
    const imagens = [
        require('../assets/01.jpg'),
        require('../assets/02.jpg'),
        require('../assets/03.jpg'),
      ];
      const renderImagem = ({ item }) => {
        return (
          <Image source={item} style={ESTILO.imagem} />
        );
      };
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={ESTILO.header}>
                <Text style={ESTILO.title}>
                    Nossos Serviços
                </Text>
            </View>
            <View>
            <Text style={ESTILO.texto}>
                    Somos uma empresa de animação que oferece uma ampla gama de serviços para atender às suas necessidades criativas. Desde animação 2D e 3D até motion graphics e efeitos especiais, estamos aqui para transformar suas ideias em realidade animada. Com uma equipe talentosa e apaixonada, garantimos resultados excepcionais que cativarão seu público-alvo. De vídeos promocionais a comerciais, vídeos explicativos a curtas-metragens, estamos prontos para colaborar com você em qualquer projeto de animação que você tenha em mente. Deixe-nos dar vida às suas histórias e mensagens com nossos serviços de animação de alta qualidade.
            </Text>
            </View>
            <View style={ESTILO.carouselContainer}>
        <Carousel
          data={imagens}
          renderItem={renderImagem}
          sliderWidth={300}
          itemWidth={300}
        />
      </View>
        </SafeAreaView>
    )
}

const ESTILO = StyleSheet.create({
    header: {
      alignItems: "center",
      padding: 14,
      paddingTop: 18,
      backgroundColor: "#BB2335",
    },
    title: {
      alignItems: "center",
      fontSize: 18,
      fontWeight: "bold",
      color: "#FFF",
    },
    texto: {
      textAlign: "center",
      fontSize: 16,
      color: "#3C292B",
      paddingHorizontal: 20,
      marginTop: 30,
    },
    carouselContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    imagem: {
      width: 300,
      height: 200,
      borderRadius: 10,
      marginBottom: 10,
    },
  });
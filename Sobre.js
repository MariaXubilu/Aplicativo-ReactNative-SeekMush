import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Sobre({ visible, onClose }) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Sobre o aplicativo</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeModal}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>

          
        
        <View style={styles.modalContent}>
        <Text style={styles.description}>
  Bem-vindo ao aplicativo Seek Mush! Como parte do meu Trabalho de Conclusão de Curso (TCC) em 2024, criei esta ferramenta usando a 
  biblioteca React Native. Meu objetivo é facilitar o reconhecimento de espécies de cogumelos por meio de fotos.
  {'\n\n'}
  Com o uso da inteligência artificial, meu aplicativo oferece uma experiência única. Tire uma foto de um cogumelo desconhecido, 
  e minha inteligência artificial irá analisar as características e padrões visuais para identificar a espécie correspondente. 
  Além disso, você encontrará informações detalhadas sobre as espécies identificadas, incluindo características, habitat e possíveis usos.
  {'\n\n'}
  Estou comprometida em fornecer uma experiência de usuário excepcional, combinando a precisão da inteligência artificial com uma interface 
  intuitiva e amigável. Espero que meu aplicativo seja uma ferramenta útil para entusiastas, estudantes e profissionais interessados no mundo 
  dos cogumelos.
  {'\n\n'}
  Agradeço pelo interesse no meu aplicativo. Caso tenha alguma dúvida, sugestão ou precise de suporte, fique à vontade para entrar em contato 
  comigo. Estarei feliz em ajudar!
  
</Text>


        </View>
        </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: '#ddd',
      },
      modalHeader: {
        backgroundColor: '#6B8E23',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      modalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
      },
      closeModal: {
        padding: 10,
      },
      modalContent: {
        flex: 1,
        marginTop: 15,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
      },
  description: {
    fontSize: 17,
    
    color: '#333',
  },
});

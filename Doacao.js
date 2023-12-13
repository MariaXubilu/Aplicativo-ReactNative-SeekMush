import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Image, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Clipboard from '@react-native-community/clipboard';

export default function Doacao({ visible, onClose }) {
  const [qrModalVisible, setQRModalVisible] = useState(false);

  const openQRModal = () => {
    setQRModalVisible(true);
  };

  const closeQRModal = () => {
    setQRModalVisible(false);
  };

  const handleCopyText = () => {
    const textToCopy = '1ced40dc-1e97-4859-8097-75bb2f6bc368';
    Clipboard.setString(textToCopy);
    ToastAndroid.show('Texto copiado para a área de transferência!', ToastAndroid.SHORT);
  };

  return (
    <>
      <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Faça uma doação</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeModal}>
              <Icon name="close" size={30} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.description}>
              Se você gostou desse aplicativo e deseja apoiar o trabalho de uma desenvolvedora solo,
              considere fazer uma doação.{'\n\n'}
              Sua contribuição é muito importante para manter o desenvolvimento e aprimoramento do aplicativo.
            </Text>
            <TouchableOpacity style={styles.doarButton} onPress={openQRModal}>
              <Text style={styles.buttonText}>Doar!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal do QR Code */}
      <Modal visible={qrModalVisible} transparent animationType="slide" onRequestClose={closeQRModal}>
  <View style={styles.qrModalContainer}>
    <TouchableOpacity onPress={closeQRModal} style={styles.closeModal2}>
      <Icon name="close" size={30} color="white" />
    </TouchableOpacity>
    <Image
      source={require('../assets/images/QRCODE.jpeg')}
      style={styles.qrCodeImage}
    />
    <Text style={styles.TextOu}> Faça com o QR Code </Text>
    <Text style={styles.TextOu}> ou </Text>
    <TouchableOpacity style={styles.copyButton} onPress={handleCopyText}>
              <Text style={styles.buttonText}>Clique para copiar chave aleátoria</Text>
            </TouchableOpacity>
            
             
  </View>
</Modal>

      
    </>
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
      closeModal2: {
        padding: 30,
        alignSelf: 'flex-end'
      },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    marginTop: 45,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333'
  },
  doarButton: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  fecharButton: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  TextOu: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  qrModalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  qrCodeImage: {
    alignSelf: 'center',
    marginVertical: 50,
    width: 200,
    height: 200,
  },
  
});

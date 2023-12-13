import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, Alert } from 'react-native';
import { deleteAccount} from '../firebase'; 

export default function Deletar({ visible, onClose, navigation }) {
// VER ERRO, NAO DELETA
    const handleDeleteAccount = async () => {
        const success = await deleteAccount();
    
        if (success) {
          // Usuário excluído com sucesso
          // Navegar para a tela de registro ou outra tela de sua escolha
          navigation.navigate('Register');
        } else {
          // Tratar erro, caso o usuário não esteja autenticado
          Alert.alert('Erro', 'Não foi possível excluir a conta. Verifique se você está logado e tente novamente.');
        }
      }

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Você tem certeza que deseja deletar sua conta? Ela não poderá ser recuperada...</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={handleDeleteAccount}>
              <Text style={styles.modalButtonText}>Deletar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalButton} onPress={onClose}>
              <Text style={styles.modalButtonText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  modalButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

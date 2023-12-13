import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';


export default function Sair({ visible, onClose, onLogout }) {


  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Você tem certeza que deseja sair de sua conta?</Text>
          <View style={styles.modalButtonsContainer}>
            <TouchableOpacity style={styles.modalButton} onPress={onLogout}>
              <Text style={styles.modalButtonText}>Sair</Text>
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

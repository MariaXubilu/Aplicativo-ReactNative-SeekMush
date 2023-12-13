import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Visu({ visible, onClose }) {
  const [modoSelecionado, setModoSelecionado] = useState('Padrão');

  const handleModoSelecionado = (modo) => {
    setModoSelecionado(modo);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Modo de Visualização</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeModal}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <TouchableOpacity
            style={[styles.modoOption, modoSelecionado === 'Padrão' && styles.selectedModo]}
            onPress={() => handleModoSelecionado('Padrão')}
          >
            <Text style={styles.modoText}>Padrão</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.modoOption, modoSelecionado === 'Noturno' && styles.selectedModo]}
            onPress={() => handleModoSelecionado('Noturno')}
          >
            <Text style={styles.modoText}>Noturno</Text>
          </TouchableOpacity>
        
          <TouchableOpacity style={styles.saveButton} onPress={onClose}>
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableOpacity>
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
    marginTop: 55,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modoOption: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedModo: {
    backgroundColor: '#6B8E23',
    borderColor: '#6B8E23',
  },
  modoText: {
    fontSize: 18,
    color: 'black',
  },
  saveButton: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});

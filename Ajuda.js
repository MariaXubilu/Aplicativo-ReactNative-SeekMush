import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Ajuda({ visible, onClose }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Ajuda e Suporte</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeModal}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <TouchableOpacity
            style={[styles.option, selectedOption === 'faq' && styles.selectedOption]}
            onPress={() => handleOptionSelect('faq')}
          >
            <Text style={styles.optionText}>Perguntas frequentes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.option, selectedOption === 'contact' && styles.selectedOption]}
            onPress={() => handleOptionSelect('contact')}
          >
            <Text style={styles.optionText}>Entre em contato</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.option, selectedOption === 'report' && styles.selectedOption]}
            onPress={() => handleOptionSelect('report')}
          >
            <Text style={styles.optionText}>Reportar um problema</Text>
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
  option: {
    backgroundColor: '#ddd',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    backgroundColor: '#6B8E23',
    borderColor: '#6B8E23',
  },
  optionText: {
    fontSize: 18,
    color: 'black',
  },
  closeButton: {
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

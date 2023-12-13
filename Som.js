import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SoundConfigScreen({ visible, onClose }) {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [ringtoneEnabled, setRingtoneEnabled] = useState(true);
  const [videoSoundEnabled, setVideoSoundEnabled] = useState(true);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  const toggleRingtone = () => {
    setRingtoneEnabled(!ringtoneEnabled);
  };

  const toggleVideoSound = () => {
    setVideoSoundEnabled(!videoSoundEnabled);
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Configurações de Som</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeModal}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <View style={styles.option}>
            <Text style={styles.optionText}>Ativar Som</Text>
            <Switch
              value={soundEnabled}
              onValueChange={toggleSound}
              trackColor={{ false: '#ccc', true: '#6B8E23' }}
              thumbColor={soundEnabled ? '#fff' : '#f4f3f4'}
              style={{marginLeft: 200}}
            />
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>Som de Toque</Text>
            <Switch
              value={ringtoneEnabled}
              onValueChange={toggleRingtone}
              trackColor={{ false: '#ccc', true: '#6B8E23' }}
              thumbColor={ringtoneEnabled ? '#fff' : '#f4f3f4'}
              style={{marginLeft: 173, }}
            />
          </View>

          <View style={styles.option}>
            <Text style={styles.optionText}>Som de Vídeos</Text>
            <Switch
              value={videoSoundEnabled}
              onValueChange={toggleVideoSound}
              trackColor={{ false: '#ccc', true: '#6B8E23' }}
              thumbColor={videoSoundEnabled ? '#fff' : '#f4f3f4'}
              style={{marginLeft: 166}}
            />
          </View>

          <Text style={styles.description}>
            {!soundEnabled ? 'O som está desativado.' : 'O som está ativado.'}
          </Text>

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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    marginTop: 50
    
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    borderEndColor: 'black',
    color: '#454545'
  },

  description: {
    
    fontSize: 16,
    marginTop: 45,
    alignSelf: 'center',
    color: '#454545'
  },
  saveButton: {
    backgroundColor: '#6B8E23',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 30,
    alignSelf: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  
  
});

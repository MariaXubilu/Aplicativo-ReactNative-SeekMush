import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Notificacao({ visible, onClose }) {
  const [pushNotificationEnabled, setPushNotificationEnabled] = useState(true);
  const [emailNotificationEnabled, setEmailNotificationEnabled] = useState(true);

  const handlePushNotificationToggle = () => {
    setPushNotificationEnabled(!pushNotificationEnabled);
  };

  const handleEmailNotificationToggle = () => {
    setEmailNotificationEnabled(!emailNotificationEnabled);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Opções de notificação</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeModal}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <View style={styles.notificationOption}>
            <Text style={styles.optionText}>Notificação por Push</Text>
            <TouchableOpacity
              onPress={handlePushNotificationToggle}
              style={[styles.optionSwitch, pushNotificationEnabled && styles.optionSwitchActive]}
            >
              <View style={[styles.switchCircle, pushNotificationEnabled && styles.switchCircleActive]} />
            </TouchableOpacity>
          </View>

          <View style={styles.notificationOption}>
            <Text style={styles.optionText}>Notificação por Email</Text>
            <TouchableOpacity
              onPress={handleEmailNotificationToggle}
              style={[styles.optionSwitch, emailNotificationEnabled && styles.optionSwitchActive]}
            >
              <View style={[styles.switchCircle, emailNotificationEnabled && styles.switchCircleActive]} />
            </TouchableOpacity>
          </View>
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
    marginTop: 45,
  },
  notificationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#454545'
  },
  optionSwitch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 120
  },
  optionSwitchActive: {
    backgroundColor: '#6B8E23',
    borderColor: '#6B8E23',
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  switchCircleActive: {
    backgroundColor: '#fff',
    transform: [{ translateX: 12 }],
  },
});

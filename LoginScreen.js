import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { signInWithEmailAndPassword, getNomeUsuarioByUid } from './firebase';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const trimmedEmail = email.trim(); // Remove espaços em branco do email
    const trimmedPassword = password.trim(); // Remove espaços em branco da senha

    if (!trimmedEmail || !trimmedPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    signInWithEmailAndPassword(trimmedEmail, trimmedPassword)
      .then((userCredentials) => {
        const userId = userCredentials.user.uid;

        // Buscar o nome de usuário pelo UID usando a função getNomeUsuarioByUid
        getNomeUsuarioByUid(userId)
          .then((nomeUsuario) => {
            // Navegar para a tela de Inicial e passar o userId e o nomeUsuario como parâmetros
            navigation.navigate('Inicial', { userId: userId, nomeUsuario: nomeUsuario });
          })
          .catch((error) => {
            console.log('Erro ao buscar nome de usuário:', error);
          });
      })
      .catch((error) => {
        setError('Erro ao fazer login. Verifique suas credenciais.');
      });
  
  };

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>Bem-vindo/a</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Text style={styles.title}>Email</Text>
        <TextInput
          placeholder="Digite seu email..."
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.title}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha..."
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerText}>Ainda não possui uma conta? Cadastre-se aqui</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#556B2F',
  },
  containerHeader: {
    marginTop: '14%',
    marginBottom: '8%',
    paddingStart: '5%',
  },
  message: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  containerForm: {
    backgroundColor: '#ddd',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
  },
  title: {
    fontSize: 20,
    marginTop: 28,
    color: '#454545',
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
    color: 'black'
  },
  button: {
    backgroundColor: '#6B8E23',
    width: '100%',
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center',
  },
  registerText: {
    color: '#696969',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    
    marginBottom: 10,
    textAlign: 'center',
  },
});


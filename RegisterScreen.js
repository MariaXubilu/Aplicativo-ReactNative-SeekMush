import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { CheckBox } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ToastAndroid } from 'react-native';

import { createUserWithEmailAndPassword, guardarNomeUsuario } from './firebase';

export default function RegisterScreen({ navigation }) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [nomeUsuario, setNomeUsuario] = useState(''); //firestore

  const handleGoBack = () => {
    navigation.goBack('Login');
  };

  const handleTermsPress = () => {
    setModalVisible(true);
  };

  const handlePrivacyPress = () => {
    setPrivacyModalVisible(true);
  };

  const handleAcceptTerms = () => {
    setTermsAccepted(!termsAccepted);
    setModalVisible(false);
  };

  const validatePasswords = () => {
    setPasswordsMatch(password === confirmPassword);
  };
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    validatePasswords();
  }, [password, confirmPassword]);

  const handleRegister = () => {
    if (!nomeUsuario || !email || !password) {
      alert('Por favor, preencha todos os campos!');
      return;
    }
    if (!termsAccepted) {
      alert('Você precisa concordar com os Termos de Uso e a Política de Privacidade.');
      return;
    }
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    createUserWithEmailAndPassword(trimmedEmail, trimmedPassword)
      .then((userCredentials) => {
        const userId = userCredentials.user.uid;
  
        guardarNomeUsuario(userId, nomeUsuario)
          .then(() => {
            // Registro bem-sucedido e nome de usuário salvo no Firestore
            // Navegar para a tela de Inicial e passar o userId e o nomeUsuario como parâmetros
            ToastAndroid.show('Conta criada com sucesso', ToastAndroid.SHORT);
            navigation.navigate('Inicial', { userId: userId, nomeUsuario: nomeUsuario });
          })
          .catch((error) => {
            console.log('Erro ao salvar o nome de usuário:', error);
          });
      })
      .catch((error) => {
        console.log('Erro ao criar a conta de usuário:', + error.message);
      });
  };


  return (
    
    <View style={styles.container}>
      
    <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerHeader}>
      <Text style={styles.message}>Registre-se!</Text>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" style={styles.containerForm}>
    {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Text style={styles.title}>Usuário</Text>
      <TextInput placeholder="Digite um nome de usuário..." 
       value={nomeUsuario}
       onChangeText={(text) => setNomeUsuario(text)}
      style={styles.input} />

      <Text style={styles.title}>Email</Text>
      <TextInput placeholder="Digite seu email..." style={styles.input}
      value={email}
      onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.title}>Senha</Text>
        <View>
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
          <TextInput
            placeholder="Digite sua senha..."
            style={[styles.input, !passwordsMatch && styles.invalidInput]}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

        <Text style={styles.title}>Confirme sua senha</Text>
        <View >
          <TouchableOpacity onPress={toggleShowPassword} style={styles.eyeIconContainer}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={20} color="gray" />
          </TouchableOpacity>
          <TextInput
            placeholder="Digite novamente sua senha..."
            style={[styles.input, !passwordsMatch && styles.invalidInput]}
            secureTextEntry={!showPassword}
            onChangeText={(text) => setConfirmPassword(text)}
          />
        </View>

      {!passwordsMatch && <Text style={styles.errorMessage}>As senhas não correspondem</Text>}

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRegister} onPress={handleGoBack}>
        <Text style={styles.registerText}>Já possui uma conta? Faça o login aqui!</Text>
      </TouchableOpacity>

      <View style={styles.termsContainer}>
        <CheckBox
          title={
            <Text style={styles.checkBoxTitle}>
              Declaro que li e concordo integralmente com os{' '}
              <TouchableOpacity onPress={handleTermsPress}>
                <Text style={styles.termsText}>Termos de Uso</Text>
              </TouchableOpacity>
              <Text style={styles.checkBoxTitle}> e </Text>
              <TouchableOpacity onPress={handlePrivacyPress}>
                <Text style={styles.termsText}>Política de Privacidade</Text>
              </TouchableOpacity>
            </Text>
          }
          checked={termsAccepted}
          containerStyle={styles.checkBoxContainer}
          textStyle={styles.checkBoxText}
          checkedColor="green"
          uncheckedColor="white"
          checkedIcon={<Icon name="check-square" size={18} color="green" />}
          uncheckedIcon="square"
          onPress={handleAcceptTerms}
        />
      </View>


        </Animatable.View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
<View style={styles.modalContainer}>
          <ScrollView>
            <Text style={styles.modalTitle}>TERMOS E CONDIÇÕES GERAIS DE USO DO APLICATIVO 'SeekMush'</Text>
            <Text style={styles.modalText}>
Estes termos de uso regem o uso do aplicativo móvel SeekMush e estabelecem os direitos e responsabilidades
entre você usuário, e a desenvolvedora Maria Eduarda Rodrigues Martins. Ao utilizar o Aplicativo, você concorda em cumprir estes Termos.
            </Text>
            
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 1. Cadastro e Login {'\n'}</Text>

            <Text style={styles.modalText}>
1.1 Para utilizar o Aplicativo SeekMush, você deve criar uma conta fornecendo informações precisas, atualizadas e completas.
Você é responsável por manter a confidencialidade de suas informações de login e é inteiramente responsável por todas as atividades
que ocorrem em sua conta.{'\n'}
{'\n'}
1.2 Você concorda em fornecer informações precisas e verdadeiras durante o processo de cadastro e atualizar prontamente quaisquer informações alteradas.
            </Text>
            
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 2. Uso de imagens{'\n'} </Text>
            
            <Text style={styles.modalText}>
2.1 O Aplicativo SeekMush pode solicitar acesso à câmera e às fotos do seu dispositivo móvel para permitir o upload de imagens relacionadas às suas pesquisas.{'\n'}{'\n'}            
2.2 Ao utilizar a câmera ou selecionar fotos existentes, você garante que possui todos os direitos necessários sobre essas imagens e que não viola os direitos 
de privacidade ou propriedade intelectual de terceiros.{'\n'}{'\n'}
2.3 O Desenvolvedor do SeekMush não se responsabiliza pelo conteúdo das imagens enviadas pelos Usuários e se reserva o direito de remover 
estes Termos ou os direitos de terceiros.{'\n'}           
            </Text>
 
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 3. Privacidade e Proteção de Dados{'\n'} </Text>
            <Text style={styles.modalText}>
3.1 O Desenvolvedor do SeekMush valoriza a sua privacidade e protege seus dados pessoais de acordo com a legislação aplicável e a Política de Privacidade do SeekMush.{'\n'}{'\n'}
3.2 Ao utilizar o Aplicativo SeekMush, você concorda com a coleta, uso e processamento de seus dados pessoais conforme descrito na Política de Privacidade.{'\n'}
            </Text>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 4. Uso Adequado do Aplicativo{'\n'} </Text>   

            <Text style={styles.modalText}>
 4.1 Ao utilizar o Aplicativo SeekMush, você concorda em não:  {'\n'}{'\n'}
 4.1.1 Violar quaisquer leis, regulamentos ou direitos de terceiros;{'\n'}{'\n'}
 4.1.2 Enviar ou transmitir qualquer conteúdo que seja ilegal, prejudicial, ameaçador, abusivo, difamatório, obsceno, ofensivo ou de outra forma censurável;{'\n'}{'\n'}
 4.1.3 Interferir ou interromper o funcionamento adequado do Aplicativo;{'\n'}{'\n'}
 4.1.4 Fornecer informações falsas, enganosas ou fraudulentas;{'\n'}{'\n'} 
 4.1.5 Acessar ou tentar acessar contas de outros usuários sem autorização;{'\n'}{'\n'}     
 4.1.6 Utilizar o Aplicativo para qualquer finalidade não autorizada ou comercial.{'\n'}    
            </Text>

            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 5. Limitação de Responsabilidade {'\n'} </Text>

            <Text style={styles.modalText}>
5.1 O Aplicativo SeekMush é fornecido "no estado em que se encontra", sem garantias de qualquer tipo, expressas ou implícitas.{'\n'}{'\n'} 
5.2 O Desenvolvedor do SeekMush não assume responsabilidade por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais 
ou punitivos decorrentes do uso ou da incapacidade de usar o Aplicativo.{'\n'}                  
                </Text> 
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 6. Modificações nos Termos {'\n'} </Text>

                <Text style={styles.modalText}>
6.1 O Desenvolvedor do SeekMush reserva-se o direito de modificar ou atualizar estes Termos a qualquer momento, publicando uma versão atualizada no Aplicativo.{'\n'}{'\n'}
6.2 É responsabilidade do Usuário revisar regularmente os Termos atualizados. O uso contínuo do Aplicativo após a publicação de quaisquer alterações constitui 
aceitação dos Termos revisados.{'\n'}{'\n'}
                </Text>

            
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.acceptButtonText}>Fechar</Text>
              </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>


      <Modal
  animationType="slide"
  transparent={true}
  visible={privacyModalVisible}
  onRequestClose={() => setPrivacyModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <ScrollView>
      <Text style={styles.modalTitle}>POLÍTICA DE PRIVACIDADE DO APLICATIVO 'SeekMush'</Text>
      <Text style={styles.modalText}>
A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e compartilhamos informações 
quando você utiliza o aplicativo móvel SeekMush, desenvolvido por uma pessoa fisica. 
      </Text>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 1. Coleta de Informações {'\n'} </Text>

      <Text style={styles.modalText}>
Imagens: O Aplicativo coleta imagens que você envia para fins de análise. {'\n'}
Dados de Localização: O Aplicativo pode solicitar permissão para acessar sua localização para fornecer informações mais precisas sobre as espécies
encontradas em sua região. No entanto, o compartilhamento dessa informação é opcional e depende da sua permissão.
      </Text>

      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 2. Uso das Informações {'\n'} </Text> 

      <Text style={styles.modalText}>
      Análise e Detecção: As imagens que você envia são processadas e analisadas pelo Aplicativo para identificar as espécies de fungos e cogumelos correspondentes.{'\n'}
Personalização: As informações coletadas podem ser usadas para personalizar sua experiência no Aplicativo e fornecer conteúdo relevante com base nas suas preferências.
Melhorias do Aplicativo: As informações coletadas podem ser usadas para melhorar e aprimorar o funcionamento e os recursos do Aplicativo.
        </Text>
<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 3. Compartilhamento de Informações {'\n'} </Text> 

<Text style={styles.modalText}>

Terceiros: As informações coletadas podem ser compartilhadas com terceiros para fins de análise, aprimoramento do Aplicativo e pesquisa científica. No entanto, suas informações pessoais não serão compartilhadas sem o seu consentimento prévio.
Dados Agregados: Podemos compartilhar dados agregados e não identificáveis com terceiros para análise estatística e fins de pesquisa.
</Text>

<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 4. Segurança {'\n'} </Text> 

<Text style={styles.modalText}>

Medidas de Segurança: Implementamos medidas de segurança adequadas para proteger as informações coletadas e armazenadas, visando evitar acesso não autorizado, divulgação ou modificação.
Armazenamento de Dados: As informações coletadas serão armazenadas em servidores seguros, seguindo os melhores padrões de proteção.
</Text>
<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 5. Seus Direitos {'\n'} </Text> 

<Text style={styles.modalText}>

Acesso e Exclusão de Dados: Você tem o direito de solicitar acesso às informações coletadas e solicitar a exclusão de seus dados pessoais, exceto quando o armazenamento for 
necessário por motivos legais ou legítimos.  
</Text>

<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 6. Atualizações {'\n'} </Text> 

<Text style={styles.modalText}>

Alterações na Política de Privacidade: Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você reveja esta política com frequência para 
estar ciente de quaisquer alterações.

</Text>
<Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> 7. Entre em Contato {'\n'} </Text> 

<Text style={styles.modalText}>

Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o processamento de suas informações, entre em contato conosco por meio dos canais fornecidos no Aplicativo.

Ao utilizar o Aplicativo SeekMush, você concorda com a coleta, uso, armazenamento e compartilhamento de informações conforme descrito nesta Política de Privacidade.
{'\n'}{'\n'}
Esta Política de Privacidade foi atualizada em 03/07/2023.
</Text>
      <TouchableOpacity
        style={styles.acceptButton}
        onPress={() => setPrivacyModalVisible(false)}
      >
        <Text style={styles.acceptButtonText}>Fechar</Text>
      </TouchableOpacity>
    </ScrollView>
  </View>
</Modal>
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
      fontSize: 18,
      marginTop: 28,
      color: '#454545',
    },
    input: {
      borderBottomWidth: 1,
    height: 40,
    marginBottom: 5,
    fontSize: 16,
    
    
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
    termsButton: {
        backgroundColor: '#6B8E23',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center',
      },
      termsButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        padding: 20,
      },
      modalTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
      },
      modalText: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 20,
      },
      acceptButton: {
        backgroundColor: '#6B8E23',
        borderRadius: 4,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
      },
      acceptButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',

      },
      checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        paddingHorizontal: 0,
        marginLeft: 0,
     
      },
      checkBoxTitle: {
        fontSize: 16,
        fontWeight: 'normal',
        marginLeft: 10
      },
      termsText: {
        color: '#3b8beb',
        textDecorationLine: 'underline',
      },
      invalidInput: {
        borderColor: 'red',
      },
    
      errorMessage: {
        color: 'red',
        marginTop: 5,
      },
      eyeIconContainer: {
    marginLeft: 325,
      },
     errorText: {
    color: 'red',
    fontSize: 16,
    
    textAlign: 'center',
  },
      
  });
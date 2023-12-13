import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { ToastAndroid } from 'react-native';


export function guardarNomeUsuario(userId, nomeUsuario) {
  const userRef = firestore().collection('usuarios').doc(userId);

  return userRef.set({
    nomeUsuario: nomeUsuario,
  });
}

export async function getNomeUsuarioByUid(userId) {
  try {
    const userDoc = await firestore().collection('usuarios').doc(userId).get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      return userData.nomeUsuario;
    } else {
      return null; // Retornar null caso o documento não exista
    }
  } catch (error) {
    console.log('Erro ao buscar nome de usuário:', error);
    return null;
  }
}

export async function updateNomeUsuario(userId, novoNomeUsuario) { //revisar para atualizar instantaneamente
  try {
    const userRef = firestore().collection('usuarios').doc(userId);
    await userRef.update({
      nomeUsuario: novoNomeUsuario,
    });

    return true; // Retorne true para indicar sucesso
  } catch (error) {
    console.log('Erro ao atualizar nome de usuário:', error);
    return false; // Retorne false para indicar falha
  }
}


// Função de login com email e senha
export function signInWithEmailAndPassword(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

// Função de registro com email e senha
export function createUserWithEmailAndPassword(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

// Função de logout
export function signOut() {
  return auth().signOut();
}

export async function uploadProfileImage(userId, imageUri) {
  const storageRef = storage().ref(`profile_images/${userId}.jpg`);
  try {
    await storageRef.putFile(imageUri);
    const downloadUrl = await storageRef.getDownloadURL();
    // Salve o URL da imagem no Firestore ou onde você deseja armazenar os dados do usuário
    // Por exemplo, você pode criar um documento 'users' com um campo 'profileImageUrl'
    // e definir o URL da imagem como valor desse campo para o usuário logado.
    const userRef = firestore().collection('usuarios').doc(userId);
    await userRef.update({
      profileImageUrl: downloadUrl,
    });

    return downloadUrl;
  } catch (error) {
    throw new Error('Erro ao enviar a imagem: ' + error);
  }
}

export async function getProfileImageUrl(userId) {
  try {
    const userDoc = await firestore().collection('usuarios').doc(userId).get();

    if (userDoc.exists) {
      const userData = userDoc.data();
      return userData.profileImageUrl || null;
    } else {
      return null; // Retornar null caso o documento não exista
    }
  } catch (error) {
    console.log('Erro ao buscar URL da imagem de perfil:', error);
    return null;
  }
}

export async function updateEmail(newEmail) {
  try {
    const user = auth().currentUser;
    const prevEmail = user.email;

    await user.updateEmail(newEmail);
    await user.sendEmailVerification();

    // Atualiza o e-mail no Firestore
    const userRef = firestore().collection('usuarios').doc(user.uid);
    await userRef.update({
      email: newEmail,
    });

    // Mostra uma mensagem de sucesso ao usuário
    ToastAndroid.show('E-mail atualizado com sucesso. Verifique em seu email.', ToastAndroid.LONG);
    return true;
  } catch (error) {
    // Ocorreu um erro ao atualizar o e-mail
    console.log('Erro ao atualizar o e-mail:', error);
    ToastAndroid.show('Erro ao atualizar o e-mail. Por favor, tente novamente.', ToastAndroid.LONG);
    return false;
  }
}

export function updatePassword(newPassword) {
  const user = auth().currentUser;

  if (!user) {
    throw new Error('Usuário não autenticado.');
  }

  return user.updatePassword(newPassword);
}

export async function deleteAccount() {
  try {
    const user = auth().currentUser;
    if (user) {
      await user.delete();
      return true; // Retorna true se a conta foi excluída com sucesso
    } else {
      return false; // Retorna false se o usuário não estiver autenticado
    }
  } catch (error) {
    console.log('Erro ao deletar a conta:', error);
    return false; // Retorna false em caso de erro
  }
}



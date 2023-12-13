import React, { useState, useEffect, useRef } from 'react';
import { ToastAndroid, Linking } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, TextInput, Dimensions,  ScrollView } from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import * as Animatable from 'react-native-animatable';
import ImageCropPicker from 'react-native-image-crop-picker';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Notificacao from './botoesConfig/Notificacao';
import Idioma from './botoesConfig/Idioma';
import Som from './botoesConfig/Som';
import Ajuda from './botoesConfig/Ajuda';
import Sobre from './botoesConfig/Sobre';
import Visu from './botoesConfig/Visu';
import Sair from './botoesConfig/Sair'
import Doacao from './botoesConfig/Doacao';
import Deletar from './botoesConfig/Deletar';
import { signOut, uploadProfileImage, getProfileImageUrl, updateNomeUsuario, updateEmail, updatePassword, auth } from './firebase';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { useIsFocused } from '@react-navigation/native';
import Clarifai from 'clarifai';
import axios from 'axios';

const Tab = createBottomTabNavigator();

/*const clarifai = new Clarifai.App({
  apiKey: '7af50e31c41b4c8884f24d9b345895b7', // Substitua pela sua API key do Clarifai
});*/

export default function Inicial({ route, navigation }) {
  const { userId, nomeUsuario } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#556B2F',
        },
        tabBarActiveTintColor: '#9ACD32',
        tabBarInactiveTintColor: 'white',
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon2 name="mushroom" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="camera" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Tab3"
        children={() => <Tab3Screen navigation={navigation} userId={userId} nomeUsuario={nomeUsuario} />}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Tab1Screen() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [modalInfoVisible, setInfoModalVisible] = useState(false);
  const [isCogumelo1Expanded, setIsCogumelo1Expanded] = useState(false);
  const [isCogumelo2Expanded, setIsCogumelo2Expanded] = useState(false);
  const [isCogumelo3Expanded, setIsCogumelo3Expanded] = useState(false);
  const [isCogumelo4Expanded, setIsCogumelo4Expanded] = useState(false);
  const [isCogumelo5Expanded, setIsCogumelo5Expanded] = useState(false);
  const [isCogumelo6Expanded, setIsCogumelo6Expanded] = useState(false);
  const [isCogumelo7Expanded, setIsCogumelo7Expanded] = useState(false);
  const [isCogumelo8Expanded, setIsCogumelo8Expanded] = useState(false);
  const [isCogumelo9Expanded, setIsCogumelo9Expanded] = useState(false);
  const [isCogumelo10Expanded, setIsCogumelo10Expanded] = useState(false);
  const [isCogumelo11Expanded, setIsCogumelo11Expanded] = useState(false);
  const [isCogumelo12Expanded, setIsCogumelo12Expanded] = useState(false);




  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
  };

   const openInfoModal = () => {
      setInfoModalVisible(true);
    };
    const closeInfoModal = () => {
      setInfoModalVisible(false);
    };

    const toggleCogumelo1 = () => {
      setIsCogumelo1Expanded(!isCogumelo1Expanded);
    };

    const toggleCogumelo2 = () => {
      setIsCogumelo2Expanded(!isCogumelo2Expanded);
    };

    const toggleCogumelo3 = () => {
      setIsCogumelo3Expanded(!isCogumelo3Expanded);
    };

    const toggleCogumelo4 = () => {
      setIsCogumelo4Expanded(!isCogumelo4Expanded);
    };

    const toggleCogumelo5 = () => {
      setIsCogumelo5Expanded(!isCogumelo5Expanded);
    };

    const toggleCogumelo6 = () => {
      setIsCogumelo6Expanded(!isCogumelo6Expanded);
    };

    const toggleCogumelo7 = () => {
      setIsCogumelo7Expanded(!isCogumelo7Expanded);
    };
    const toggleCogumelo8 = () => {
      setIsCogumelo8Expanded(!isCogumelo8Expanded);
    };
    const toggleCogumelo9 = () => {
      setIsCogumelo9Expanded(!isCogumelo9Expanded);
    };
    const toggleCogumelo10 = () => {
      setIsCogumelo10Expanded(!isCogumelo10Expanded);
    };
    const toggleCogumelo11 = () => {
      setIsCogumelo11Expanded(!isCogumelo11Expanded);
    };
    const toggleCogumelo12 = () => {
      setIsCogumelo12Expanded(!isCogumelo12Expanded);
    };

  return (
    <View style={styles.containerInicio}>
      <View style={styles.headerInicio}>
       
        <TouchableOpacity onPress={handleSearchToggle}>
          <Icon name="search" size={25} color="white" style={styles.searchIcon} />
        </TouchableOpacity>

        {!isSearchOpen && (
          <TouchableOpacity onPress={() => {}}>
            <Icon name="bookmarks" size={20} color="white" style={styles.bookIcon} />
          </TouchableOpacity>
        )}

{!isSearchOpen && (
          <TouchableOpacity onPress={openInfoModal}>
            <Icon name="information-sharp" size={32} color="white" style={styles.bookIcon} />
          </TouchableOpacity>
        )}


<Modal visible={modalInfoVisible} transparent animationType="slide">
      <View style={styles.InfoModalContainer}>
        <TouchableOpacity onPress={closeInfoModal} style={styles.closeModal2}>
          <Icon name="close" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.modalInfoContent}>
          <Image source={require('./assets/images/mush.png')} style={styles.InfoImage} />
          <Text style={styles.TextOu}> Bem-vindo, aventureiro! {'\n'} </Text>
          <Text style={styles.TextOu}>
            Deslize para baixo e adentre o incrível mundo dos cogumelos que aguardam sua exploração. {'\n'}
          </Text>
          <Text style={styles.TextOu}>
            Descubra, estude e colecione conquistas para obter o título de Mestre Explorador ao identificar novas espécies. Siga
            sua curiosidade, desvende segredos da natureza e ganhe o reconhecimento que merece!
            {'\n'}
            Lembre-se de que a identificação precisa de cogumelos requer conhecimento especializado e que muitas espécies são semelhantes.
             Se você não tem experiência em micologia, é mais seguro não colher ou consumir cogumelos encontrados em ambientes naturais, a 
             menos que esteja absolutamente certo de sua identificação.
          </Text>
        </View>
      </View>
    </Modal>



        <Animatable.View
          animation={isSearchOpen ? 'slideInRight' : 'fadeOutRight'}
          style={[
            styles.searchBar,
            {
              opacity: isSearchOpen ? 1 : 0,
            },
          ]}
        >
          <TextInput
            style={styles.input3}
            placeholder="Digite sua pesquisa aqui"
            placeholderTextColor="gray"
            onChangeText={( ) => {
             
            }}
          />
        </Animatable.View>
      </View>


      <ScrollView>
       
      <View style={styles.content}>
        <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/favolus_brasiliensis.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Favolus brasiliensis</Text>
        <Icon2 name="silverware-fork-knife" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Polyporales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Meripilaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Favolus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Favolus brasiliensis{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo1}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo1Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo1Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>
            O cogumelo <Text style={{ fontWeight: 'bold' }}>Favolus brasiliensis</Text>, também conhecido como "Fungo favo de mel", é uma espécie fascinante
           encontrada nas regiões tropicais do Brasil. {'\n'}{'\n'}

O Favolus brasiliensis apresenta um formato distintivo, assemelhando-se a um leque. Sua superfície é composta por relevos regulares, o que lhe confere uma aparência única. Encontrado principalmente em áreas florestais tropicais, este cogumelo
 é frequentemente avistado em troncos de árvores em decomposição e em madeira morta.
 {'\n'}{'\n'}
 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text>{'\n'}
Embora o Favolus brasiliensis não seja tradicionalmente considerado comestível, alguns relatos indicam que ele pode ser consumido após um
 processo adequado de preparo e cozimento. No entanto, devido à falta de estudos conclusivos sobre sua segurança alimentar, é altamente
  recomendado evitar o consumo desse cogumelo, a menos que haja certeza sobre sua comestibilidade.
  {'\n'}{'\n'}
  <Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text>{'\n'}
O Favolus brasiliensis possui um papel vital na ecologia do ambiente florestal em que habita. Atuando como um decompositor, ele desempenha 
um papel crucial na quebra de matéria orgânica, contribuindo para o ciclo de nutrientes do ecossistema. Além disso, seu formato e aparência 
únicos o tornam um objeto de interesse para entusiastas da natureza e fotógrafos de vida selvagem.
{'\n'}{'\n'}
<Text style={{ fontWeight: 'bold' }}>Informações Científicas:</Text>{'\n'}
Do ponto de vista científico, o Favolus brasiliensis tem despertado a atenção de micologistas e estudiosos de fungos. Sua morfologia peculiar 
e sua relação com o ambiente ao seu redor podem fornecer insights valiosos sobre adaptação e interações ecológicas. Estudos mais aprofundados
 sobre sua bioquímica, genética e ecologia podem contribuir para uma compreensão mais completa do papel dos cogumelos nos ecossistemas tropicais.
 {'\n'}{'\n'}
 <Text style={{ fontWeight: 'bold' }}>Curiosidades:</Text>{'\n'}
Um aspecto interessante do Favolus brasiliensis é sua capacidade de liberar esporos por meio das aberturas em sua superfície, permitindo 
que eles se dispersem no ambiente. Esse mecanismo é uma adaptação evolutiva que ajuda a garantir a reprodução e disseminação desses cogumelos. 
{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold', color: 'yellow'}}>É crucial lembrar que a segurança alimentar deve ser priorizada, e 
qualquer consumo desse cogumelo deve ser realizado com cautela e 
conhecimento adequado.</Text>
</Text>
            </View>
          )}
        </View>

        <View style={styles.cogumeloSection}>
        <Image
            source={require('./assets/images/pleurotus_djamor.jpg')} 
            style={styles.cogumeloImage}
          />

<View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Pleurotus Djamor</Text>
        <Icon2 name="silverware-fork-knife" size={25} color="yellow" style={styles.foodIcon} />
      </View>

  

      
      <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>      Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>   Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>    Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>   Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>   Pleurotaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>   Pleurotus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text>  Pleurotus djamor{'\n'}
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo2}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo2Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo2Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>O Pleurotus djamor, também conhecido como cogumelo-salmão, é uma espécie fascinante de cogumelo 
              que atrai a atenção devido à sua coloração distintiva e propriedades culinárias. Originário das regiões tropicais e subtropicais
               da América do Sul, o Pleurotus djamor é frequentemente encontrado em troncos de árvores vivas ou mortas, decompondo a matéria
                orgânica e desempenhando um papel essencial no ecossistema florestal.
                {'\n'}{'\n'}
                <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text>{'\n'}
O Pleurotus djamor possui um formato em leque ou concha, com chapéus que variam entre tons de rosa, laranja e até vermelho intenso. Seu 
crescimento ocorre em aglomerados, formando colônias nos troncos e toras de madeira em florestas tropicais. Sua aparência vibrante e única o 
destaca em meio à vegetação circundante.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text>{'\n'}
Este cogumelo é considerado comestível e seguro para o consumo humano. Sua carne é macia e suculenta, com um sabor suave e levemente adocicado.
 Isso torna o cogumelo rosa uma escolha popular em pratos culinários, podendo ser preparado de diversas maneiras, como refogado, grelhado, cozido
  ou adicionado a sopas e molhos.{'\n'}{'\n'}

  <Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text>{'\n'}
Além de seu valor gastronômico, o Pleurotus djamor possui benefícios nutricionais notáveis. Ele é uma excelente fonte de proteínas, fibras, 
vitaminas do complexo B e minerais como o ferro e o zinco. Seu teor nutricional o torna uma opção saudável para inclusão em dietas equilibradas. 
Além disso, seu crescimento em troncos em decomposição contribui para o ciclo de nutrientes na floresta, desempenhando um papel crucial na 
renovação do ecossistema.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Informações Científicas:</Text>{'\n'}
Do ponto de vista científico, o Pleurotus djamor pertence ao reino Fungi, filo Basidiomycota e gênero Pleurotus. Seu nome científico completo 
é Pleurotus djamor var. djamor. Sua coloração rosa vibrante é uma característica distintiva que o diferencia de outros cogumelos comestíveis. 
Sua capacidade de crescer em troncos e toras de madeira torna-o um organismo importante para estudos de decomposição e ciclos de nutrientes em 
ecossistemas florestais.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Curiosidades:</Text>{'\n'}
O Pleurotus djamor tem sido objeto de estudos sobre suas propriedades antimicrobianas e antioxidantes, além de seu potencial 
em aplicações biotecnológicas. Sua coloração vibrante também o torna um objeto de interesse em projetos de educação ambiental, atraindo a 
atenção para a diversidade e beleza dos fungos presentes em nossas florestas.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold', color: 'yellow'}}>É crucial lembrar que a segurança alimentar deve ser priorizada, e 
qualquer consumo desse cogumelo deve ser realizado com cautela e 
conhecimento adequado.</Text>
</Text>



      </View>
          )}
        </View>

        <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/Agaricus_campestris.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Agaricus campestris</Text>
        <Icon2 name="silverware-fork-knife" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Agaricaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Agaricus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Agaricus campestris{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo3}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo3Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo3Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>
    O Agaricus campestris, também conhecido como cogumelo champignon de campo, é um cogumelo amplamente distribuído em diversas regiões do mundo.{'\n'}{'\n'}
    <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
O Agaricus campestris, conhecido popularmente como cogumelo champignon de campo, é uma espécie de cogumelo amplamente distribuída em várias 
regiões do mundo, incluindo gramados, pastagens e áreas com vegetação rasteira. Ele possui um chapéu inicialmente globoso e de cor branca 
que, com o tempo, se expande e achatado, revelando lamelas rosadas e, posteriormente, escuras com esporos.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text>{'\n'}
Este cogumelo é amplamente considerado comestível e é um dos cogumelos mais consumidos no mundo. Sua textura suave, sabor delicado e 
aroma característico o tornam um ingrediente popular em diversos pratos culinários, como sopas, molhos e refogados.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text>{'\n'}
O Agaricus campestris é altamente valorizado na culinária devido à sua versatilidade e capacidade de complementar diferentes pratos. Além disso
, é uma fonte de proteínas, fibras e minerais essenciais, adicionando valor nutricional à dieta.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Informações Científicas:</Text>{'\n'}
Esse cogumelo tem sido amplamente estudado devido à sua importância econômica e alimentar. Além de ser cultivado comercialmente, o Agaricus 
campestris é frequentemente encontrado em ambientes naturais, como campos e pastagens, onde desempenha um papel importante na decomposição 
de matéria orgânica.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Curiosidade:</Text>{'\n'}
O termo "champignon" é de origem francesa e significa "cogumelo". Ele é frequentemente associado a cogumelos comestíveis e cultivados, incluindo
 o Agaricus campestris, que é uma escolha popular em pratos de todo o mundo.{'\n'}{'\n'}
 
 <Text style={{ fontWeight: 'bold', color: 'yellow'}}>É crucial lembrar que a segurança alimentar deve ser priorizada, e 
qualquer consumo desse cogumelo deve ser realizado com cautela e 
conhecimento adequado.</Text>

 
                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/pycnoporus_sanguineus.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Pycnoporus sanguineus</Text>
        
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Polyporales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Polyporaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Pycnoporus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Pycnoporus sanguineus{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo4}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo4Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo4Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
O Pycnoporus sanguineus, popularmente conhecido como "Orelha-de-pau", é uma espécie de cogumelo pertencente à família Polyporaceae.
 Sua característica mais marcante é a coloração intensa de vermelho-sangue que cobre seu corpo frutífero. Geralmente, cresce em aglomerados 
 sobre madeira em decomposição de árvores, troncos caídos ou em tocos, contribuindo para o processo de decomposição desses materiais.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text>{'\n'}
Apesar de seu nome intrigante, o Pycnoporus sanguineus não é considerado comestível. A sua carne é dura e fibrosa, tornando-o impróprio para 
consumo humano. Além disso, a intensa coloração vermelha também é indicativa de que ele pode conter compostos químicos que podem ser tóxicos.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text>{'\n'}
Apesar de não ser comestível, o Cogumelo-Sangue-de-Boi possui potencial de uso em outras áreas. Tradicionalmente, em algumas culturas, a sua
 cor vibrante era usada como corante natural. Além disso, a pesquisa tem explorado as propriedades bioativas presentes neste cogumelo, como 
 antioxidantes e compostos antimicrobianos, que podem ter aplicações na indústria farmacêutica e de saúde.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Informações Científicas:</Text>{'\n'}
Do ponto de vista científico, o Pycnoporus sanguineus tem chamado a atenção devido às suas características únicas e ao potencial de seus 
compostos. Ele pertence ao reino Fungi, ao filo Basidiomycota e à ordem Polyporales. Sua cor vermelho-viva é resultado da produção de pigmentos
 específicos.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Curiosidades:</Text>{'\n'}
O cogumelo pode ser encontrado em diversos locais, incluindo florestas tropicais, matas ciliares e áreas degradadas.

                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/amanita_phalloides.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Amanita phalloides</Text>
        <Icon name="skull-sharp" size={20} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Polyporales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Amanitaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Amanita{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Amanita phalloides{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo5}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo5Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo5Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>
<Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
A Amanita phalloides, mais conhecida como "chapéu-da-morte" ou "Cicuta verde", é uma espécie de cogumelo venenoso que pertence ao gênero
 Amanita. Ele apresenta uma aparência característica, com um chapéu convexo de cor verde-oliva a marrom, muitas vezes com tons mais claros 
 nas bordas. O caule é delgado, branco e possui um anel na parte superior. Um dos traços distintivos é a presença de uma volva 
 (um saco membranoso) na base do caule, que é uma característica comum em muitos cogumelos Amanita.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text>{'\n'}
É importante destacar que a Amanita phalloides é altamente venenosa e não é comestível. Na verdade, é uma das espécies de cogumelos mais
 tóxicas conhecidas, contendo compostos mortais, como as amatoxinas. A ingestão mesmo de uma pequena quantidade desse cogumelo pode causar 
 sérios danos aos órgãos internos, como o fígado e os rins, podendo levar à morte.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text>{'\n'}
Ao contrário de muitos outros cogumelos, a Amanita phalloides não tem usos culinários, medicinais ou industriais conhecidos devido à sua 
extrema toxicidade. Seu principal papel na natureza parece ser o de decompositor, contribuindo para a reciclagem de nutrientes no ecossistema 
florestal.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Informações Científicas:</Text>{'\n'}
A Amanita phalloides tem sido objeto de estudos científicos para entender melhor os compostos tóxicos presentes em seu corpo. As amatoxinas 
são os principais agentes tóxicos encontrados nesse cogumelo, e sua ação prejudicial ao fígado é bem documentada. Devido à sua aparência atraente
 e similaridade com cogumelos comestíveis, como alguns do gênero Agaricus, a Amanita phalloides é frequentemente um desafio para identificação 
 precisa por pessoas não especializadas, o que pode levar a casos de envenenamento.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Curiosidade:</Text>{'\n'}
A Amanita phalloides é um lembrete poderoso da importância da identificação precisa de cogumelos na natureza. A semelhança visual 
com cogumelos comestíveis pode ser enganadora e potencialmente perigosa. Portanto, apenas pessoas com conhecimento profundo em micologia 
devem se aventurar na identificação e coleta de cogumelos na natureza, especialmente quando se trata de espécies venenosas e tóxicas.
     
                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/panaeolus_cinctulus.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Panaeolus cinctulus</Text>
        
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Bolbitiaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Panaeolus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Panaeolus cinctulus{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo6}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo6Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo6Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
O Panaeolus cinctulus apresenta um chapéu cônico a convexo, com uma coloração variável que pode incluir tons de verde, marrom e cinza. À medida
 que amadurece, o chapéu pode desenvolver pequenos sulcos ou rugas. O estipe (haste) é delgado e frequentemente tem um anel perto do topo. O 
 cogumelo cresce em grupos ou aglomerados em solos ricos em matéria orgânica, como pastagens, campos recém-cortados e canteiros de jardim.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text> {'\n'}
O Panaeolus cinctulus é geralmente considerado não comestível devido à sua pequena estatura e textura frágil. Além disso, a falta de sabor 
distintivo e aroma apetitoso também contribui para sua exclusão da culinária.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text> {'\n'}
Embora não seja comumente usado na alimentação, o Panaeolus cinctulus tem importância na ecologia como parte do ciclo de decomposição de 
matéria orgânica. Ele ajuda a decompor detritos vegetais e a reciclar nutrientes no solo, contribuindo para a saúde dos ecossistemas.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Informações Científicas:</Text> {'\n'}
O Panaeolus cinctulus pertence à classe Agaricomycetes e à ordem Agaricales. Assim como outros cogumelos do gênero Panaeolus, ele é conhecido 
por sua capacidade de crescer em ambientes de pastagem e campos. Embora seja frequentemente encontrado, ele é mais apreciado por sua presença 
decorativa na natureza do que por qualquer uso culinário.

                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/coprinus_comatus.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Coprinus comatus</Text>
        <Icon2 name="silverware-fork-knife" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Agaricaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Coprinus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Coprinus comatus{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo7}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo7Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo7Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
O Coprinus comatus é caracterizado por seu chapéu alongado, semelhante a um cilindro, que se estende quando jovem e se encolhe à medida que
 amadurece. A coloração varia de branco a creme, com escamas marrons que cobrem toda a superfície do chapéu. Ele cresce em grupos ou 
 solitariamente em áreas abertas, pastagens, jardins, campos e até mesmo em resíduos de madeira em decomposição.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text> {'\n'}
Esse cogumelo é geralmente considerado comestível em seu estágio jovem, quando o chapéu ainda está estendido e as escamas são macias. 
No entanto, é importante colher e consumir o Coprinus comatus pouco antes ou logo após a abertura do chapéu, pois ele passa rapidamente para 
o estágio de auto-digestão, no qual as lamelas se dissolvem em uma tinta negra. Nesse estágio, o cogumelo não é adequado para consumo.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text> {'\n'}
O Coprinus comatus é apreciado por sua comestibilidade e é usado em várias culinárias ao redor do mundo. Além disso, esse cogumelo também
 tem valor ecológico, pois desempenha um papel na decomposição de matéria orgânica e reciclagem de nutrientes no solo.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Informações Científicas e Curiosidades:</Text> {'\n'}
O Coprinus comatus pertence à classe Agaricomycetes e à ordem Agaricales. Ele é notável por sua rápida transformação e auto-digestão após a 
maturação, um processo conhecido como autólise. Isso resulta em uma aparência de tinta negra escorrendo do cogumelo, daí seu nome comum 
"Coprino-barbudo".
{'\n'}{'\n'}
 
 <Text style={{ fontWeight: 'bold', color: 'yellow'}}>É crucial lembrar que a segurança alimentar deve ser priorizada, e 
qualquer consumo desse cogumelo deve ser realizado com cautela e 
conhecimento adequado.</Text>


                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/Lycoperdon_perlatum.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Lycoperdon perlatum</Text>
        <Icon2 name="silverware-fork-knife" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Agaricaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Lycoperdon{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Lycoperdon perlatum{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo8}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo8Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo8Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
O Lycoperdon perlatum possui um corpo frutífero inicialmente esférico, com uma superfície externa coberta por pequenas protuberâncias ou 
espinhos. Conforme amadurece, essas protuberâncias se desprendem para liberar uma nuvem de esporos. Encontrado principalmente em florestas, 
pastagens, jardins e áreas de solo rico em matéria orgânica, o Cogumelo-Pérola é um organismo saprófito, ou seja, ele se alimenta de matéria 
orgânica em decomposição.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Comestibilidade e Usos:</Text> {'\n'}
O Lycoperdon perlatum não é considerado comestível na fase em que libera esporos. Quando os esporos são liberados, o cogumelo já está em um
 estágio avançado de maturação, e sua textura interna transformou-se em uma massa de esporos finos. No entanto, em estágios anteriores de
  desenvolvimento, quando a carne branca e compacta está presente, algumas pessoas relatam ter consumido o Puffball comum. Contudo, é crucial 
  observar que o consumo de cogumelos selvagens requer habilidades avançadas de identificação para evitar confusões com espécies tóxicas.{'\n'}{'\n'}

  <Text style={{ fontWeight: 'bold' }}>Informações Científicas e Curiosidades:</Text> {'\n'}
O Lycoperdon perlatum desempenha um papel ecológico importante como um decompositor, ajudando na reciclagem de matéria orgânica em ambientes
 florestais. Sua característica de liberar nuvens de esporos é um mecanismo de dispersão que auxilia na propagação do fungo.
 {'\n'}{'\n'}
 
 <Text style={{ fontWeight: 'bold', color: 'yellow'}}>É crucial lembrar que a segurança alimentar deve ser priorizada, e 
qualquer consumo desse cogumelo deve ser realizado com cautela e 
conhecimento adequado.</Text>

                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/Psilocybe_cubensis.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Psilocybe cubensis</Text>
        <Icon2 name="brain" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Strophariaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Psilocybe{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Psilocybe cubensis{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo9}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo9Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo9Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     
     O Psilocybe cubensis, também conhecido como "cogumelo mágico", é uma espécie de cogumelo psicoativo amplamente estudada por suas
      propriedades alucinógenas. Ele pertence ao gênero Psilocybe, que abriga várias espécies que contêm compostos psilocibínicos.{'\n'}{'\n'}

       <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'} 
       O Psilocybe cubensis é caracterizado por seu chapéu cônico e escuro, que pode variar em tons de marrom, além de um caule 
cilíndrico. Ele cresce em habitats naturais como pastagens, campos, florestas tropicais e áreas úmidas. Encontrado principalmente em regiões
de climas quentes e úmidos, é um cogumelo saprófita, ou seja, obtém nutrientes de matéria orgânica em decomposição.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Comestibilidade e Usos:</Text> {'\n'} 
 O Psilocybe cubensis é conhecido por conter substâncias psicoativas, como a psilocibina e a psilocina, que induzem 
experiências alteradas de percepção e consciência. Essas propriedades têm sido utilizadas ancestralmente em rituais religiosos e espirituais
 por algumas culturas. No entanto, devido à sua potente natureza alucinógena, não é considerado um cogumelo comestível no sentido convencional.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Informações Científicas e Importância:</Text> {'\n'} 
 O Psilocybe cubensis tem despertado interesse na comunidade científica devido ao potencial terapêutico
 da psilocibina no tratamento de distúrbios mentais, como depressão, ansiedade e transtorno de estresse pós-traumático. Estudos estão sendo 
 conduzidos para compreender melhor os efeitos e benefícios desses compostos.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Curiosidades:</Text> {'\n'} 
 O nome "cubensis" é derivado do local onde o cogumelo foi inicialmente descrito, Cuba. No entanto, essa espécie é encontrada
 em várias partes do mundo, incluindo América Central e do Sul, sudeste dos Estados Unidos, Austrália e Ásia.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold', color: 'yellow' }}>É importante lembrar que o consumo de cogumelos psicoativos pode ter efeitos sérios na saúde mental e física, e seu uso deve ser realizado 
 com responsabilidade e cuidado. Sempre busque informações de fontes confiáveis e, se estiver interessado em explorar os efeitos desses 
 cogumelos, considere buscar orientação profissional.</Text> {'\n'}


                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/Panaeolus_cyanescens.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Panaeolus cyanescens</Text>
        <Icon2 name="brain" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Psathyrellaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Panaeolus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Panaeolus cyanescens{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo10}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo10Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo10Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
Conhecido como cogumelo azul, o Panaeolus cyanescens apresenta um chapéu de coloração marrom-escura, muitas vezes com um centro mais claro e 
margens onduladas.
 Seus esporos são de cor preta, o que contribui para a coloração azul que aparece quando o cogumelo é manuseado. Ele é frequentemente
 encontrado em áreas de pastagens, gramados, estrume e resíduos vegetais em regiões de clima temperado e subtropical.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text> {'\n'}
Embora alguns relatos mencionem que o Panaeolus cyanescens seja consumido em algumas culturas, não é recomendado seu consumo devido à presença 
de compostos psicoativos. Além disso, identificar corretamente essa espécie pode ser desafiador, e há riscos associados à ingestão de cogumelos 
selvagens.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text> {'\n'}
O Panaeolus cyanescens é principalmente conhecido por seus efeitos alucinógenos devido à psilocibina e psilocina. Essas substâncias podem
 induzir experiências psicodélicas que afetam a percepção, os sentidos e o pensamento. O cogumelo tem sido utilizado por comunidades 
 que buscam essas experiências, mas seu uso deve ser feito com extrema cautela devido aos riscos envolvidos.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Informações Científicas e Curiosidades:</Text> {'\n'}
O Panaeolus cyanescens pertence ao gênero Panaeolus, que faz parte da família Psathyrellaceae. Essa espécie é apreciada por sua aparência
 peculiar, com a característica coloração azul que surge quando tocada. No entanto, a ingestão desses cogumelos pode ter efeitos imprevisíveis
  e variações na intensidade de suas propriedades alucinógenas.{'\n'}{'\n'}

  <Text style={{ fontWeight: 'bold', color: 'yellow' }}>É importante lembrar que o consumo de cogumelos psicoativos pode ter efeitos sérios na saúde mental e física, e seu uso deve ser realizado 
 com responsabilidade e cuidado. Sempre busque informações de fontes confiáveis e, se estiver interessado em explorar os efeitos desses 
 cogumelos, considere buscar orientação profissional.</Text> {'\n'}


                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/Panaeolus_sphinctrinus.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Panaeolus papilionaceus</Text>
        <Icon2 name="brain" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Psathyrellaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Panaeolus{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Panaeolus papilionaceus{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo11}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo11Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo11Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
     
O Panaeolus sphinctrinus apresenta um chapéu de coloração acinzentada ou marrom-escura, frequentemente com um pequeno anel que pode ser 
observado na parte superior do seu estipe (haste). Ele é encontrado em ambientes variados, como pastagens, áreas gramadas, estrume de herbívoros
 e resíduos vegetais em regiões de clima temperado e subtropical.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade:</Text> {'\n'}
Embora alguns cogumelos do gênero Panaeolus sejam relatados como comestíveis em algumas culturas, o Panaeolus sphinctrinus é geralmente 
considerado não comestível. É importante mencionar que a identificação correta dos cogumelos é crucial para evitar riscos à saúde, pois muitos 
cogumelos podem ser confundidos com espécies tóxicas.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Usos e Importância:</Text> {'\n'}
Além de suas características visuais distintas, Panaeolus papilionaceus é conhecido por conter compostos alucinógenos,
 como a psilocibina e a psilocina. Esses compostos podem induzir estados alterados de consciência e experiências psicodélicas em quem os 
 consome. No entanto, o uso desses cogumelos com o propósito de obter efeitos psicoativos é altamente arriscado devido à variabilidade de 
 compostos e ao potencial de efeitos colaterais negativos.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold', color: 'yellow' }}>É importante lembrar que o consumo de cogumelos psicoativos pode ter efeitos sérios na saúde mental e física, e seu uso deve ser realizado 
 com responsabilidade e cuidado. Sempre busque informações de fontes confiáveis e, se estiver interessado em explorar os efeitos desses 
 cogumelos, considere buscar orientação profissional.</Text> {'\n'}



                </Text>
                </View>
                )}
                </View>

                <View style={styles.cogumeloSection}>
          <Image
            source={require('./assets/images/shiitake.jpg')} 
            style={styles.cogumeloImage}
            
          />
          <View style={styles.cogumeloHeader}>
        <Text style={styles.cogumeloTitle}>Lentinula edodes</Text>
        <Icon2 name="silverware-fork-knife" size={25} color="yellow" style={styles.foodIcon} />
      </View>
          <Text style={styles.cogumeloInfo}>
          <Text style={{ fontWeight: 'bold' }}>Reino:</Text>     Fungi {'\n'}
          <Text style={{ fontWeight: 'bold' }}>Divisão:</Text>  Basidiomycota{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Classe:</Text>   Agaricomycetes{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Ordem: </Text>  Agaricales{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Família:</Text>  Marasmiaceae{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Gênero:</Text>  Lentinula{'\n'}
          <Text style={{ fontWeight: 'bold' }}>Espécie:</Text> Lentinula edodes{'\n'}
            
          </Text>
          <TouchableOpacity style={styles.verMaisButton} onPress={toggleCogumelo12}>
            <Text style={styles.verMaisButtonText}>
              {isCogumelo12Expanded ? 'Ver menos' : 'Ver mais'}
            </Text>
          </TouchableOpacity>
          {isCogumelo12Expanded && (
            <View>
              <Text style={styles.cogumeloInfo}>

     <Text style={{ fontWeight: 'bold' }}>Descrição e Habitat:</Text> {'\n'}
O Shiitake é caracterizado por seus chapéus largos e carnudos, com uma coloração que varia de marrom a marrom-escuro. Ele é encontrado 
naturalmente em florestas decíduas do leste asiático, especialmente em regiões como China, Japão e Coreia. No entanto, devido à sua popularidade,
 o Shiitake agora é cultivado em diversos países, incluindo o Brasil.{'\n'}{'\n'}

 <Text style={{ fontWeight: 'bold' }}>Comestibilidade e Usos:</Text> {'\n'}
O Shiitake é altamente valorizado por sua textura firme e sabor umami, que o torna uma escolha popular na culinária. Ele pode ser utilizado em 
uma variedade de pratos, como sopas, salteados, molhos e até mesmo em pratos vegetarianos e veganos. Além de ser uma delícia na cozinha, o 
Shiitake também tem sido estudado por suas propriedades medicinais, como fortalecimento do sistema imunológico e potencial antitumoral.{'\n'}{'\n'}

<Text style={{ fontWeight: 'bold' }}>Informações Científicas e Curiosidades:</Text> {'\n'}
O nome científico Lentinula edodes reflete sua classificação no reino Fungi, filo Basidiomycota, classe Agaricomycetes, ordem Agaricales e 
família Marasmiaceae. A história do cultivo de Shiitake remonta a séculos atrás, onde era cultivado na madeira de árvores decíduas, especialmente 
a castanheira-da-índia. Atualmente, métodos de cultivo em toras de madeira e substratos estão amplamente difundidos.


                </Text>
                </View>
                )}
                </View>

        </View>
      </ScrollView>
    </View>
  );
}
  


function Tab2Screen() {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const isFocused = useIsFocused(); 

  const [isSaved, setIsSaved] = useState(false);
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  const [flashEnabled, setFlashEnabled] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [SelectModalVisible, setSelectModalVisible] = useState(false);

  const toggleFlash = () => {
    setFlashEnabled(!flashEnabled);
  };

  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') await Linking.openSettings();
    }
    getPermission();
  }, []);

  
  useEffect(() => {
    if (showCamera && isFocused) {
      const device = devices?.back;
      if (device && !camera.current) {
        camera.current = new Camera({ device, isActive: true, photo: true });
      }
    }
  }, [showCamera, devices, isFocused]);

 
  useEffect(() => {
    return () => {
      if (camera.current) {
        camera.current.release();
      }
    };
  }, []);

  const capturePhoto = async () => {
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({ flash: flashEnabled ? 'on' : 'off' }); 
      setImageSource(photo.path);
      setShowCamera(false);
      console.log(photo.path);
    }
  };

  const saveToGallery = async () => {
    try {
      if (imageSource) {
        await CameraRoll.save(imageSource, { type: 'photo' });
        setIsSaved(true);
        console.log('Foto salva na galeria!');
      }
    } catch (error) {
      console.error('Erro ao salvar a foto na galeria:', error);
    }
  };

  const openImagePicker = () => {
    ImageCropPicker.openPicker({
      // Configurações adicionais para a biblioteca de imagens
    })
    .then((image) => {
      // Processar a imagem selecionada
      setSelectedImage(image.path); 
      setSelectModalVisible(true);
    })
    .catch((error) => {
      console.log('Erro ao selecionar a imagem:', error);
    });
  };

  useEffect(() => {
    if (isSaved) {
      ToastAndroid.show('Foto salva na galeria!', ToastAndroid.SHORT);
      setIsSaved(false);
    }
  }, [isSaved]);

  /* const handleImageRecognition = async () => {
    if (selectedImage) {
      try {
        const response = await axios.post(
          'https://api.clarifai.com/v2/models/general-image-recognition/outputs',
          {
            inputs: [
              {
                data: {
                  image: {
                    url: selectedImage,
                  },
                },
              },
            ],
          },
          {
            headers: {
              Authorization: `Bearer 7af50e31c41b4c8884f24d9b345895b7`,
            },
          }
        );

        const concepts = response.data.outputs[0].data.concepts;
        console.log('Resultado da identificação:', concepts);
      } catch (error) {
        console.error('Erro ao fazer a identificação:', error);
      }
    }
  };*/

  if (!devices?.back) {
    return <Text> Câmera não está disponível</Text>;
  }

  return (
    <View style={styles.containerCam}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={devices.back}
            isActive={showCamera && isFocused}
            photo={true}
          />
          <View style={styles.buttonCamContainer}>
            <TouchableOpacity style={styles.camButton} onPress={() => capturePhoto()} />
          </View>
          <TouchableOpacity
            style={styles.flashButton}
            onPress={toggleFlash}
          >
            <Icon2 name={flashEnabled ? 'flash' : 'flash-off'} size={30} color="white" />
          
          </TouchableOpacity>
          <TouchableOpacity onPress={openImagePicker}  style={ styles.imagePickerButton }>
 
          <Icon name="images" size={35} color="white" />
            </TouchableOpacity>
            
            <Modal visible={SelectModalVisible} transparent animationType="slide">
        <View style={styles.modalContainerSE}>
          <TouchableOpacity onPress={() => setSelectModalVisible(false)} style={styles.closeModalSE}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
          {selectedImage && (
            <Image source={{ uri: selectedImage }} style={styles.selectedImageSE} resizeMode="contain" />
          )}
        </View>
      </Modal>
      
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image style={styles.image} source={{ uri: `file://${imageSource}` }} />
          ) : null}
 <TouchableOpacity
            style={styles.saveButton}
            onPress={saveToGallery}
          >
            {/* Coloque aqui o ícone de salvar */}
            <Icon2 name="download-outline" size={40} color= "white" />
            
          </TouchableOpacity>

          <View style={styles.backButton}>
            <TouchableOpacity
              style={{padding: 5,
                justifyContent: 'center',
                alignItems: 'flex-start',
                width: 120}}
              onPress={() => setShowCamera(true)}
            >
              <Icon2 name="camera-retake" size={35} color= "white" marginLeft= {10}/>
            </TouchableOpacity>
          </View>

        </>
      )}
    </View>
  );
}

function Tab3Screen({ nomeUsuario, navigation, userId}) {
    const [profileImage, setProfileImage] = useState(null);
    const [profileImageUrl, setProfileImageUrl] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);   
    const windowHeight = Dimensions.get('window').height;
    const [alterarSenhaModalVisible, setalterarSenhaModalVisible] = useState(false);

    const [NotModalVisible, setNotModalVisible] = useState(false);
    const [IdiomaModalVisible, setIdiomaModalVisible] = useState(false);
    const [SomModalVisible, setSomModalVisible] = useState(false);
    const [AjudaModalVisible, setAjudaModalVisible] = useState(false);
    const [SobreModalVisible, setSobreModalVisible] = useState(false);
    const [VisuModalVisible, setVisuModalVisible] = useState(false);
    const [SairModalVisible, setSairModalVisible] = useState(false);
    const [DoacaoModalVisible, setDoacaoModalVisible] = useState(false);
    const [DeletarmodalVisible, setDeletarModalVisible] = useState(false);


    const [novoNomeUsuario, setNovoNomeUsuario] = useState('');
     const [, setNomeUsuario] = useState('');

     const [newEmail, setNewEmail] = useState('');

     const [senhaAtual, setSenhaAtual] = useState('');
     const [novaSenha, setNovaSenha] = useState('');
     const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleLogout = () => {
      signOut()
        .then(() => {
          // Logout bem-sucedido, agora navegue para a tela de login
          navigation.navigate('Login');
        })
        .catch((error) => {
          // Lidar com erros de logout, se necessário
          console.log('Erro ao fazer logout:', error);
        });
    };
    
    useEffect(() => {
      checkPermissions();
    }, []);
  
    const checkPermissions = async () => {
      const permissionStatus = await check(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
      if (permissionStatus !== RESULTS.GRANTED) {
        requestPermissions();
      }
    };
    const requestPermissions = async () => {
      try {
        const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
        if (result === RESULTS.GRANTED) {
          console.log('Permissão concedida');
        } 
      
      } catch (error) {
        console.log('Erro ao solicitar permissão:', error);
      }
    };
    
    const handleSalvarNomeUsuario = () => {
      console.log('Novo nome de usuário:', novoNomeUsuario); //revisar para atualizar instantaneamente
    
      if (novoNomeUsuario !== '') {
        updateNomeUsuario(userId, novoNomeUsuario, { source: 'server' })
          .then((success) => {
            if (success) {
              setNomeUsuario(novoNomeUsuario); // Atualiza o nome de usuário exibido na tela
              setModalVisible(false); // Fecha o modal após salvar o nome de usuário
              ToastAndroid.show('Nome de usuário atualizado com sucesso', ToastAndroid.SHORT); // Está exibindo msg do android
            } else {
              console.log('Erro ao atualizar o nome de usuário.');
            }
          })
          .catch((error) => {
            console.log('Erro ao atualizar nome de usuário:', error);
          });
      }
    };

    const handleAlterarSenha = async () => {
      if (novaSenha !== confirmarSenha) {
        alert('As senhas não coincidem. Por favor, digite a mesma senha nos campos de "Nova senha" e "Confirme sua senha".');
        return;
      }
    
      try {
        const user = auth().currentUser;
        const credential = auth.EmailAuthProvider.credential(user.email, senhaAtual);
    
        // Reautentica o usuário com a senha atual
        await user.reauthenticateWithCredential(credential);
    
        // Se a reautenticação for bem-sucedida, chame a função updatePassword para alterar a senha
        await user.updatePassword(novaSenha);
        alert('Senha alterada com sucesso!');
        // Se necessário, você pode fechar o modal aqui
      } catch (error) {
        console.log('Erro ao alterar senha:', error);
        alert('Ocorreu um erro ao alterar a senha. Por favor, verifique a senha atual e tente novamente.');
      }
    };
    
  
    const selectProfileImage = () => {
      ImageCropPicker.openPicker({
        mediaType: 'photo',
        width: 500,
        height: 500,
        cropping: true,
      })
        .then((image) => {
          const source = { uri: image.path };
          setProfileImage(source);
  
          // Passa o userId como parâmetro para a função uploadProfileImage
          uploadProfileImage(userId, image.path)
            .then((imageUrl) => {
              // Atualiza o estado com o URL da imagem vinculado ao usuário
              setProfileImageUrl(imageUrl);
            })
            .catch((error) => {
              console.log('Erro ao fazer o upload da imagem:', error);
            });
        })
        .catch((error) => {
          console.log('Erro ao selecionar foto:', error);
        });
    };

    useEffect(() => {
      // Ao renderizar a tela, buscar o URL da imagem de perfil associado ao usuário
      fetchProfileImageUrl();
    }, []);
  
    const fetchProfileImageUrl = async () => {
      try {
        const url = await getProfileImageUrl(userId);
        setProfileImageUrl(url);
      } catch (error) {
        console.log('Erro ao buscar URL da imagem de perfil:', error);
      }
    };

    const handleUpdateEmail = () => {
      if (newEmail.trim() === '') {
        ToastAndroid.show('Por favor, digite um novo e-mail.', ToastAndroid.SHORT);
        return;
      }
  
      updateEmail(newEmail)
        .then((success) => {
          if (success) {
            // E-mail atualizado com sucesso
            // Realize qualquer outra ação necessária após a alteração do e-mail
            // Por exemplo, fechar o modal, exibir uma mensagem de sucesso, etc.
            ToastAndroid.show('E-mail atualizado com sucesso!', ToastAndroid.SHORT);
            setNewEmail(''); // Limpa o campo de texto após a atualização
          }
        })
        .catch((error) => {
          // Ocorreu um erro ao atualizar o e-mail
          console.log('Erro ao atualizar o e-mail:', error);
          ToastAndroid.show('Erro ao atualizar o e-mail. Por favor, tente novamente.', ToastAndroid.SHORT);
        });
    };



    const openModal = () => {
      setModalVisible(true);
    };
    
    const closeModal = () => {
      setModalVisible(false);
    };
    
    const openalterarSenhaModal = () => {
      setalterarSenhaModalVisible(true);
    };
    const closealterarSenhaModal = () => {
      setalterarSenhaModalVisible(false);
    };

    const openNotModal = () => {
      setNotModalVisible(true);
    };
    const closeNotModal = () => {
      setNotModalVisible(false);
    };

    const openIdiomaModal = () => {
      setIdiomaModalVisible(true);
    };
    const closeIdiomaModal = () => {
      setIdiomaModalVisible(false);
    };

    const openSomModal = () => {
      setSomModalVisible(true);
    };
    const closeSomModal = () => {
      setSomModalVisible(false);
    };

    const openAjudaModal = () => {
      setAjudaModalVisible(true);
    };
    const closeAjudaModal = () => {
      setAjudaModalVisible(false);
    };

    const openSobreModal = () => {
      setSobreModalVisible(true);
    };
    const closeSobreModal = () => {
      setSobreModalVisible(false);
    };

    const openVisuModal = () => {
      setVisuModalVisible(true);
    };
    const closeVisuModal = () => {
      setVisuModalVisible(false);
    };

    
    const openSairModal = () => {
      setSairModalVisible(true);
    };
    const closeSairModal = () => {
      setSairModalVisible(false);
    };

    const openDoacaoModal = () => {
      setDoacaoModalVisible(true);
    };
    const closeDoacaoModal = () => {
      setDoacaoModalVisible(false);
    };
    
    const openDeletarModal = () => {
      setDeletarModalVisible(true);
    };
    const closeDeletarModal = () => {
      setDeletarModalVisible(false);
    };
    

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}> {nomeUsuario} </Text>
          <View style={styles.profileContainer}>
          <TouchableOpacity onPress={selectProfileImage} style={styles.circleButton}>
              {profileImageUrl ? (
                <Image source={{ uri: profileImageUrl }} style={styles.profileImage} />
              ) : (
                <Icon name="camera" size={30} color="black" />
              )}
            </TouchableOpacity>
          </View>
        </View>
  
        <TouchableOpacity onPress={openModal} style={styles.editButton}>
          <Text style={styles.editButtonText}>Editar perfil</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.buttonsContainer}>
          <View style={styles.line} />
          
         
          <TouchableOpacity style={styles.button1} onPress={openNotModal}>
          <Icon name="notifications-sharp" size={30} color="black" style={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Notificações </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:180}} />          
          </TouchableOpacity>
          <Notificacao visible={NotModalVisible} onClose={closeNotModal} />


          <TouchableOpacity style={styles.button2} onPress={openIdiomaModal}>
          <Icon name="language-sharp" size={30} color="black" style={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Preferências de idioma  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:73}} />          
          </TouchableOpacity>
          <Idioma visible={IdiomaModalVisible} onClose={closeIdiomaModal} />
          

          <TouchableOpacity style={styles.button3} onPress={openSomModal}>
          <Icon name="headset-sharp" size={30} color="black" styles={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Configurações de som  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:80}} />          
          </TouchableOpacity>
          <Som visible={SomModalVisible} onClose={closeSomModal} />


          <TouchableOpacity style={styles.button4} onPress={openAjudaModal}>
          <Icon name="hand-left-sharp" size={30} color="black" styles={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Ajuda e suporte  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:145}} />          
          </TouchableOpacity>
          <Ajuda visible={AjudaModalVisible} onClose={closeAjudaModal} />

          
          <TouchableOpacity style={styles.button6} onPress={openSobreModal}>
          <Icon name="information-circle-sharp" size={30} color="black" styles={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Sobre o aplicativo  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:123}} />          
          </TouchableOpacity>
          <Sobre visible={SobreModalVisible} onClose={closeSobreModal} />


          <TouchableOpacity style={styles.button7} onPress={openVisuModal}>
          <Icon name="eye-sharp" size={30} color="black" styles={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Modo de visualização  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:85}} />          
          </TouchableOpacity>
          <Visu visible={VisuModalVisible} onClose={closeVisuModal} />

          <TouchableOpacity style={styles.button8}  onPress={openDoacaoModal}>
          <Icon2 name="emoticon-wink-outline" size={33} color="black" styles={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:20, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Doação  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:225}} />          
          </TouchableOpacity>
          <Doacao visible={DoacaoModalVisible} onClose={closeDoacaoModal} /> 

          <TouchableOpacity style={styles.button5}  onPress={openSairModal}>
          <Icon name="log-out-sharp" size={30} color="black" styles={{}} /> 
<Text style={{fontSize: 20, color: 'black', marginLeft:23, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Sair  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:260}} />          
          </TouchableOpacity>
          <Sair visible={SairModalVisible} onClose={closeSairModal} onLogout={handleLogout} />        

        </View>

  <Modal visible={modalVisible} animationType="slide"> 
        <View style={[styles.modalContainer, { height: windowHeight / 2 }]}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Editar Perfil</Text>
          </View>

          <View style={styles.buttonModalContainer}>
          <View style={styles.inputContainer}>
        <Text style={styles.label}>Alterar nome de usuário</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={nomeUsuario}
            value={novoNomeUsuario}
            onChangeText={(text) => setNovoNomeUsuario(text)}
          />
          <TouchableOpacity onPress={handleSalvarNomeUsuario} style={styles.iconButton}>
            <Icon name="checkmark-sharp" size={20} color="black" /> 
          </TouchableOpacity>
              
            </View>
               </View>


                <View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alterar email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite outro email..."
          value={newEmail}
          onChangeText={(text) => setNewEmail(text)}
        />
      </View>

      <TouchableOpacity onPress={handleUpdateEmail} style={styles.iconButton2}>
      <Icon name="checkmark-sharp" size={20} color="black" /> 
      </TouchableOpacity>
    </View>


            <TouchableOpacity style={styles.buttonModalSenha} onPress={openalterarSenhaModal}>
            <Icon name="lock-closed-sharp" size={18} color="black" styles={{}} /> 
<Text style={{fontSize: 16, color: '#202020', marginLeft:10, alignSelf: 'flex-start', fontWeight: 'bold', marginTop: 15}}> Alterar senha  </Text>
<Icon name="arrow-forward" size={20} color="black" style={{marginLeft:203}} />          
          </TouchableOpacity>                   

          <TouchableOpacity style={styles.buttonModalDelete} onPress={openDeletarModal}>
        <Icon name="trash-sharp" size={20} color="black" styles={{}} /> 
        <Text style={{ fontSize: 16, color: 'red', marginLeft: 10, alignSelf: 'flex-start', fontWeight: 'bold', marginTop: 15 }}>Deletar minha conta</Text>
      </TouchableOpacity>
      <Deletar visible={DeletarmodalVisible} onClose={closeDeletarModal} /> 

          </View>
          
          
          <TouchableOpacity onPress={closeModal} style={styles.modalCloseButton}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </Modal>

   {/* MODAL DO BOTÃO ALTERAR SENHA A BAIXO */}
      <Modal visible={alterarSenhaModalVisible} animationType="slide">

      <View style={styles.ModalAlterarSenhaContainer}>
      <View style={styles.modalHeader2}>
        <Text style={styles.modalTitle2}>Alterar senha</Text>
      </View>
      <View style={styles.buttonModalContainer2}>
        <View style={styles.inputContainer2}>
          <Text style={styles.label2}>Senha atual</Text>
          <TextInput
            style={styles.input2}
            placeholder="Digite sua senha atual..."
            secureTextEntry={true}
            value={senhaAtual}
            onChangeText={setSenhaAtual}
          />
        </View>

        <View style={styles.inputContainer2}>
          <Text style={styles.label2}>Nova senha</Text>
          <TextInput
            style={styles.input2}
            placeholder="Digite sua nova senha..."
            secureTextEntry={true}
            value={novaSenha}
            onChangeText={setNovaSenha}
          />
        </View>

        <View style={styles.inputContainer2}>
          <Text style={styles.label2}>Confirme sua senha</Text>
          <TextInput
            style={styles.input2}
            placeholder="Redigite sua nova senha..."
            secureTextEntry={true}
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
        </View>

        <TouchableOpacity style={styles.buttonConfirmAlterarSenha} onPress={handleAlterarSenha}>

            
<Text style={{fontSize: 18, color: 'white', marginLeft: 5, alignSelf: 'center', fontWeight: 'bold', marginTop: 10}}> Salvar alteração   </Text>
        
          </TouchableOpacity>   

          </View>

          <TouchableOpacity onPress={closealterarSenhaModal} style={styles.closealterarSenhaModal}>
            <Icon name="arrow-back-sharp" size={30} color="white" />
          </TouchableOpacity>
  </View>
</Modal>

      </View>
    );
  
   }    
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    circleContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      width: 120,
      height: 170,
      overflow: 'hidden',
    },
    circleButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: 'lightgray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
    },
    headerContainer:{
      flexDirection: 'row',    
      backgroundColor: '#556B2F',
      paddingVertical: 92,
      width: '100%',
      position: 'absolute', 
    top: 0,
    
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'lightgray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: '100%',
      position: 'absolute', 
    top: 40,
    borderRadius: 15
    },
    headerText: {
      fontSize: 24,
      fontWeight: 'bold',
      marginLeft: 40,
      color: '#454545'
    },
    editButton: {
      marginTop: 25,
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: '#6B8E23',
      borderRadius: 10,
      top: 65,
      left: 270,
    },
    editButtonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
    modalContainer: { /* Moda editar perfil */
      flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ddd',
    paddingTop: 70 ,
    width: '100%',
    paddingLeft: 7,
    paddingRight: 7,
  },
    deleteButton: {
      backgroundColor: '#6B8E23',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderRadius: 5,
      marginTop: 30,
      alignSelf: 'center'
    
    },
    modalHeader: {
      flexDirection: 'row',
      paddingVertical: 20,
      paddingHorizontal: 20,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#6B8E23',
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
    },
    buttonModalContainer: {
      marginTop: 20,
      alignSelf: 'flex-start',
      width: '100%',
      paddingVertical: 20,
    },
    inputContainer: {
      marginBottom: 15,
     

    },
    iconButton: {
      position: 'absolute', 
      right: 15,
      marginTop: 12
    },
    iconButton2: {
      position: 'absolute', 
      right: 15,
      marginTop: 42
    },

    label: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#454545',
      paddingLeft: 5
      
    },
    input: {
      borderBottomWidth: 1,
      borderBottomColor: '#556B2F',
      borderTopWidth: 1,
      borderTopColor: '#556B2F',
      borderWidth: 1,
      borderColor: '#556B2F',
      borderRadius: 5,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#DCDCDC',
    },
    modalConfirmButton: {
      position: 'absolute',
      top: 15,
      right: 40,
    },
    modalCloseButton: {
      position: 'absolute',
      top: 15,
      right: 10,
    },
    buttonModalSenha:{  
      marginTop: 10,
      borderBottomWidth: 1,
        borderBottomColor: '#556B2F',
        borderTopWidth: 1,
        borderTopColor: '#556B2F',
        backgroundColor: '#DCDCDC',
        width: '100%',
        height: 55,
        borderRadius: 20,
        borderLeftWidth: 1,
        borderLeftColor: '#556B2F',
        borderRightWidth: 1,
        borderRightColor: '#556B2F',
        alignItems:  'center',
        flexDirection: 'row', 
       paddingLeft:10,     
    },
    buttonModalDelete:{  
      marginTop: 17,
      borderBottomWidth: 1,
        borderBottomColor: '#556B2F',
        borderTopWidth: 1,
        borderTopColor: '#556B2F',
        backgroundColor: '#DCDCDC',
       width: 210,
        height: 55,
        borderRadius: 15,
        borderLeftWidth: 1,
        borderLeftColor: '#556B2F',
        borderRightWidth: 1,
        borderRightColor: '#556B2F',
        alignItems:  'center',
        flexDirection: 'row', 
       paddingLeft:10,     
       alignSelf: 'center'
    },
    
      buttonsContainer: {
        marginTop: 500, 
        alignSelf: 'flex-start',
        width: '100%',
        height: '100%',
        justifyContent:  'flex-start',
        paddingVertical: 50,
        paddingHorizontal: 0,
        backgroundColor: '#ddd',
        alignItems: 'flex-start'
        
      },
      button1: {
        borderBottomWidth: 1,
        borderBottomColor: '#556B2F',
        
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginTop: -50,
        alignItems:  'center',
        flexDirection: 'row', 
       paddingLeft:10,           
      },
      button2: {
        
        borderBottomColor: '#556B2F',
        
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10, 
      },
      button3: {
        borderBottomWidth: 1,
        borderBottomColor: '#556B2F',
        borderTopWidth: 1,
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10,
      },
      button4: {
        
        borderBottomColor: '#556B2F',
        
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10,
      },
      button5: {
        borderBottomWidth: 1,
        borderBottomColor: '#556B2F',
        borderTopWidth: 1,
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10,
      },
      button6: {
        borderBottomWidth: 1,
        borderBottomColor: '#556B2F',
        borderTopWidth: 1,
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10,
      },
      button7: {
        
        borderBottomColor: '#556B2F',
        
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10,
      },
      button8: {
        
        borderBottomColor: '#556B2F',
        borderTopWidth: 1,
        borderTopColor: '#556B2F',
        backgroundColor: 'lightgray',
        width: '100%',
        height: 55,
        marginBottom: 0,
        alignItems:  'center',
        flexDirection: 'row',
        paddingLeft:10,
      },
    line: {
      height: 1,
      backgroundColor: 'green',
      width: '100%',
      bottom: 49,
    },
    noPhotoText: {
      color: 'black',
      bottom: 900,
      left: 135,
    },
    ModalAlterarSenhaContainer:{ /* Modal alterar senha */
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ddd',
      paddingTop: 70 ,
      width: '100%',
      paddingLeft: 7,
      paddingRight: 7,

    },
    modalHeader2: {
      flexDirection: 'row',
      paddingVertical: 20,
      paddingHorizontal: 20,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: '#6B8E23',
    },
    modalTitle2: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'white',
    },
    buttonModalContainer2: {
      marginTop: 20,
      alignSelf: 'flex-start',
      width: '100%',
      paddingVertical: 20,
    }, 
    inputContainer2: {
      marginBottom: 20,

    },
    label2: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#454545',
      paddingLeft: 5
      
    },
    input2: {
      borderWidth: 1,
      borderColor: '#556B2F',
      borderRadius: 5,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#DCDCDC',
      
    },
    modalConfirmButton2: {
      position: 'absolute',
      top: 15,
      right: 40,
    },
    closealterarSenhaModal: {
      position: 'absolute',
      top: 15,
      right: 10,
    },
    buttonConfirmAlterarSenha:{  
      marginTop: 5,
       width: 'auto',
        backgroundColor: '#6B8E23',        
        borderRadius: 10,        
        paddingBottom: 10,
        alignSelf: 'center',             
    }, 
    modalContainer3: { /* Modal notificação */
    flex: 1,
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor: '#ddd',
  paddingTop: 70 ,
  width: '100%',
  paddingLeft: 7,
  paddingRight: 7,
  
  },
  modalHeader3: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#6B8E23',
  },
  modalTitle3: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  containerCam: {                     /* CAMERA */
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
  },
  buttonCamContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    bottom: 20, 
    padding: 20,
    alignItems: 'center', 
  },
  camButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#B2BEB5',
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'white',
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 9 / 16,
  },
  backButton: {
    backgroundColor: 'rgba (0,0,0,0.0)',
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    top: 0,
    padding: 20,
  },
  Buttons:{
flexDirection: 'row',
justifyContent: 'space-between',
width: '100%',

  },
  saveButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flashButton:{
    position: 'absolute',
    top: 20,
  },
    imagePickerButton: {
      position: 'absolute',
      bottom: 50,
      right: 40,
    },
    modalContainerSE: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    closeModalSE: {
      position: 'absolute',
      top: 20,
      right: 20,
      zIndex: 1,
    },
    selectedImageSE: {
      width: '80%',
      height: '80%',

  },                                /* Tela principal */
  containerInicio: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerInicio: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    padding: 25,
    backgroundColor: '#556B2F', 
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    flex: 1,
  },
  searchIcon: {
    marginRight: 10, 
  },
  bookIcon: {
    marginLeft: 10, 
  },
  input3: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'white',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    
  },
  content: {
    padding: 5,
  },

  InfoModalContainer: {                     /* Info Modal Principal */
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },
  InfoImage: {
    alignSelf: 'center',
    marginVertical: 20,
    width: 300,
    height: 300,
    marginRight: 30
    
  },
  closeModal2: {
    padding: 30,
    alignSelf: 'flex-end'
  },

TextOu: {
fontSize: 16,
color: 'white',
fontWeight: 'bold',
marginLeft: 15,
},
cogumeloSection: {           /* Seções */
  marginBottom: 10,
  backgroundColor: '#6B8E23',
  borderRadius: 10,
  padding: 16,
  marginTop: 3
},

cogumeloImage: {
  width: '100%',
  height: 200,
  borderRadius: 10,
  resizeMode: 'cover',
},
cogumeloHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 5,
},
foodIcon: {
  marginLeft: 15,
 marginTop: 5
},
cogumeloTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 10,
  color: 'white'
},

cogumeloInfo: {
  fontSize: 16,
  marginTop: 5,
  color: 'black',
},

verMaisButton: {
  marginTop: 10,
  alignSelf: 'flex-end',
  paddingVertical: 5,
  paddingHorizontal: 10,
  backgroundColor: '#556B2F',
  borderRadius: 5,
  
},

verMaisButtonText: {
  color: 'white',
  fontWeight: 'bold',
  
},
});

 
  
# Aplicativo React Native "SeekMush"

## Sumário

1. [Sobre o Projeto](#sobre-o-projeto)
2. [Tecnologias Utilizadas](#tecnologias-utilizadas)
3. [Testando o Aplicativo](#testando-o-aplicativo)
4. [Tela de Registro (RegisterScreen)](#tela-de-registro-registerscreen)
5. [Tela de Login (LoginScreen)](#tela-de-login-loginscreen)
6. [Tela de Controle (App)](#tela-de-controle-app)
   
## Sobre o Projeto
Seek Mush é um aplicativo React Native dedicado à identificação de espécies de fungos por meio de fotografias tiradas com o celular. O aplicativo utiliza tecnologias como Visual Studio Code, Android Studio, Firebase e React Native para proporcionar uma experiência eficiente e interativa aos usuários apaixonados por micologia.

## Tecnologias Utilizadas
- **React Native**: Framework JavaScript para desenvolvimento móvel.
- **Visual Studio Code**: Ambiente de desenvolvimento integrado (IDE) utilizado para escrever e depurar código.
- **Android Studio**: IDE para desenvolvimento Android, utilizado para compilar e empacotar o aplicativo.
- **Firebase**: Plataforma de desenvolvimento móvel do Google, usada para autenticação, armazenamento de dados em tempo real e notificações.
- **Inteligência Artificial de Reconhecimento de Imagens**: Em desenvolvimento futuro, será incorporada uma IA para identificar espécies de cogumelos com base em fotos capturadas pelos usuários.

## Testando o Aplicativo
Você poderá instalar o aplicativo Seek Mush no seu dispositivo Android utilizando o arquivo APK gerado quando o aplicativo estiver concluído.

## Tela de Registro (RegisterScreen)

1. **Registro de Usuário:**
   - Os usuários podem inserir um nome de usuário, endereço de e-mail e senha para criar uma conta no aplicativo.
   - É realizado um controle de validação para garantir que todos os campos obrigatórios sejam preenchidos.

2. **Aceitação de Termos:**
   - Antes de concluir o registro, os usuários são solicitados a aceitar os Termos de Uso e a Política de Privacidade do aplicativo.
   - Os usuários podem visualizar os termos clicando nos links fornecidos na tela.

3. **Privacidade e Segurança:**
   - A tela destaca a importância da privacidade e informa os usuários sobre como suas informações serão coletadas, usadas e protegidas.
   - As senhas são tratadas com segurança, e os usuários podem optar por mostrar ou ocultar a senha durante a entrada.

4. **Feedback Visual:**
   - Quando as senhas digitadas não correspondem, uma mensagem de erro é exibida para alertar os usuários.
   - A tela utiliza animações visuais suaves para uma experiência de usuário agradável.
   - A tela utiliza ícones interativos para mostrar/ocultar senhas, proporcionando maior controle ao usuário.
  
5. ### Navegação:
   - Após o registro bem-sucedido, os usuários são redirecionados para a tela inicial (`Inicial`) do aplicativo.

## Tela de Login (LoginScreen)

1. **Estrutura do Componente**
   - O componente é funcional e utiliza o estado (`useState`) para gerenciar as informações de e-mail, senha e mensagens de erro.
   - As animações de entrada (`fadeInLeft` e `fadeInUp`) proporcionam uma transição suave à medida que a tela é exibida.
  
2. **Autenticação de Usuário:**
   - A função `signInWithEmailAndPassword` do Firebase é utilizada para autenticar o usuário com o e-mail e senha fornecidos.

3.  **Recuperação do Nome de Usuário:**
   - Após o login bem-sucedido, o nome de usuário associado ao UID do usuário é recuperado utilizando a função `getNomeUsuarioByUid`.

4.  **Feedback ao Usuário:**
   - Mensagens de erro são exibidas caso ocorra algum problema durante o login, como credenciais inválidas.

5.  **Integração com Navegação**
   - Um botão "Cadastre-se aqui" redireciona os usuários para a tela de registro (`Register`) caso ainda não tenham uma conta.
     
## Tela de Controle (App)

1. **Estrutura do Componente**
- O componente `HomeScreen` é responsável por exibir a imagem do logo, uma mensagem de boas-vindas e um botão para acessar a tela de login.

2.  **Logo:**
  - Uma imagem animada (`zoomIn`) do logo do aplicativo (`mush.png`) é exibida no topo da tela.
    
3. **Botão de Acesso:**
  - Um botão "Acessar" permite que os usuários naveguem para a tela de login.

4. **Navegação**
- O componente `HomeScreen` está integrado a uma navegação por pilha usando o React Navigation.
- O botão de acesso (`TouchableOpacity`) aciona a transição para a tela de login (`Login`).

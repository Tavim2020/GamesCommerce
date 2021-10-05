Desafio ReactJs/React Native
O desafio consiste em construir a interface de um ecommerce de games utilizando ReactJs ou React Native.

Requisitos

·  Os produtos devem ser renderizados dinamicamente através do products.json anexado, assets.zip anexados no e-mail.
·  Os valores exibidos no checkout (frete, subtotal e total) devem ser calculados dinamicamente
·  O usuário poderá adicionar e remover produtos do carrinho
·  O usuário poderá ordenar os produtos por preço, popularidade (score) e ordem alfabética.
·  A cada produto adicionado, deve-se somar R$ 10,00 ao frete.
·  O frete é grátis para compras acima de R$ 250,00.

Observação:
·  Caso a aplicação seja desenvolvida em React Native, será obrigatório a utilização de expo e deve ser gerado o APK e adicionado do repositório.

O que iremos avaliar

Levaremos em conta os seguintes critérios:

·  Cumprimento dos requisitos
·  Qualidade do layout e fluidez da UX
·  Organização do código e boas práticas
·  Domínio das linguagens, bibliotecas e ferramentas utilizadas
·  Organização dos commits
·  Escrita e cobertura de testes
·  Gerenciamento de estado

Sobre a entrega

O prazo para entrega do
projeto é para dia 06/10/2021 às 23:59h.



Para inicializar o projeto ao baixar a pasta com os arquivos
utilize os comandos:
### npm install 
Para baixar as dependências do projeto.

### npm run server
Para inicializar o servidor para rendenizar os games via server.

### npm start
Para inicializar o projeto que será rodado no http://localhost:3000


### FireBase
Caso queira fazer login utilizando firebase, basta descomentar na pasta services todo o código e após descomentar criar na raiz do projeto um arquivo .env com as credenciais do firebase para authenticacão.

Variáveis ambientes necessárias para firebase no arquivo .env:
REACT_APP_API_KEY="SUAS CREDENCIAIS"
REACT_APP_AUTH_DOMAIN="SUAS CREDENCIAIS"
REACT_APP_PROJECT_ID="SUAS CREDENCIAIS"
REACT_APP_STORAGE_BUCKET="SUAS CREDENCIAIS"
REACT_APP_MESSAGING_SENDER_ID="SUAS CREDENCIAIS"
REACT_APP_APP_ID="SUAS CREDENCIAIS"

Seguindo o processo para login com firebase, ir na pasta ButtonGoogle  que fica na pasta components e descomentar as seguintes linhas:

- 5;
-11;
-13;
-16;
-21~36;
-48;


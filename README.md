# freefirejs
Um módulo para interagir com a API do jogo [Garena Free Fire](https://play.google.com/store/apps/details?id=com.dts.freefireth&hl=pt).

## 👨‍💻 Tecnologias
*Esse projeto usa as seguintes tecnologias:*
- [Node.js](https://nodejs.org/en/)
- [Needle](https://github.com/tomas/needle)

## ⬇️ Instalação
```
npm install freefirejs
```
*ou*
```
yarn add freefirejs
```
## 🔥 Uso
*Pegando a versão atual do jogo:*
```javascript
const freefire = require("freefirejs");

freefire.GetVersion.then((response)=>{
    let version = response.currentVersion;
    console.log(version);
});
```

*Checando se existe uma nova versão disponível:*
```javascript
const freefire = require("freefirejs");

freefire.GetVersion.then((response)=>{
    if(response.newVersionAvailable == true){
        console.log(`Nova versão disponível: ${response.newVersion}`);
    }else{
        console.log("Sem versões novas disponíveis :(");
    }
});
```

*Checando se o servidor está aberto:*
```javascript
const freefire = require("freefirejs");

freefire.GetServerInfo("BR","pt-br","1.68.1").then((response)=>{
    if(response.serverIsOpen == true){
        console.log("O servidor está aberto!");
    }else{
        console.log("O servidor está em manutenção :(");
    }
});
```
## 👨‍💼 Funções

### `GetVersion`:
#### Retorna um objeto com as seguintes propriedades:
- `currentVersion`: Retorna a versão atual do jogo.
- `newVersionAvailable`: Diz se existe nova versão do jogo disponível, diz `true` para sim e `false` para não.
- `newVersion`: Retorna a nova versão do jogo, se a propriedade `newVersionAvailable` indicar `true`.
### `GetServerInfo(server, lang, version)`:
#### Retorna um objeto com as seguintes propriedades:
- `serverIsOpen`: Diz se o servidor do jogo está aberto, retorna `true` para sim e `false` para não.
- `patchnotes_url`: Retorna a url das notas de atualização do jogo.
- `billboard_msg`: Retorna a mensagem de manutenção do jogo.
- `currentVersion`: Retorna a versão atual do jogo.
### `redeemCode({token,code}):`
#### Retorna um objeto com as seguintes propriedades:
- `codeIsValid`: Diz se o código de resgate é válido.
- `success`: Diz se o código foi resgatado.
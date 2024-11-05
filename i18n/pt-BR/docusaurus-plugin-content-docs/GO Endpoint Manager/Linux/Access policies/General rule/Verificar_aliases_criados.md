Ao criar uma **Nova regra geral**, a aba **Alias** permite a criação de aliases (nomes alternativos para comandos) através do GO Endpoint Manager para Linux. Você pode criar atalhos para gerenciar os comandos mais usados, agilizando a utilização do terminal. 

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra geral** para criar uma política global.
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
	* **Nome da política:**escolha um nome que seja facilmente identificável.
	* **Ativo:** se a opção**Sim** está selecionada, a política é considerada nos dispositivos alvo.
	* **Diretriz:**selecione um tipo de política.
	* **Permitir ou bloquear:**defina como **Permitir.**
	* **Texto da regra:**preencha com handler\="{/* usr */}{/* bin */}{/* secpack */}\-trec\-triggered"
5. Vá para a aba **Alias.**CuidadoAtenção no preenchimento do alias para comandos que podem afetar a utilização do sistema.
6. Preencha os campos:
	* **Alias:**preencha com o caminho completo do comando que deseja usar.
	* **Comando:**preencha com o caminho completo do comando que deseja substituir.
7. Clique em **Salvar.**

InfoNo terminal do Linux, use **which \[digite o comando desejado]** para descobrir o caminho do binário.  




---

## Verificar aliases criados

1. Acesse o terminal do Linux.
2. Digite o comando:


```
cat {/* etc */}{/* senhasegura */}{/* aliases */}
```
  


  


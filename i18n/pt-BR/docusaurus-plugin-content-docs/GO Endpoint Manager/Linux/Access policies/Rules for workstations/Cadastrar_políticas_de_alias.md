# Cadastrar políticas de alias

Ao criar uma **Nova regra para workstation**, a aba **Alias** permite a criação de aliases (nomes alternativos para comandos) através do GO Endpoint Manager para Linux. Você pode criar atalhos para gerenciar os comandos mais usados, agilizando a utilização do terminal. 

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra para workstation.**
4. No formulário **Cadastro de regras por workstation**, na aba **Principal**, preencha os campos:
    * **Nome da política:** escolha um nome que seja facilmente identificável.
    * **Ativo:** se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
    * **Diretriz:** selecione um tipo de política. 
    * **Permitir ou bloquear:** defina como **Permitir.**
    * **Texto da regra:** preencha com handler="{/* usr */}{/* bin */}{/* secpack */}-trec-triggered"
5. Clique em **Adicionar.**
6. Clique na aba **Alias.**
    :::(Warning) (Cuidado)
    Atenção no preenchimento do alias para comandos que podem afetar a utilização do sistema.
    :::
5. Preencha os campos: 
    * **Alias:** preencha com o caminho completo do comando que deseja usar.
    * **Comando:** preencha com o caminho completo do comando que deseja substituir.
6. Clique na aba **Workstations.**
7. Selecione **Workstations+.**
8. Marque as workstations que deseja adicionar na segregação.
9. Clique em **Adicionar.**
10. Clique em **Salvar.**

:::(Info) (Info)
No terminal do Linux, use **which [digite o comando desejado]** para descobrir o caminho do binário. 
:::

* * *
## Verificar alias criados
1. Acesse o terminal do Linux.
2. Digite o comando: 

```shell
cat {/* etc */}{/* senhasegura */}{/* aliases */}
```
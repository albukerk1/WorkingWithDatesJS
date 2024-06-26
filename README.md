# WorkingWithDatesJS
Atividade prática de Front-End para treinar manipulação de datas em JavaScript.

**Manipulação de Datas**  
Este é um programa simples desenvolvido em HTML, CSS e JavaScript que permite realizar algumas operações de manipulação de datas, incluindo:  

1. Exibir a maior data entre duas datas fornecidas.  
2. Calcular o intervalo entre duas datas fornecidas.  
3. Exibir a data atual no formato dia/mês/ano.  

**Como Usar**  
Para utilizar o programa, basta abrir o arquivo index.html em um navegador da web. Você será apresentado com uma interface que permite inserir duas datas e executar as operações mencionadas acima.

**Exibir Maior Data**  
Esta operação permite que você insira duas datas e exibe a maior delas.

**Exibir Intervalo**  
Esta operação permite que você insira duas datas e exibe o intervalo em dias entre elas.

**Exibir Data Atual**  
Esta operação exibe a data atual no formato dia/mês/ano.

**Arquivos do Projeto**

**index.html:** Contém a estrutura HTML da página, incluindo os campos de entrada para as datas e os botões para executar as operações.  

**styles.css:** Contém as regras de estilo CSS que definem a aparência da página.  

**script.js:** Contém o código JavaScript responsável por implementar as operações de manipulação de datas.  

**Funções Disponíveis**

1. maiorData(date1, date2)  
Esta função recebe dois parâmetros do tipo Date e retorna o maior deles.

2. calcularIntervalo(date1, date2)  
Esta função recebe dois parâmetros do tipo Date e calcula o intervalo entre as datas. O primeiro parâmetro sempre deve ser mais antigo que o segundo, por isso a função começa verificando se date1 é maior que date2, trocando as datas ou não. O intervalo é calculado em dias e é retornado como uma string.  

6. dataAtual()  
Essa função retorna a data atual no formato: dia/mês/ano.  

**Desenvolvimento**

O programa foi desenvolvido utilizando HTML, CSS e JavaScript puros, sem a necessidade de dependências externas. Ele utiliza a API de Data e Hora do JavaScript para realizar as operações de manipulação de datas.

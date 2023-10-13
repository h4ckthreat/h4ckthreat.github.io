---
title: Portas Lógicas
date: 2023-10-13 14:30:00 +0800
categories: [h4ckthreat, Eletrônica Digital]
tags: [Portas Lógicas, Eletrônica Digital] # TAG names should always be lowercase
image: /assets/img/posts/portas-logicas.jpg
---

Quando estamos estudando sobre eletrônica, nos deparamos em certo momento com o tema Portas Lógicas. Este arigo tratará de forma definitiva e de fácil entendimento, uma abordagem sobre todos os tipos de portas lógicas e como elas funcionam. Por fim, deixarei uma ferramenta muito utilizada na hora de trabalhar com eletrônica digital e portas lógicas, que com certeza te ajudará tanto nos seus estudos, quanto no ambiente profissional.

# História
O uso de portas lógicas através da eletrônica digital teve início em meados do século 20, quando o engenheiro Claude Shannon utilizou um conceito criado pelo matemático britânico George Boole, utilizando sinais discretizados para solucionar problemas envolvendo a telefonia naquela época. 

Desde então, a tecnologia empregada nestes circuitos e também a velocidade na oscilação desses sinais tiveram uma grande evolução, permitindo a criação de muitas tecnologias que utilizamos atualmente.  

# Álgebra Booleana
Como citado anteriormente, o conceito de Boole é bem empregado na eletrônica digital, principalmente para determinar a relação de entradas e saídas mediante as combinações de portas utilizadas. 

Relações de saída e entrada que são melhor explicadas em diversos cursos de eletrônica online. Essas expressões provenientes dessas relações são denominadas expressões booleanas, que permitem analisar de forma mais simples os circuitos digitais. Neste sistema, os sinais são definidos como 0 e 1.

# Sistemas Digitais
Pode-se dizer que todo sistema que utilize, interprete e transmita sinais discretos são sistemas digitais.

Sinais discretos são pulsos elétricos que são representados por 0 e 1 por esse tipo de sistema, também conhecido como sistema binário, como exemplo temos nossos computadores e celulares. 

# Tabela Verdade das Portas Lógicas
A tabela verdade é uma ferramenta utilizada em um circuito lógico para definir como é esperada uma saída de acordo com os sinais de entrada desse sistema, relacionando elas com os tipos e conjunto de portas utilizadas no circuito.

Inclusive, especialistas que consertam telefones e que dão aula em curso de manutenção de celulares, tendem a utilizar bastante essa ferramenta para ensinar seus alunos as saídas lógicas dos aparelhos. 

# Tipos de Portas Lógicas 
Nesta etapa do artigo tratarei todas as informações relevantes para se ter sobre os tipos de portas lógicas existentes que basicamente são circuitos integrados que executam uma função. 

Em todas as portas abordadas mostrarei o símbolo utilizado para representá-la, sua tabela verdade e um exemplo dos pinos de um componente o qual podemos encontrar esta lógica.  

# Porta NOT
A porta lógica NOT possui o papel de inverter o nível do sinal de entrada, sendo assim se o sinal de entrada é alto (1), a saída é baixa (0) e vice-versa. O círculo no símbolo representa que o sinal terá seu valor invertido, esta simbologia é utilizada em outras portas como veremos adiante.

![NOT](/assets/img/posts//not1.png)
![NOT2](/assets/img/posts/not2.gif)

# Porta AND
A porta AND possui uma lógica que permite que o sinal de saída seja alto, apenas se os dois sinais de entrada (A e B) forem altos, caso contrário o sinal de saída desta porta lógica é baixo para todas as outras possibilidades. 

![AND](/assets/img/posts/and1.png)
![AND2](/assets/img/posts/and2.gif)

# Porta OR 
Diferente da porta vista no caso anterior, a porta OR emite um sinal de saída alto se qualquer uma das entradas tiverem um sinal de valor alto ou também se ambas as entradas possuírem valor em estado alto. 

![OR](/assets/img/posts/or1.png)
![OR2](/assets/img/posts/or2.gif)

# Porta NAND 
A porta NAND funciona exatamente como a porta AND, porém com a diferença que a sua saída possui uma lógica inversora, proporcionando uma lógica contrária no seu sinal de saída. 

Neste caso, somente quando os dois sinais de entrada (A e B) forem baixos, o sinal de saída terá um valor lógico alto. Em todos os demais casos o sinal de saída tem nível lógico baixo.

![NAND](/assets/img/posts/nand1.png)
![NAND2](/assets/img/posts/nand2.gif)

# Porta NOR 
De maneira similar à porta anterior, a porta lógica NOR opera exatamente como uma porta do tipo OR, porém com o sinal de saída invertido, fazendo com que a saída obtenha um valor alto, apenas se ambas as entradas de sinal tiverem nível lógico baixo.

Em qualquer outra ocasião, como pode-se observar na tabela verdade, o sinal resultante na saída possui nível lógico baixo.

![NOR](/assets/img/posts/nor1.png)
![NOR2](/assets/img/posts/nor2.gif)

# Porta XOR
A porta XOR, também conhecida como OU exclusivo, é uma porta que possui uma lógica especial. O nível lógico do sinal de saída é alto apenas se o nível lógico de seus sinais de entrada (A e B), forem diferentes entre si, caso contrário o sinal de saída tem nível baixo.

![XOR](/assets/img/posts/xor1.png)
![XOR2](/assets/img/posts/xor2.gif)

# Porta XNOR 
Por fim, para a porta XNOR temos um conceito bem similar ao que já vimos em alguns casos neste artigo. Ela funciona exatamente como a porta XOR, porém com o sinal de saída invertido, também representado pelo círculo no desenho como vemos na figura abaixo. 

Neste caso, o sinal lógico de saída terá um nível lógico alto apenas se os dois sinais de entrada (A e B) forem iguais, caso contrário, o sinal de saída terá nível lógico baixo.

![XNOR](/assets/img/posts/xnor1.png)
![XNOR2](/assets/img/posts/xnor2.gif)

# Associação de Portas Lógicas
A associação de portas lógicas, é comum quando se fala em projetos eletrônicos. Projetos mais complexos demandam uma combinação de lógicas que promovem a operação que desejamos.

Para se analisar uma combinação de portas lógicas uma das maneiras mais fáceis é buscar a expressão booleana que representa esse conjunto e a partir desse momento preencher sua tabela verdade para a variação de níveis para todas as entradas possíveis. 

É importante ressaltar que para cada entrada a mais em nosso sistema, a quantidade de alternativas é acrescida por 2n, ou seja, um conjunto com 3 entradas, tem 8 combinações de sinal de entrada.  

# Simulador (LogiSIM)
Uma dica preciosa, se você chegou até esta etapa de nosso artigo, é o software para a simulação de circuitos digitais. O LOGISIM, é um software gratuito que permite você projetar e fazer simulações dos seus circuitos lógicos digitais.

Ele é uma ferramenta bem completa e intuitiva, que possibilita a execução de lógicas simples e complexas para um profissional ou estudante que esteja a utilizando.

![CONJUNTO](/assets/img/posts/conjunto.gif)

# Considerações Finais
Por fim, ressaltando todos os tópicos abordados nesse artigo, podemos considerar que você tem o agora o conhecimento sobre todas as portas lógicas existentes em eletrônica digital. 

Além deste conhecimento você também foi apresentado a uma das melhores ferramentas utilizadas por profissionais no setor de eletrônica, o LogiSIM, com isso você está preparado para projetar e simular qualquer lógica digital.

<p> Baixar LogiSIM: <a href="http://www.cburch.com/logisim/index.html"><i>LogiSIM</i></a></p>




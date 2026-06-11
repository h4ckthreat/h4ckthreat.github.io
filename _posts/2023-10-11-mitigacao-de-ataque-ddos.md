---
title: Mitigação de ataque DDoS
date: 2023-10-11 14:30:00 +0800
categories: [h4ckthreat, Privacidade Digital]
tags: [Privacidade Digital, DDoS] # TAG names should always be lowercase
image: /assets/img/posts/ddos.jpg
---

<p align="justify"> O termo mitigação de ataques DDoS ou Mitigação de DDoS se refere ao processo de proteger o alvo de ataques de negação de serviço distribuído (DDoS). Ataques DDoS estão evoluindo constantemente como é da natureza da tecnologia, e também, a motivação dos atacantes também está mudando. Usualmente, os ataques são realizados e causam as vítimas perdas econômicas enormes. Para mitigar os ataques DDoS, especialmente quando estes ocorrem em grande volume, é preciso contar com uma inteligência e infraestrutura de segurança robusta. O Monitoramento Contínuo é essencial para que a equipe de resposta a incidentes possa reagir rapidamente frente a qualquer ataque de DDoS. Quando se conta com uma infraestrutura de monitoramento, ganha-se muito em inteligência de segurança e resposta a incidentes. Ao monitoramento contínuo, deve-se aliar firewalls bem gerenciados, soluções endpoint e IPS. É o conjunto da infraestrutura de segurança que permitirá a mitigação real dessas ameaças. Um típico processo de mitigação pode ser definido em quatro estágios.</p>

# Estágios:
<p align="justify"> <strong> Detecção: </strong> Fase caracterizada pela identificação de desvios de tráfego que sugerem a formação de um ataque DDoS. A efetividade é medida pela habilidade de reconhecer o ataque o mais rápido possível, com detecção instantânea sendo o melhor caso, existe um campo científico vasto nesta área em busca de formas eficientes de realizar a detecção, visto que a mesma é difícil ou até predição da mesma.</p>

<p align="justify"> <strong> Desvio: </strong> Nesta fase o tráfego é redirecionado do alvo, tanto por ser filtrado ou totalmente descartado.</p>

<p align="justify"> <strong> Filtragem: </strong> Na fase de filtragem o tráfego DDoS é separado, usualmente identificando padrões que são instantaneamente distintos entre tráfego legítimo (i.e., humanos, chamadas de API e mecanismos de pesquisa) e visitantes maliciosos. Responsividade é uma função de ser possível bloquear um ataque sem interferir na experiência dos usuários. O ideal é a solução ser transparente aos visitantes.</p>

<p align="justify"> <strong> Análise: </strong> Na última fase de análise os registros de segurança são analisados para colher informações sobre o ataque, tanto para identificar os atacantes quanto para aprimorar a resiliência. A efetividade do processo depende da existência de registros de segurança detalhados que possam oferecer maior visibilidade do tráfego do ataque.</p>

# Técnicas de desvio (Roteamento DNS vs BGP):
<p align="justify"> Os processos descritos abaixo dependem nos mecanismos de redirecionamento que consigam desviar o tráfego malicioso do alvo. Na maioria dos casos, uma solução para mitigação irá usar ou roteamento DNS (Domain Name System) ou BGP (Border Gateway Protocol) para desviar o tráfego malicioso. Essa escolha irá definir suas funcionalidades e o tipo de segurança que pode ser ofertada.</p>

<p align="justify"><strong> Roteamento DNS (ou redirecionamento DNS): </strong> é um método muito usado por serviços de mitigação DDoS: O Roteamento DNS é ativado trocando o nome CNAME e o Registro A, para que aponte o IP(s) do provedor de mitigação. Após isso, DNS inicialmente roteia todas as requisições HTTP/S para seu provedor de mitigação, onde as requisições maliciosas são descartadas e as legítimas são encaminhadas. O redirecionamento DNS somente é efetivo em mitigação de ataques na camada de aplicação. No entanto, tem o benefício de mascarar o endereço de IP do domínio. Isso oferece alguma proteção contra ataques diretamente na camada IP.</p>

<p align="justify"> <strong> Roteamento BGP: </strong> é uma solução ativada manualmente. Atua na mitigação de ataques DDoS direcionados ao endereço de IP do host na camada de rede: Ativado por uma anúncio BGP, ele desvia todos os pacotes da camada de rede do endereço de IP(s) para o servidor de mitigação. A partir disso, os pacotes maliciosos são filtrados e o restante são encaminhados para o host por GRE tunnel. O roteamento BGP é o método de desvio mais compreensivo. É efetivo por todos os protocolos, oferecendo proteção de todos os tipos de ataques da camada de aplicação e rede. Além do mais ele se beneficia por ser ativado manualmente. Isso pode reduzir o tempo de resposta e causar algum tipo de vazamento de tráfico do ataque.</p>

<p align="justify"> Decidir entre DNS e BGP baseado na solução geralmente converge para a questão de qual o tipo de ataques estão sendo mais usuais. Da perspectiva de segurança, é considerada boa prática usar roteamento DNS e BGP em conjunto, o primeiro para proteção contra ataques na camada de aplicação e o outro para defender contra ataques direcionados a camada IP e outras camadas. Por isso, hoje, é comum ter ambos sendo oferecidos pelo mesmo provedor de mitigação.</p>

# Escolhendo o provedor de mitigação:
<p align="justify"> Além do método de desvio de tráfego, existem vários outros aspectos que deve ser considerado para escolher um provedor de mitigação, eles incluem:</p>

<p align="justify"> <strong>Capacidade da rede: </strong> é um grande meio de teste de serviços de mitigação DDoS. É medido em Gbps (gigabits por segundo) ou Tbps (terabits por segundo) e reflete em toda a escalabilidade disponível durante o ataque. Por exemplo, uma rede de 1 Tbps teoricamente bloqueia o mesmo tamanho de ataque de tráfego, menos a banda requerida para manter as operações regulares. A maioria dos serviços de mitigação baseados em cloud oferecem redes multi-Tbps, muito além da necessidade dos clientes. Serviços de mitigação On-premise por outro lado, são limitados por padrão, tanto pelo tamanho da rede do cliente quanto da capacidade do hardware.</p>

<p align="justify"> <strong>Capacidade de processamento: </strong> Em adição a capacidade na taxa de transferência, deve ser posto em consideração as capacidades de processamento na solução de mitigação. Eles são representados nas taxas de encaminhamento, medida em Mpps (milhões de pacotes por segundo). Hoje não é incomum para ataques atingirem 50 Mpps ou com alguns chegando, no máximo a 200–300 mpps. Um ataque excedendo o poder de processamento do provedor de mitigação irá derrubar as suas defesas, por isso é importante conhecer as suas limitações.</p>

<p align="justify"> <strong>Tempo de mitigação:</strong> Uma vez que o ataque foi detectado, o tempo de mitigação é crítico. A maioria dos ataques podem derrubar o alvo em cerca de minutos e o processo de restauração pode tomar horas. O impacto negativo nesse tempo de inatividade pode potencialmente afetar sistemas críticos. Provendo detecção preventiva, as soluções Always-on tem uma vantagem. Elas oferecem um serviço de mitigação quase instantânea, protegendo das primeiras ondas de qualquer ataque. Mas nem todas essas soluções oferecem esse tipo de resposta. É por isso que tempo de mitigação é importante na hora de avaliar qual serviço de proteção a DDoS escolher, além de testes nas fases de trial do serviço.</p>

<p align="justify"> <strong>Técnicas de suavização da camada de rede:</strong> Vários provedores de serviços têm diferentes métodos de se proteger de ataques na camada de rede, alguns deles são mais preferíveis que outros:</p>

<p align="justify"> <strong>Null routing (ou Roteamento nulo ou blackholing): </strong> direciona todo tráfego para um endereço IP não existente. A desvantagem é a alta taxa de falso positivos tanto descartando visitantes maliciosos quanto visitantes legítimos.</p>

<p align="justify"> <strong> Sinkholing:</strong> esse método desvia tráfego malicioso do alvo, usualmente usando uma lista de endereços IP maliciosos para identificar tráfego DDoS. Como o Null Routing, o sinkholing ainda é vulnerável a falso positivos como botnet IP’s que podem ser usados por usuários legítimos. Além do mais sinkholing é inefetivo contra IP spoofing, um recurso usualmente utilizado em ataques à camada de rede.</p>

<p align="justify"> <strong> Scrubbing:</strong> um aprimoramento ao sinkholing, o scrubing roteia todo tráfego de entrada por um serviço seguro. Pacotes de rede maliciosos são identificados baseados no seu conteúdo do cabeçalho, tamanho, tipo, ponto de origem e etc. O desafio é utilizar o scrubbing a uma taxa que não cause lentidão ou impacte em usuários legítimos.</p>

<p align="justify"> <strong> Técnicas de suavização da camada de aplicação:</strong> sendo mais silenciosos que outras partes da camada de rede, os ataques de DDoS da cama de aplicação tipicamente imitam o tráfego de usuários legítimos para evadir medidas de segurança. Para pará-los, deve-se distinguir os perfis de tráfego de entrada HTTP/S de bots DDoS e de visitantes legítimos. Durante os trials dos serviços de mitigação, testar as defesas da camada de aplicação é essencial. Uma filtragem efetiva usa uma inspeção entre o cabeçalho HTTP/S e os padrões comportamentais, em adição a informação do IP e do Autonomous System Number (ASN). É igualmente importante verificar que o serviço não utilizem demasiadamente CAPTCHA’s, delay pages e outros métodos de filtragem inefetivos.</p>

<p align="justify"> <strong> Proteção de recursos secundários:</strong> a infraestrutura da rede pode conter inúmeros servidores e outros recursos de TI. Pode-se incluir servidores web, servidores DNS, servidores de email, servidores de FTP entre outros. No cenário de ataque DDoS, eles podem também ser alvos do atacante, causando tempo de inatividade. Avaliar o risco de toda a infraestrutura de rede e determinar quais componentes devem ser protegidos é uma estratégia válida. Na maior parte dos casos de ataque, o servidor DNS é o alvo mais frequente, logo pôr esforços na segurança desse componente é imprescindível.</p>

<p align="justify"> <strong> Valor e SLA:</strong> definir um preço para serviços de mitigação podem variar de taxas mensais ou pagamentos durante o serviço é necessário. O segundo é baseado no acúmulo de banda dos ataques (e.g, 50 Gbps por mês) ou o número de horas que estava sob ataque (e.g, 12 horas por mês). Um ataque DDoS pode durar horas ou dias (e até semanas), o custo pode aumentar exponencialmente. Por isso existem os acordos de taxas mensais para acordos de longo prazo. O Acordo de nível de serviço do provedor de mitigação (SLA) é outro aspecto importante a se considerar, até mais que o valor, pois determina a eficiência do serviço e possivelmente a crebilidade do sistema. Algumas métricas a se considerar:</p>

> Nível de funcionamento — Geralmente o nível de funcionamento é definido como all-times, abaixo disso é considerado obsoleto.

> Níveis de proteção: conforme descrito aqui, o SLA do provedor deve definir os tipos de ataque, tamanho e duração que ele cobre.

> Nível de suporte do serviço — O SLA deve conter o tempo de resposta para suporte a problemas do provedor. Isso é usualmente definido baseado nos níveis de problemas de segurança enfrentados.

<p align="justify"> Existem diversos tipos de tecnologias, serviços e provedores compreendendo o mercado de mitigação DDoS. As Companhias especialistas focadas em segurança provêem soluções tipicamente mais avançadas com experts dedicados e segurança contínua com monitoramento de novos vetores de ataque. Já as generalistas, como ISP’s e provedores de host oferecem soluções a mitigação básicas a ataques como um adicional aos seus serviços principais, com objetivo de aumentar suas vendas.

<p align="justify"> Serviços de mitigação que são oferecidos por generalistas podem ser adequados para ataques simples, porém, se é crítico que a aplicação tenha seu funcionamento garantido, o provedor especialista é o melhor e mais recomendado para diminuir os riscos de comprometimento dos serviços da mesma.</p>

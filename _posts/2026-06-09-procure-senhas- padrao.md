---
title: Procure senhas padrão
date: 2026-06-09 19:30:00 +0800
categories: [Offensive Security, Notas]
tags: [Hacking, Default Passwords] # TAG names should always be lowercase
image:  /assets/img/posts/password.jpg
toc: true
---

## Procure senhas padrão:

<p align="justify"> <p align="justify"> Você está procurando uma senha padrão? Pare de procurar. Há um lugar — um balcão único — para senhas padrão. Basta instalá-lo no Github e pronto. </p>
 </p>
## Instalação:

 <p align="justify"> <p align="justify"> Install defaultcreds-cheat-sheet. </p>
 </p>
 
 ```shell
creds search tomcat
``` 
## Uso:

<p align="justify"> Exemplo de busca por senha padrão para tomcat. </p>

```shell
creds search tomcat
```

<p align="justify"> <p align="justify"> Saída: </p>

```shell
+----------------------------------+------------+------------+
| Product                          |  username  |  password  |
+----------------------------------+------------+------------+
| apache tomcat (web)              |   tomcat   |   tomcat   |
| apache tomcat (web)              |   admin    |   admin    |
...
+----------------------------------+------------+------------+
```


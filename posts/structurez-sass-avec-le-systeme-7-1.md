---
title: "Structurez Sass avec le système 7-1"
metaDesc: "Découvrez comment structurer Sass avec le système 7-1. Cette architecture permet de mieux organiser vos fichiers scss"
imgUrl: /media/structurez-sass-avec-le-systeme-7-1.jpg
tag: ["Sass"]
author: "Louis-Étienne Girard"
date: "2022-09-29"
---

Sass est un préprocesseur css très pratique pour écrire du code **structuré, propre et maintenable**.
On peut réutiliser la même couleur grâce aux variables, récupérer des styles complets à l'aide des mixins ou encore, utilisez la puissance des fonctions Sass. Bref, Sass c'est le paradis pour tout développeur qui le découvre pour la première fois. Cependant, les fichiers Sass finissent souvent par être long et lorsque l'on souhaite modifier le style d'un élément, on se retrouve à faire défiler les lignes de code une par une pour arriver à destination.
Structurer son code devient donc primordial, mais encore faut-il savoir comment le faire. Aujourd'hui, découvrons ensemble **le système 7-1**.

## Présentation du système 7-1

Le système 7-1 est une architecture pour ranger, classifier, organiser notre code Sass.

> Mais pourquoi on appelle ça le système 7-1 ?

Tout simplement pour ce qu'on retrouve **7 dossiers** où nous allons ranger notre code et **1 fichier** scss qui va regrouper tout le code de notre fichier.
Voyons concrètement à quoi ressemble cette structure.

```
sass/
|
|– base/
|
|– utils/
|
|– layout/
|
|– components/
|
|– pages/
|
|– themes/
|
|– vendors/
|
 – main.scss
```

Comme on peut le voir, nous avons un dossier `sass/` qui regroupe 7 dossiers (on reviendra tout à l'heure sur la fonction de chaque dossier) et un fichier `main.scss`.

## L'organisation des dossiers Sass

Voyons maintenant en détails l'utilité de chaque dossier.

### base/

C'est ici que l'on va mettre les fichiers `.scss` qui servent de base (comme son nom l'indique) à l'ensemble du style du texte. On peut y trouver un fichier `_normalize.scss` pour le style par défaut des éléments HTML ou encore un fichier pour la typo. de notre application web avec les fonts utilisées.

### utils/

Dans ce dossier, on retrouvera toutes les variables, mixins et fonctions que nous utilisons dans nos fichiers Sass. On peut créer un fichier `_variables.scss`, un autre `_mixins.scss`, et un dernier `_functions.scss` pour exemple.

### layouts/

C'est dans ce répertoire, que vous rangerez les éléments qui sont réutilisables tels que le header, le footer, un formulaire…

### components/

Vous utiliserez ce dossier pour les éléments réutilisables et plus petits que les layouts comme les boutons, les inputs, les icônes…

### pages/

C'est dans ce dossier que l'on va stocker le style utile à chaque page et qui n'est pas utilisé autre part sur le site. On pourra avoir un fichier `_home.scss`, `_blog.scss`...

### themes/

Dans ce répertoire, on pourra ajouter des fichiers thématiques. Par exemple un thème pour la partie utilisateur et un autre pour la partie admin.

### vendors/

Ici, vous allez pouvoir inclure des ressources tiers comme un fichier Bootstrap ou autre.

## Mettre en place la structure de Sass avec le système 7-1

Voyons maintenant comment mettre en place le système 7-1 pour structurer SASS.

### Créer les dossiers SASS

Commencez par créer les dossiers Sass pour accueillir l'architecture. Dans le terminal, à l'endroit où vous souhaitez mettre votre architecture SASS.

```
mkdir base utils layouts components pages themes vendors
```

Et voilà, vous avez avec créé la structure de base. Maintenant, vous pouvez ranger vos fichiers scss.

### Nommer les fichiers scss

Comme vous l'avez peut-être remarqué, j'ai ajouté un underscore devant le nom de chaque fichier. Nommer les fichiers .scss comme ceci permet d'indiquer que se sont des partiels, c'est-à-dire qu'ils ont une partie du fichier globale.

### Création du fichier main.scss

Voilà, vous y êtes presque, il vous reste encore à créer le fichier `mains.scss` à la racine de l'architecture du système 7-1.
Maintenant, il va falloir importer tous les fichiers qui se trouvent dans vos dossiers. Pour ce faire, vous allez utiliser le mot clé `@import`. Ajoutez ensuite des guillemets et entrer le chemin du fichier.

```SASS
@import "./base/typography" // importe le fichier _typography.scss
```

Vous n'avez pas besoin de préciser l'underscore et le `.scss`.

## Conclusion

Voilà, maintenant, vous savez comment organiser au mieux vos fichiers Sass grâce au système 7-1. Notez qu'il existe de nombreuses variantes de cette architecture, libre à vous de modifier cette structure en fonction de vos besoins.

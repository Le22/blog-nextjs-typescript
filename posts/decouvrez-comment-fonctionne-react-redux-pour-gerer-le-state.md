---
title: "Découvrez comment fonctionne React Redux pour gérer le state"
metaDesc: "Le state management est un concept important pour une architecture React optimisé. Découvrez comment fonctionne React Redux pour gérer le state de votre application React."
imgUrl: /media/decouvrez-comment-fonctionne-react-redux-pour-gerer-le-state.jpg
tag: ["React", "Redux"]
author: "Louis-Étienne Girard"
date: "2022-10-20"
---

Les states font partie intégrante d'une application react. En effet, on peut utiliser nos states pour gérer l'état d'un composant ou la logique de notre application react. À chaque modification du state, l'affichage est mis à jour permettant d'avoir une application react interactive en fonction des événements de nos composants. Pour gérer l'état de nos composants react, on utilise `useState()`. C'est ce hook qui va nous permettre de gérer **l'état de notre composant**.

Mais dans une application react comprenant plusieurs centaines de composants, il peut être difficile de **gérer les states de manière optimale**. Voyons plus en détail la problématique autour des states en react.

## La problématique du state management des composants react

Il arrive souvent qu'un composant ait besoin d'un state présent dans un autre composant react. La solution pour transmettre les données consiste à **transmettre l'état d'un composant à un autre au travers de `props`**. Seulement, les informations ne peuvent circuler que **du composant parent vers le composant enfant**. Il faut donc bien choisir le composant qui accueillera le state pour qu'il soit accessible à tous les composants l'utilisant.

Heureusement tous les states ne demandent pas à être réutilisés par plusieurs composants. C'est ici qu'on définit les states globaux et les states locaux. **Les states locaux** sont ceux qui ne sont utilisés que dans **un seul composant** ou dans une seule partie de l'application react.
Les states globaux sont, au contraire, utilisés dans de **nombreux composants** de l'application react.
Ceux sont, c'est dernier qui vont nous donner le plus de fil à retordre dans l'architecture de notre application react.

Pour comprendre cela, prenons par exemple un state déterminant si l'utilisateur et connecté ou non (on pourra utiliser un booléen). Ce state peu nous être utile dans l'header de l'application, dans l'affichage ou non d'une section personnalisée en fonction de l'utilisateur ou encore dans l'affichage des routes. Pour utiliser notre state, on peut identifier **le plus proche composant parent commun** pour créer notre state.
Seulement, on se retrouve avec des composants intermédiaires entre le parent et l'enfant qui ne font que **passé le state à travers leur props**. De plus, si un nouveau composant utilise notre state, mais qu'il ne le reçoit pas, il faudrait alors changer l'emplacement de notre state.

Heureusement, il existe des outils permettant de gérer nos states globaux de manière efficace.
Ici, nous allons découvrir le plus connu : **React Redux**.

## Le state management avec redux

React Redux est un **state managers**, c'est-à-dire qu'il va permettre de gérer l'état du state de notre application react.

## Mettre en place une architecture Redux pour gérer le state management de react

Redux à une architecture bien particulière pour gérer le state de votre application react.
Voyons qu'elles ont les différentes parties du **state manager Redux**.

## Créer un state avec Redux

Redux fonctionne avec un seul state global qui comprend l'ensemble des states. Cela rend le state management plus optimisé.
Tout d'abord, nous allons définir l'ensemble de nos states globaux que nous allons regrouper dans **un seul state** que nous allons appeler `initialState`.

```JS
const initialState = {
	firstState: "value",
	secondState: true,
}
```

Maintenant que nous avons défini les states globaux, créons des actions pour Redux.

## Définir les changements grâce aux actions Redux

**Une action Redux** est un objet JS qui décrit le changement d'un state grâce à une propriété `type`. On peut également ajouter une propriété `playload`. Cette propriété permet d'avoir des informations complémentaires.
Les actions Redux sont essentiels pour pouvoir **modifier notre state**.

Créons dès à présent une action Redux.

```JS
const userConnectAction = {
	type: "userConnect",
	playload: { user: "loulou" }
}

// ou avec une fonction (Action Creator)
const userConnectAction((user) => ({
	type: "userConnect",
	playload: { user: user }
}))
```

Nous avons maintenant notre state et nos actions Redux définis. Découvrons comment faire fonctionner tout ça avec le Reducer.

## Modifier votre state Redux en fonction des actions grâce au Reducer

**Le Reducer** est la partie logique de Redux. Il prend en paramètre le state et une action pour rendre un **nouveau state** à la sortie.

Voyons comment cela fonctionne.

```Js
function reducer(state, action) {
	if (action.type === "userConnect") {
		return {
			...state,
			firstState: "newValue"
		}
	}
	return state
}
```

Notre state manager Redux est en place. On a défini le state global, les actions et le Reducer. Il nous faut maintenant assembler tout ça.

## Regrouper toutes les parties de Redux dans le Store

**Le Store** de Redux nous permet d'interagir avec l'ensemble des éléments de notre state manager.

On doit tout d'abord créer le Store en passant en paramètre le Reducer et le state.

```JS
const store = createStore(reducer, initialState)
```

Penser à importer Redux pour pouvoir utiliser le store. Vous trouverez les informations sur [Le site officelle de React Redux](https://react-redux.js.org/).

Pour lire le state, on utilise `store.getState()`.

On a bien évidemment la possibilité de **modifier le state de Redux**.

```JS
useDispatch(userConnect("loulou"))
```

Pour afficher une donnée du state, on utilise le hook `useSelector((state) => state.user)`.

## Connecter votre store Redux à react

Pour pouvoir utiliser le state de Redux et pouvoir interagir avec lui, les composants react doivent avec **accès au store de Redux**. Pour cela, nous allons utiliser **le Provider** de React Redux.

On va encapsuler notre application React et passer en props notre store Redux.

```JSX
import {store} from './store'

<Provider store = {store}>
	<App/>
</Provider>
```

## Conclusion

Voilà, vous avez maintenant les bases du fonctionnement et de **l'architecture de Redux** dans une application React. L'utilisation d'**un state manager** n'est pas obligatoire pour toutes les applications react. Cela dépend de votre besoin et de la complexité de l'architecture de votre projet.

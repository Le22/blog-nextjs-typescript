---
title: "Créer vos formulaires avec React Hook Form"
metaDesc: "Découvrez comment rendre vos formulaires React plus performants et plus propre avec la librairie React Hook Form"
imgUrl: /media/creer_vos_formulaires_avec_react_hook_form.jpg
tag: ["ReactJS"]
author: "Louis-Étienne Girard"
date: "2022-10-13"
---

Éléments majeurs de l'interactivité de l'utilisateur avec votre application web, les formulaires offrent de nombreuses possibilités et nécessaire pour bien des usages. En React, la norme est de **gérer des formulaires** de manière contrôlés. En effet, l'interaction se fait directement lorsque l'utilisateur renseigne une donnée.

Cependant, les formulaires en React finissent par être lourd en logique, en gestion d'états et le rendu se recharge à chaque nouvelle entrée dans le formulaire.

Pour remédier à ces problèmes, je vais vous parler de **la librairie React hook form**.

## Fonctionnement de React hook form

React hook form permet de gérer **les formulaires ReactJS**. La particularité de React hook form réside dans l'utilisation des `ref` ce qui permet de ne pas avoir un re-render à chaque fois que l'utilisateur modifie les données du formulaire, améliorant ainsi les performances de votre application ReactJS. De plus, **la libraire React hook form** est simple à utiliser.

Voyons dès à présent comment gérer les formulaires à l'aide de React hook form.

## Commencer à utiliser react-hook-form

Pour mettre en place la gestion des formulaires React via la librairie react-hook-form, on va commencer par installer le paquet à la racine du projet à l'aide de la commande suivante (pour NPM) : `npm install react-hook-form`

Maintenant que react-hook-form est installé, nous allons pouvoir créer un formulaire qui sera géré par notre librairie.

```JS
function Form() {

return (
	<form>
		<input name="Firstname"/>
		<input type="submit" />
	</form>
)}

export default Form;
```

Voilà, nous avons un formulaire. Celui-ci ne fait pas grand-chose pour le moment donc plongeons dès à présent dans le vif du sujet et utilisons la puissance de react hook form.

Tout d'abord, ajoutons un objet à notre composant qui va récupérer le fameux hook.

```JS
const {} = useForm()
```

Penser également à bien importer le hook `import { useForm } from "react-hook-form";` Grâce à `useForm()`, on va pouvoir récupérer toutes les informations utiles pour notre formulaire.

Voyons maintenant les différentes propriétés que nous pouvons utiliser : - `register` : permet d'enregistrer les valeurs d'un champ pour pouvoir les utiliser - `handleSubmit`: pour gérer la transmission du formulaire.

## Récupérer les données avec React hook form

Reprenons notre formulaire et ajoutons les paramètres que nous venons de voir.

Ajoutez les propriétés `register` et `handleSubmit`.

```JS
const {register, handleSubmit} = useForm()
```

Complétez la balise `<form>` avec la propriété `handleSubmit`.

```JS
<form onSubmit={handleSubmit(onSubmit)}>
```

Puis ajoutez `register`.

```JS
<input name="Firstname" {...register("firstName")}/>
```

Pour finir, nous allons afficher les données du formulaire.

```JS
const onSubmit = data => console.log(data)
```

Maintenant, à chaque nouvelle soumission du formulaire, on voit apparaître les données dans la console.
Comme on peut le voir dans les DevTools, le rendu ne se fait pas à chaque entrée du formulaire.

Nous avons réussi à créer un formulaire avec React Hook Form.

Voyons désormais comment utiliser **la validation des données**.

## Gérer les erreurs avec react-hook-form

La librairie React hook form nous permet de gérer les données envoyées dans le formulaire pour afficher des messages d'erreur par exemple.

Pour cela, nous pouvons passer des paramètres à la méthode `register`. Les paramètres de validation sont similaires avec ceux du HTML5.

Voici une liste de certaines des propriétés :

-   `required` : indique que le champ doit être requis.
-   `minlength` et `maxlength` pour la longueur minimale et maximale de la valeur.
-   `type` permet de définir le type de donnée (email, nombre, texte...).
-   `pattern` : pour utiliser les expressions régulières.
-
-   Vous pouvez ajouter une propriété comme ceci.

```Js
{...register("firstName", {required: true})}
```

Maintenant, le formulaire ne soumet aucune donnée tant que le champ est vide.

Pour pouvoir gérer les erreurs, ajouter `formState: {errors}` à `useForm`. Vous pouvez dès à présent obtenir les erreurs en ajoutant :

```JS
console.log(errors)
```

Si vous souhaitez entrer un message d'erreur paramétrez, remplacez `true` par le message voulu.

Vous pouvez afficher un message d'erreur dynamiquement avec un opérateur par exemple.

```JS
{errors.firstName?.type === 'required' && <p role="alert">First name is required</p>}
```

Vous avez également la possibilité d'utiliser des schémas de validation des données (comme [Yup](https://github.com/jquense/yup)) pour avoir une gestion des erreurs plus approfondies.

## Conclusion

Je vous ai montré ici l'utilisation de base de **React Hook Form**. Vous avez d'autres possibilités comme intégrer react-hook-form à une librairie ou à un formulaire existant. Vous pouvez aussi utiliser React hook form avec React Native. Vous pouvez retrouver la doc officielle de [React Hook Form](https://react-hook-form.com/)

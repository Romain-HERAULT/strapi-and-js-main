# Exercice Strapi : Création et Consommation d'une API


## Objectif Général
- Installer et configurer Strapi.
- Créer une base de données et y insérer des données via Strapi.
- Consommer l'API créée avec un client front-end en JavaScript.

## Partie 1 : Installation et Configuration de Strapi
### Objectif
Installer Strapi et créer un projet.

### Etapes
1. **Installation**
   - [Installez Node.js et npm](https://nodejs.org/).
   - Utilisez npm pour installer Strapi globalement en lançant la commande suivante dans votre terminal :
     ```
     npm install strapi@latest -g
     ```
   - Créez un nouveau projet Strapi avec :
     ```
     strapi new backend-strapi
     ```
2. **Démarrage**
   - Allez dans le dossier du projet et démarrez Strapi :
     ```
     cd backend-strapi
     strapi develop
     ```
3. **Configuration**
   - Accédez à l’interface d’administration via [http://localhost:1337/admin](http://localhost:1337/admin).
   - Créez un administrateur et explorez l'interface.
   - Créez une nouvelle "Collection Type" (e.g., "Article") avec quelques champs (titre, contenu, auteur).
   - [Documentation Strapi](https://strapi.io/documentation/developer-docs/latest/getting-started/introduction.html)

## Partie 2 : Gestion de la Base de Données
### Objectif
Créer et manipuler une base de données via Strapi.

### Etapes
1. **Configuration de la BDD**
   - Configurez la BDD dans `config/database.js` selon votre choix de base de données (vous pouvez utiliser SQLite pour simplifier le processus ou [choisir une autre BDD](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#database)).

2. **Création de Données**
   - Utilisez l'interface admin pour créer des instances d'"Article" et y insérer des données.
   - Expérimentez avec les endpoints API auto-générés par Strapi (e.g., [http://localhost:1337/articles](http://localhost:1337/articles)).


## Partie 3 : Créer un Client Front-End en JS
### Objectif
Consommer l'API Strapi et afficher les données dans une application front-end.

### Etapes
1. **Initialisation du Projet Front-End**
   - Créez un projet front-end avec HTML, CSS et JS (ou un framework comme React).

2. **Consommation de l'API**
   ```
   fetch('http://localhost:1337/articles')
     .then(response => response.json())
     .then(data => console.log(data));
    ```

3. **Affichage des Données**
- Manipulez le DOM pour afficher les données de l'API sur votre page web.
- Implémentez une fonctionnalité permettant l'affichage détaillé d'un article lors du clic.

## Conclusion et Revue
- Discutez des difficultés rencontrées et des solutions potentielles.
- Explorez les options de déploiement de Strapi (Heroku, Vercel, etc.).
- Discutez des améliorations potentielles et des autres fonctionnalités de Strapi.
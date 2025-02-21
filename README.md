# P3-City Canvas
`Street Art Hunter`

**Bienvenue chez City Canvas : Street Art Hunter.**

L'endroit où vous pourrez voyager, rechercher et découvrir les oeuvres de Street Art qui sont présentes partout autour de vous.

Et si, à la place de faire un **Métro, Boulot, Dodo**, vous injectiez une petite ballade découverte de Street Art dans votre quotidien ?
Un voyage prévu pour ce weekend ou pour les prochaines vacances et vous ne savez pas ce qu'il y a à voir sur place ?
Pas de problème, city canvas vous apporte les informations nécessaires pour rendre cette découverte une merveille pour les yeux : où trouver `les plus belles oeuvres de Street Art` dans votre ville de prédilection !

City Canvas, c'est aussi une chasse aux **trésors** où vos contributions vont pouvoir enrichir la base de données de Street Art qui sont à disposition de tous. En sommes, en vous identifiant et créant votre compte, vous entrez dans une communauté qui mets en avant art et santé.


## En détails

City Canvas est un projet développé par une team de 3 développeurs de chocs, qui sont heureux de partagé avec vous leur travail.

**Feature**

Nous avons développé les features suivantes :
- Localisation grâce à une adresse;
- Géolocalisation (avec autorisation du navigateur);
- Affichage d'une carte et des oeuvres localisés;
- Détails des oeuvres : nom, localisation, nom de l'artiste ...;
- Création d'un profil utilisateur;
- Connexion à un espace utilisateur/profil;
- Modification du profil;
- Ajout d'oeuvres d'art;

**Prise en main du projet**

## Table des Matières
- [P3-City Canvas](#p3-city-canvas)
- [En détails](#en-détails)
- [Commandes de Base](#commandes-de-base)
- [Bonnes Pratiques](#bonnes-pratiques)
- [FAQ](#faq)
- [Credit](#crédit)

### Commandes de Base

**Cloner** le projet avec la commande : `git clone git@github.com:WildCodeSchool-2024-09/js-lyon-2024-09-P3-Street-Art-Hunter.git`

**Créer et remplir le fichier `.env`** dans les dossiers `client` et `server` : Ceux-ci sont essentiels pour le bon fonctionnement de City Canvas.

**Commandes à utiliser**
| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances pour le client et le serveur                       |
| `npm run db:migrate`   | Met à jour la base de données à partir d'un schéma défini                   |
| `npm run dev`          | Démarre les deux serveurs (client et serveur) dans un seul terminal         |
| `npm run check`        | Exécute les outils de validation (linting et formatage)                     |
| `npm run test`         | Exécute les tests unitaires et d'intégration                                |

### Bonnes Pratiques

Comme tous bons étudiants, nous avons suivi les bonnes pratiques suivantes afin de construire un projet solide.

- **Code** :
  - Suivi des principes SOLID et DRY pour une architecture de code propre et maintenable.
  - Utilisation de TypeScript pour bénéficier de la vérification statique des types.
  - Adopter Biome comme linter pour éviter les confusions et les erreurs de codes.
  - Rédaction de tests pour vérifier certaines fonctionnalités.

- **CSS** :
  - Une ligne directrice commune au projet, écrite dans App.css.
  - Utiliser des classnames commun pour une globalisation des styles.

- **Sécurité** :
  - Valider et échapper toujours les entrées des utilisateurs.
  - Stocker les mots de passe de manière sécurisée en utilisant des hash forts (: argon2).
  - Appeler la BDD depuis le serveur pour protéger son intégrité.

### FAQ

**Origine du projet**

Ce projet est développé au cours de notre cursus à la Wild Code School et basé sur un monorepo JS, suivant l'architecture React-Express-MySQL telle qu'enseignée à la Wild Code School (v7.1.7)

Il est pré-configuré avec un ensemble d'outils pour produire du code de qualité industrielle, tout en restant un outil pédagogique :

- **Concurrently** : Permet d'exécuter plusieurs commandes simultanément dans le même terminal.
- **Husky** : Permet d'exécuter des commandes spécifiques déclenchées par des événements _git_.
- **Vite** : Alternative à _Create-React-App_, offrant une expérience plus fluide avec moins d'outils.
- **Biome** : Alternative à _ESlint_ et _Prettier_, assurant la qualité du code selon des règles choisies.
- **Supertest** : Bibliothèque pour tester les serveurs HTTP en node.js.

**Les technologies utilisés**

- React Js;
- Typescript;
- Express JS;
- Node JS;
- MySQL;
- Axios;
- Jest;

**Packages installés**

- Leaflet React;
- Slick-carousel React;
- Toastify React;
- MySQL2;
- argon2;
- jsonwebtoken;
- cors;
- dotenv;

## Crédit

Nous souhaiterions remercier les différentes personnes et organismes nous ayant permis de réaliser ce projet de groupe.

Merci à la `Wild Code School` pour son encadrement et le Monorepo JS.

Merci à `Nominatim` pour son API qui traduit des adresses en coordonnées géographique.

Merci à `https://www.street-artwork.com/` et le photographe `Rabot`pour les données que nous avons pu récupérer pour construire notre BDD. Nous avons pu ainsi nous concentrer sur le fait de **développer** ce site plutôt que de parcourir Lyon et les allentours pour avoir des exemples d'oeuvres d'Art.

Merci à notre encadrant `Marco @HazeFury` pour ses encouragements et son implication pour la réalisation de ce P3.

Logo et icônes créés sur `Canva`.

Wireframe créé sur `Excalidraw`.

Maquette sur `Figma` ==>
"https://embed.figma.com/proto/JpKJ7AtmmTqAfwPHAYjR46/City-Canvas?node-id=1-17&p=f&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A17&show-proto-sidebar=1&embed-host=share"

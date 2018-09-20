#crisis.js
##Une librairie pour les sites qui rencontrent des personnes connaissant une crise

###Attention

Il s'agit d'une librairie **preuve de concept** qui n'est **pas** prévue pour les environnements de production. Si vous voulez 
participer dans ce projet, ou si vous souhaitez utiliser cette librairie, vous, et vos utilisateurs, acceptez de ne pas tenir
cette librairie, son auteur, ou n'importe quel contributeur responsable de son usage. Nous essayons de potentiellement sauver
des vies, et non pas d'être pénalisé pour faire ce qui est juste.

Cela dit, parce que ce projet fait affaire à des sujets fortement sensibles, les terminologies contenues dans ce projet peuvent
ne pas être adaptées à toutes les audiences. Il peut déclencher des émotions accablantes, des douleurs, ou des anciens traumatismes.
C'est à vous de décider s'il s'agit d'un environnement sécurisé pour que vous puissiez participer. Veuillez faire preuve de prudence
avant de continuer.

###Objectif

Une crise est une occurence de tous les jours. Il est possible, pour quelques kb par page, d'intervernir et d'empêcher une mort,
d'empêcher un abus, ou bien de sauver une vie. Cette librarie est une preuve de concept pour voir s'il est possible de construire
un système qui peut détecter la douleur des utilisateurs et de les aider si c'est possible.

###Comment Cela Fonctionne

Javascript est typiquement utilisé comme interaction du côté du client. Un de ses bénéfices est d'être capable de détecter une entrée
d'utilisateur et de réagir face à cette entrée. Cette application fonctionne en prennant un fichier de définition qui esquisse des
combinaisons de phrase sensibles, et qui les transforme en expressions régulières. Quand un utilisateur entre n'importe quel nombre 
de chaînes de caractères sensibles définies par ces définitions, ils seront accueillis par une simple demande de confirmation 
JavaScript qui leur demande s'ils ont besoin d'aide. S'ils sélectionnent "OK", ils seront envoyés vers une des resources en ligne
accompagnant assignées à une catégorie de crise particulière.

Il y a une considération comme quoi surveiller l'entrée des utillisateurs pourrait être vu comme une invasion de la vie privée. Celle
application **ne conservera et ne devrait jamais conserver les entrées des utilisateurs ou identité de la personne outre la location.**
Pour soulager un facteur d'inconvénient, peu importe si l'utilisateur sélectionne "OK" ou "Annuler", le pop-up ne réagira pas à 
l'entrée qui était utilisée jusqu'à ce que la page soit rafraîchie.

###Expressiones régulières

Les combinaisions de phrases sont conçues afin d'utiliser les expressions régulières pour déclencher une aide de façon appropriée.
Par exemple, si quelqu'un écrit "Je pense à me suicider", cela va déclencher autant que "Je vais me suicider" ou "il se coupe".

###Options

Il y a diverses options qui peuvent être définies pour l'application, ou passées dedans pendant l'instanciation. Pendant que
l'application est dans une phase de transition, veuillez vous référer au fichier 'settings.js' dans le dossier 'src' pour une 
liste complète des options qui peuvent être passées.

####Langages

Une crise peut se produire dans toutes les langues. Par conséquent, cette application est conçue afin de supporter de multiples 
langages. Un fichier modèle de langage peut être trouvé dans le dossier 'src/langs'. Si vous avez prévu d'ajouter un nouveau langage
à Crisis, veuillez suivre le modèle existant là-dedans. Vous devrez modifier le 'gulpfile.js' et créer un fichier 'index-xx.html' pour
la démonstration.
Veuillez voir dans la section contribution dessous.

###Contribution

Une contribution est bienvenue, mais à cause de la nature de ce projet, doit être réalisée avec les meilleures intentions. Le but
premier est d'utiliser notre technique de programmation pour potentiellement sauver des vies. A côté de cela, nous voulons nous
assurer qu'il s'agit d'une application attractive. Cela signifie garder les tailles de fichier petites, l'accessibilité élevée,
et la compatibilité entre plusieurs appareils et navigateurs.

####Installation, Compilation, et Modification

Node est utilisé considérablement pour gérer efficacement le processus de build pour crisis.js. Veuillez vous familiariser avec node, 
npm, et les technologies utilisée ici avant de contribuer.

Gulp est utilisé exclusivement pour lancer les tâches. Pré-fabriquées avec le système sont de nombreuses commandes qui peuvent être
lancées pour manipuler le programme résultant. Voici une liste des commandes communes et leur explication :

* `gulp` - Compiles tous les langages, tous les fichiers, et minimise le contenu pour la publication 
* `gulp --dev` - Compile tous les langages, tous les fichiers et réserve la minimisation pour le travail de développement.
* `gulp lang-xx` - Compile le langage spécifié, par exemple, 'gulp land-en' compilera et minimisera l'anglais pour la publication.
* `gulp lang-xx --dev` - Compile the language specified, and reserve minification for development work. Compile le langage spécifié, et réserve la minimisation pour le travail de développement.
* `gulp compress` - Compresse tous les fichiers compilés pour la publication.

Inclus dans le gulp build est BrowserSync. Veuillez lire la documentation de BrowserSync si vous n'êtes pas familiers avec comment
il aide le développement.

###Démonstration

L'application crisis.js, compilée avec la dernière version la plus stable, peut-être vue depuis le dépôt GitHub Pages situé ici : [http://mookman288.github.io/crisis.js/](http://mookman288.github.io/crisis.js/).  

###License
####The MIT License (MIT)

Copyright (c) 2016 PxO Ink

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

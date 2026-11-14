# Mettre le portfolio en ligne avec GitHub Pages (gratuit)

Le site se trouve dans le dossier **`site/`**. À la fin, il sera en ligne à l'adresse :

### 👉 https://moustapha1994.github.io

(Ton compte GitHub est `Moustapha1994` ; l'adresse s'écrit toujours en minuscules.)

---

## Méthode 1 — Sans aucun logiciel, depuis le navigateur (10 minutes)

### Étape 1 : créer le dépôt
1. Connecte-toi sur **github.com**.
2. En haut à droite, clique sur **+** puis **New repository**.
3. **Repository name** : écris exactement `Moustapha1994.github.io`. Respecte le nom exact, sinon l'adresse sera différente.
4. Choisis **Public**. C'est obligatoire pour GitHub Pages gratuit, et c'est normal : c'est un site vitrine.
5. Ne coche rien d'autre et clique sur **Create repository**.

### Étape 2 : envoyer les fichiers
1. Sur la page du dépôt vide, clique sur le lien **« uploading an existing file »**.
2. Ouvre le dossier **`site/`** sur ton ordinateur et **sélectionne tout ce qu'il contient**
   (`index.html`, `.nojekyll`, et les dossiers `assets`, `css`, `js`).
   Glisse-les dans la page GitHub.
   ⚠️ Glisse le **contenu** du dossier `site`, pas le dossier `site` lui-même : `index.html` doit être à la racine.
3. En bas, clique sur **Commit changes**.

> `.nojekyll` est un fichier caché. Sous Windows : Explorateur → Affichage → cocher « Éléments masqués ».
> S'il manque, ce n'est pas grave : le site fonctionnera quand même.

### Étape 3 : activer GitHub Pages
1. Dans le dépôt, va dans **Settings** puis **Pages** (menu de gauche).
2. Dans **Build and deployment → Source**, choisis **Deploy from a branch**.
3. Pour **Branch**, choisis **main** et **/ (root)**, puis clique sur **Save**.
4. Attends 1 à 2 minutes et recharge la page : l'adresse **https://moustapha1994.github.io** apparaît en haut. 🎉

### Modifier le site plus tard
Ouvre le fichier dans le dépôt (par exemple `index.html`), clique sur le crayon ✏️, modifie le texte,
puis clique sur **Commit changes**. Le site se met à jour en 1 à 2 minutes.
Pour remplacer une image ou le CV : **Add file → Upload files**, puis envoie un fichier **avec le même nom**.

---

## Méthode 2 — Avec GitHub Desktop (recommandée pour la suite)

1. Installe **GitHub Desktop** (desktop.github.com) et connecte-toi avec ton compte.
2. Clique sur **File → Add local repository**, choisis le dossier `site`, puis **create a repository** ici.
3. Clique sur **Publish repository**, nomme-le `Moustapha1994.github.io` et **décoche** « Keep this code private ».
4. Active Pages comme à l'étape 3 ci-dessus.
5. Ensuite, à chaque modification : écris un message en bas à gauche, clique sur **Commit to main**, puis sur **Push origin**.

---

## Ce qu'il faut savoir

- **Garder ses projets privés** : seul le dépôt du portfolio est public. Tes autres dépôts (code de Tawfex, recherche, etc.)
  peuvent rester en **Private**. Pour en changer un : Settings → Danger Zone → Change visibility.
- **Ne jamais publier** de mots de passe, de clés API ou de données de patients et de recherche non publiées.
- **Nom de domaine** : tu as déjà `mac-business.com`. Tu peux le faire pointer vers ce site dans Settings → Pages → **Custom domain**.
  Il faut aussi ajouter chez ton registrar les enregistrements DNS indiqués par GitHub (docs.github.com, rubrique « custom domain »).
- **Partager le lien** : mets `https://moustapha1994.github.io` dans ton profil GitHub (champ URL), dans LinkedIn (Coordonnées → Site web)
  et sur ton CV.
- **Sécurité** : active l'authentification à deux facteurs (Settings → Password and authentication).

---

## À vérifier dans le contenu avant de publier

Ces informations viennent de ton CV. Corrige-les dans `index.html` si besoin :
- WhatsApp : +7 977 889-70-59 · Sénégal : +221 78 214 53 60 · Email : drame-sms1928@outlook.com
- LinkedIn : linkedin.com/in/amdy-m-drame · GitHub : Moustapha1994
- Les descriptions des 4 applications sans capture (rendez-vous hospitaliers, e-commerce de légumes, réservistes).
  J'ai indiqué les technologies probables (Django, Tkinter, Access) : ajuste-les si nécessaire.
- Pour ajouter de vraies captures, place l'image dans `assets/projets/` et remplace le bloc illustré dans `index.html`
  par `<img src="assets/projets/mon-image.webp" alt="...">`.

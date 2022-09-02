<h1 align="center">W3B Scholar - Nice Try Team</h1>

<div align="center">
   This website is mainly built with NextJS and Firebase
</div>

<div align="center">
   <h3>
    <a href='https://www.figma.com/file/kzTIuaLLZu541N3desYhxL/BNCC-Nice-Try?node-id=30%3A6'>Mockup</a>
    <span> | </span>
   <a href='https://docs.google.com/document/d/1tiende4r6AeD3_DWjetUXv1tiDgkNBWhsR7G5Xd-PIQ/edit#heading=h.ooka42wl8xdr'>Proposal</a>
    <span> | </span>
    <a href='https://console.firebase.google.com/u/0/project/nice-try-team/overview'>Firebase Console</a>
  </h3>
</div>

<br/>

# How to Install and Run

## Install

- ```git clone``` the repo
- then run ```npm install```
  - if it doesnt work try ```npm install --f```

## Running

    npm run dev


# Packages

- <a href='https://styled-components.com/'>styled-component</a> (Main Styling)
- <a href='https://react-icons.github.io/react-icons/'>react-icons</a> (Icons)
- <a href='https://www.framer.com/docs/introduction/'>framer-motion</a> (Animations)
- <a href='https://draftjs.org/'>Draftjs</a> (Rich Text Editor) <-- If anyone finds something better tell me

<br/>

# Branching and Committing

<h2>Commiting</h2>

```
add | fix | deleted : what did you do
```

Example

```
add: added navbar or fix: deleted console logs
```

<h2>Branching</h2>

```
feat | fix-theFeature
```

Example

```
eg. feat-navbar or fix-article
```

# Folder and File Structure

## Styling and Components

- components
  - pages
    - Article
      - ArticleCard
        - ArticleCard.jsx
        - ArticleCard.styles.js

Or just be consistent with what you code, it helps

<br/>

## Project Structure

- components
  - common, commonly used components like buttons, inputs and stuff
  - pages, special or unique components in pages like maybe card articles and stuff

- constants
  - styles, to store commonly used style values (typically colors)

- firebase
  - firebase, it is what it is

- pages
  - articles
    - id, singular articles
    - index, main articles page
  - _app, the root file of this app, doesn't really do much
  - _documents, where you do configs and stuff here
  - index, the App.js in Next

- public
  - static, where all the static files stay (images, and stuff)

- styles
  - GlobalStyles, the GlobalStyles for the app like the fonts and colors used and more

<br/>

<h2 align='center'>Be careful to not share/delete the contents of the env.local file</h1>

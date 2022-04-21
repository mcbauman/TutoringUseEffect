# TutoringUseEffect
Small Exercise in Tutoring to recap useEffect, useState and Localstorage by a themeSwitch (without Context)

npx create-react-app .
pnx create-react-app currentfolder

--------------OR-----------------------


npm init -y
folder public and src
src get file index.js
public gets index.html
index.html gets <div id="root"></div>
in terminal: 
    npm install react react-dom react-scripts
in package.json
    add script "start":"react-scripts start"
npm run start in terminal and add Browsers with Y

add to Index.js
    import reactDom from "react-dom"
    import App from "./App.jsx"

    ReactDom.createRoot(document.getElementById("root")).render(<App/>)

add App.jsx to src

add file .gitignore and inside node_modules

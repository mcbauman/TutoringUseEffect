import Header from "./components/Header.jsx"
import {useEffect, useState} from "react"
import "./style.scss"

const localTheme=localStorage.getItem("theme")
console.log("localTheme",localTheme);
const defaultTheme=localTheme?localTheme:"dark"
console.log("defaultTheme", defaultTheme);

export default function App(){
    const [theme,setTheme]=useState(defaultTheme)
    console.log(("Theme in App.jsx",theme));
    return(
        <div className={theme}>
            <Header theme={theme} setTheme={setTheme}/>
        </div>
    )
}
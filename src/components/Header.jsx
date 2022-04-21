import { useEffect, useState } from "react"

export default function Header(props){
    
    const {theme, setTheme}=props

    const changeTheme=((e)=>{setTheme(e.target.value)})
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])

    console.log(theme);
    return(
        <div className={theme}>
            <select defaultValue={theme} onChange={changeTheme}name="theme" id="theme">
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
        </div>
    )
}
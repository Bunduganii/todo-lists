// this is toggle theme practical
import React from 'react'
import { useState } from 'react'
import { FaMoon ,FaSun} from "react-icons/fa";
import "./index.css"
import { useEffect } from 'react';
const ToggleTheme = () => {
    const [theme,setTheme] = useState("light")
    const toggle = () =>{
       setTheme(theme === "light" ? "dark" : "light")
    }
      useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
      <div style={{ padding: "20px" }}>
      <button onClick={toggle}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </button>

      <h1>Hello World</h1>
    </div>
  )
}

export default ToggleTheme

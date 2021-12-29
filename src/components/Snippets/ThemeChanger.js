import React, { useState, useEffect } from 'react'
import {Button} from 'react-bootstrap';

const ThemeChanger = () => {
  const [themeState, setThemeState] = useState(false);

  const handleChange = () => {
    setThemeState(!themeState);
    console.log(themeState)
    setTimeout(() => {
        if (themeState) {
          localStorage.setItem('Theme', 'dark');
          document.body.classList.add('dark-mode');
        } else {
          localStorage.setItem('Theme', 'light');
          document.body.classList.remove('dark-mode');
        }
    }, 500);
  }
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
  })
  return (
    <Button  onClick={handleChange} className='btn btn-round btn-white'>
        {themeState ? <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye gVaYHr"><path fillRule="evenodd" clipRule="evenodd" d="M5.75788 17.4844C5.07158 16.7559 6.12135 15.7797 7.1112 15.928C7.42793 15.9754 7.75214 16 8.08209 16C11.6719 16 14.5821 13.0899 14.5821 9.5C14.5821 8.42871 14.3302 7.41794 13.8791 6.52697C13.4263 5.63282 14.0229 4.31312 14.9328 4.73338C17.6775 6.00109 19.5821 8.77812 19.5821 12C19.5821 16.4183 16.0004 20 11.5821 20C9.28652 20 7.21678 19.0331 5.75788 17.4844Z" fill="currentColor"></path></svg> : <svg viewBox="0 0 24 24" fill="none" width="16" height="16" xlmns="http://www.w3.org/2000/svg" className="sc-bdvvtL sc-hKwDye gVaYHr"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 4.75C11.25 4.33579 11.5858 4 12 4C12.4142 4 12.75 4.33579 12.75 4.75V6.25C12.75 6.66421 12.4142 7 12 7C11.5858 7 11.25 6.66421 11.25 6.25V4.75ZM16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12ZM12 17C11.5858 17 11.25 17.3358 11.25 17.75V19.25C11.25 19.6642 11.5858 20 12 20C12.4142 20 12.75 19.6642 12.75 19.25V17.75C12.75 17.3358 12.4142 17 12 17ZM19.25 11.25C19.6642 11.25 20 11.5858 20 12C20 12.4142 19.6642 12.75 19.25 12.75H17.75C17.3358 12.75 17 12.4142 17 12C17 11.5858 17.3358 11.25 17.75 11.25H19.25ZM7 12C7 11.5858 6.66421 11.25 6.25 11.25H4.75C4.33579 11.25 4 11.5858 4 12C4 12.4142 4.33579 12.75 4.75 12.75H6.25C6.66421 12.75 7 12.4142 7 12ZM16.5962 6.34314C16.8891 6.05024 17.364 6.05024 17.6569 6.34314C17.9497 6.63603 17.9497 7.1109 17.6569 7.4038L16.5962 8.46446C16.3033 8.75735 15.8284 8.75735 15.5355 8.46446C15.2426 8.17156 15.2426 7.69669 15.5355 7.4038L16.5962 6.34314ZM8.46447 15.5355C8.17158 15.2426 7.69671 15.2426 7.40381 15.5355L6.34315 16.5962C6.05026 16.8891 6.05026 17.3639 6.34315 17.6568C6.63605 17.9497 7.11092 17.9497 7.40381 17.6568L8.46447 16.5962C8.75737 16.3033 8.75737 15.8284 8.46447 15.5355ZM17.6569 16.5962C17.9498 16.8891 17.9498 17.364 17.6569 17.6569C17.364 17.9497 16.8891 17.9497 16.5962 17.6569L15.5355 16.5962C15.2427 16.3033 15.2427 15.8284 15.5355 15.5355C15.8284 15.2426 16.3033 15.2426 16.5962 15.5355L17.6569 16.5962ZM8.46448 8.46447C8.75738 8.17158 8.75738 7.69671 8.46448 7.40381L7.40382 6.34315C7.11093 6.05026 6.63605 6.05026 6.34316 6.34315C6.05027 6.63605 6.05027 7.11092 6.34316 7.40381L7.40382 8.46447C7.69671 8.75737 8.17159 8.75737 8.46448 8.46447Z" fill="currentColor"></path></svg>}
    </Button>
  )
}

export default ThemeChanger;

import styles from "../styles/Home.module.css"
import React, {useState } from 'react';
/*import { BrowserRouter as Routes, Route, Link } from 'react-router-dom';*/

const Header = ()=> {

    const [menuStatus,setMenuStatus] = useState(styles.menuclosed)
    const [menuType,setMenu] = useState(styles.closedmenu)

    const toggleMenu = ()=> {
        menuStatus === styles.menuclosed ? setMenuStatus(styles.menuopened) : setMenuStatus(styles.menuclosed)
        menuType === styles.closedmenu ? setMenu(styles.activemenu) : setMenu(styles.closedmenu)
    }

    const closeMenu = () => {
        setMenuStatus(styles.menuclosed)
        setMenu(styles.closedmenu)
    }

    return(
        <section className={styles.Apppheader}>
           
            <div className={menuType} onClick={toggleMenu}>
                <div className={styles.hamburgerthree}></div>
            </div>
            <div className={menuStatus}>
               <ul>
                <li>About Blast</li>
                <li>Partners</li>
               </ul>
            </div>
        </section>
    )
}

export default Header;
// @flow 
import * as React from 'react';
import { MenuItems } from "./MenuItems"
import Link from 'next/link';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button';
import {useRouter} from 'next/router';

library.add(fas);

const Navbar = (props) => {
    const [clicked, setClicked] = React.useState(false);
    const [navbar, setNavbar]  = React.useState(false);

    const router = useRouter();

    function handleClick(){
        setClicked(!clicked);
    }

    function isActive(route){
        return route==router.pathname? 'isactive' : '';
    }

    function handleClicked(){
        
    }

    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    });
    
    return (  
        <nav className={navbar? 'NavbarItems active' : 'NavbarItems '}>
            <Link href="/">
                <div className="navbar-logo">
                    <img width="120" src="./img/logo.png" alt="Logo"/>
                </div>
            </Link>
            <div className="menu-icon"  onClick={() => handleClick()}>
                {clicked
                    ? <FontAwesomeIcon color="white" icon="times" />
                    : <FontAwesomeIcon color="white" icon="bars" /> 
                }
            </div>
            <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li className={isActive(item.url)} key={index}>
                            <Link href={item.url}>
                                <a className={item.cName}>
                                {item.title}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Button onClick={() => handleClicked} type="button" buttonStyle="btn--primary" buttonSize="medium"> Visite Agora! </Button>
    </nav>
    );
};

export default Navbar;
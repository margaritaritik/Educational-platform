import React, { useRef, useContext } from 'react';
import styled from 'styled-components';
import useOnClickOutside from './onClickOutside';
import { MenuContext } from './navState';
import HamburgerButton from './HamburgerButton';
import { SideMenu } from './SideMenu';
import logo from '../logo.svg';
import account from "../../../images/accPhoto.jpg";
import styles from './styles.module.css'

const Navbar = styled.div`
  display: flex;
  position: relative;
  left: 0;
  right: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0px;
  align-items: center;
  background: rgba(8, 43, 255, 0) none repeat scroll 0% 0%;
  color: rgb(0, 0, 0);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: space-between;
  padding: 6px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;

const MainMenu = () => {
    const getStorageData = (keyName, defaultValue) =>{
        const savedItem = localStorage.getItem(keyName);
        const parsedItem = JSON.parse(savedItem);
        return parsedItem || defaultValue;
    }
    const savedItem =getStorageData("account",'no').name;
    const node = useRef();
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    useOnClickOutside(node, () => {
        // Only if menu is open
        if (isMenuOpen) {
            toggleMenuMode();
        }
    });

    return (
        <header ref={node}>
            <Navbar>
                <div className={styles.NavLogo}>
                    <HamburgerButton />
                    <img src={logo}/>
                </div>
               <div className={styles.NavAccount}>
                   <p>{savedItem}</p>
                   <a href='/account'>
                       <img className={styles.accountPhoto} src={account}/>
                   </a>

               </div>
            </Navbar>
            <SideMenu />
        </header>
    );
};

export default MainMenu;
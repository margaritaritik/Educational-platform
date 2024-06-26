import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { MenuContext } from './navState';



const Menu = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 400px;
  max-width: 100%;
  margin-top: 0px;
  padding-top: 150px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #F6F8FA;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ${props =>
          props.open &&
          css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  padding-top: 16px;
  padding-bottom: 20px;
  padding-left: 16%;
  background-position: 88% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #000000;
  font-size: 24px;
  line-height: 120%;
  font-weight: 500;

  :hover {
    background-position: 90% 50%;
  }
`;

export const SideMenu = ({ children }) => {
    const { isMenuOpen } = useContext(MenuContext);

    return <Menu open={isMenuOpen}>{children}</Menu>;
};

SideMenu.propTypes = {
    children: PropTypes.node,
};

SideMenu.defaultProps = {
    children: (
        <>
            <MenuLink href="/">Главная</MenuLink>
            <MenuLink href="/journal">Дневник</MenuLink>
            <MenuLink href="/raspisanie">Расписание</MenuLink>
            <MenuLink href="/news">Новости</MenuLink>
            <MenuLink href="/about_org">Об организации</MenuLink>
            <MenuLink href="/contact">Контакты</MenuLink>
            <MenuLink href="/" onClick={()=>{
                localStorage.clear();}}>Выход</MenuLink>
        </>
    ),
};
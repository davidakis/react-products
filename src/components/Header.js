import React from 'react';
import styled from 'styled-components';
import logo from '../allyouneedisshop.png';
import iconCart from '../assets/icon-cart.svg';
import iconHeart from '../assets/icon-heart.svg';
import iconUser from '../assets/icon-user.svg';
import SearchBar from './SearchBar';
import { Badge } from 'antd';

const Top = styled.div`
   display: flex;
   width: 1440px;
   padding: 0px 104px;
   align-items: center;
   gap: 60px;
`;

const TopMenuBar = styled.div`
    display: flex;
    padding: 10px 0px;
    align-items: center;
    gap: 30px;
    flex: 1 0 0
`;

const Center = styled.div`
   display: flex;
   width: 1440px
   padding: 30px 104px;
   justify-content: space-between;
   align-items: center
`;



const Link = styled.a`
  color: black;
  text-decoration: none;
  text-transform: ${props => props.upperCase ? 'uppercase' : ''}
`;

const Logo = styled.img`
    display: flex;
    width: 155px;
    align-items: center;
    gap: 10px;
    flex-shrink: 0
`;
const HR = styled.hr`
    color: rgb(255, 255, 255)
`;

const IconContainer = styled.div`
    width: 155px;
    height: 36px;
    flex-shrink: 0; 
`;

const badgeStyle = {
    postion: 'absolute',
    top: '-30px',
    left: '-13px'
}

class Header extends React.Component {
    render() {
        return(
        <div>
            <Top>
                <TopMenuBar>
                    <nav>
                        <Link href="#">Chi siamo</Link> &nbsp;
                        <Link href="#">Community</Link> &nbsp;
                        <Link href="#">Brand</Link> 
                    </nav>
                </TopMenuBar>
                ITA 
            </Top>
            <HR />
            <Center>
               <Logo src={logo} alt="all you need is shop" />
               <SearchBar />
               <IconContainer>
                  <img src={iconUser} alt="accedi" />
                  <img src={iconHeart} alt="segna come preferito" />
                  <img src={iconCart} alt="carrello" />
                  <Badge styles={badgeStyle} color="red" count="2" />
               </IconContainer>
            </Center>
            <HR />
            <Top>
                <nav>
                    <Link upperCase href="#">Donna</Link> &nbsp;
                    <Link upperCase href="#">Uomo</Link> &nbsp;
                    <Link upperCase href="#">Bambini</Link> &nbsp;
                    <Link upperCase href="#">Tutti gli articoli</Link> 
                </nav>
            </Top>
            <HR />
        </div>
        )
    }

}

export default Header;
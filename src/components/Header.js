import React from 'react';
import styled from 'styled-components';
import logo from '../assets/allyouneedisshop.png';
import iconCart from '../assets/icon-cart.svg';
import iconHeart from '../assets/icon-heart.svg';
import iconUser from '../assets/icon-user.svg';
import iconHamburger from '../assets/hamburger.png';
import SearchBar from './SearchBar';
import { Badge } from 'antd';

const Top = styled.div`
   display: flex;
   flex-direction: column;
   width: 1440px;
   padding: 20px;
   align-items: center;
   gap: 10px;
   @media (min-width: 768px) {
    flex-direction: row;  // Torna a una direzione di riga per schermi più grandi
    padding: 0px 104px;  // Ripristina il padding originale
 }
`;

const TopMenuBar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    align-items: center;
    gap: 30px;
    flex: 1 0 0

    @media (min-width: 768px) {
        flex-direction: row;  // Torna a una direzione di riga per schermi più grandi
        padding: 30px 104px;  // Ripristina il padding originale
     }
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
  text-transform: ${props => props.uppercase ? 'uppercase' :''};
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
const Icon = styled.img`
  padding-right: 10px;
`;

const badgeStyle = {
    position: 'absolute', top: '-25px'
};


const MenuIcon = styled.div`
  display: none;  // Nascondi il menu ad hamburger su schermi più grandi
  cursor: pointer;

  @media (max-width: 767px) {
    display: block;  // Mostra il menu ad hamburger su schermi più piccoli
  }
`;

const MobileMenu = styled.div`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 80px;  // Posiziona il menù sotto l'intestazione
  right: 0;
  background-color: white;
  padding: 20px;
  z-index: 1000;
`;

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuOpen: false
        };
    }
    toggleMenu = () => {
        this.setState((prevState) => ({ isMenuOpen: !prevState.isMenuOpen }));
    }
    render() {
        const {isMenuOpen} = this.state;
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
                <div style={{ margin: 'auto'} }>ITA</div>
            </Top>
            <HR />
            <Center>
               <Logo src={logo} alt="all you need is shop" />
               <SearchBar />
               <MenuIcon onClick={this.toggleMenu}>
                    <img src={iconHamburger} alt="Menu" style={{ maxWidth: '20%' }}/>
                </MenuIcon>
                <MobileMenu isOpen={isMenuOpen}>
                    <img src={iconUser} alt="accedi" />
                    <img src={iconHeart} alt="segna come preferito" />
                    <img src={iconCart} alt="carrello" />
                </MobileMenu>
                {isMenuOpen ? null : (
               <IconContainer>
                  <Icon src={iconUser} alt="accedi" />
                  <Icon src={iconHeart} alt="segna come preferito" />
                  <span>
                    <Icon src={iconCart} alt="carrello" />
                    <Badge style={badgeStyle} color="red" count="2" />
                  </span>
                </IconContainer>)}
            </Center>
            <HR />
            <Top>
                <nav>
                    <Link uppercase="uppercase" href="#">Donna</Link> &nbsp;
                    <Link uppercase="uppercase" href="#">Uomo</Link> &nbsp;
                    <Link uppercase="uppercase" href="#">Bambini</Link> &nbsp;
                    <Link uppercase="uppercase" href="#">Tutti gli articoli</Link> 
                </nav>
            </Top>
            <HR />
        </div>
        )
    }

}

export default Header;
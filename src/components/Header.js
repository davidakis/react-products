import React from 'react';
import styled from 'styled-components';
import logo from '../assets/allyouneedisshop.png';
import iconCart from '../assets/icon-cart.svg';
import iconHeart from '../assets/icon-heart.svg';
import iconUser from '../assets/icon-user.svg';
import iconArrow from '../assets/icon-arrow.svg';
import iconHamburger from '../assets/hamburger.png';
import SearchBar from './SearchBar';
import { Badge } from 'antd';

const Top = styled.div`
   display: flex;
   flex-direction: column;
   width: 1440px;
   padding: 20px;
   align-items: center;
   text-align: center;
   gap: 10px;
   @media (min-width: 768px) {
    flex-direction: row;  // Torna a una direzione di riga per schermi più grandi
    padding: 0px 104px;  // Ripristina il padding originale
    text-align: left;
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
        text-align: center;
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
  text-transform: ${props => (props.uppercase ? 'uppercase' :'')};
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

const Country = styled.div`
     margin: auto;
`

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

const DesktopIcons = styled.div`
  @media (max-width: 767px) {
    display: none; // Nascondi le icone desktop su schermi più piccoli
  }
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
                <Country>ITA</Country>
                <img src={iconArrow} alt="scegli" />
            </Top>
            <HR />
            <Center>
               <Logo src={logo} alt="all you need is shop" />
               <SearchBar />
               <MenuIcon onClick={this.toggleMenu}>
                    <img src={iconHamburger} alt="Menu" style={{ maxWidth: '20%' }}/>
                </MenuIcon>
                <MobileMenu open={isMenuOpen}>
                    <img src={iconUser} alt="accedi" />
                    <img src={iconHeart} alt="segna come preferito" />
                    <img src={iconCart} alt="carrello" />
                </MobileMenu>
                 <DesktopIcons>
                    <IconContainer>
                        <Icon src={iconUser} alt="accedi" />
                        <Icon src={iconHeart} alt="segna come preferito" />
                        <span>
                            <Icon src={iconCart} alt="carrello" />
                            <Badge style={badgeStyle} color="red" count="2" />
                        </span>
                    </IconContainer>
                </DesktopIcons>
            </Center>
            <HR />
            <Top>
                <nav>
                    <Link uppercase="true" href="#">Donna</Link> &nbsp;
                    <Link uppercase="true" href="#">Uomo</Link> &nbsp;
                    <Link uppercase="true" href="#">Bambini</Link> &nbsp;
                    <Link uppercase="true" href="#">Tutti gli articoli</Link> 
                </nav>
            </Top>
            <HR />
        </div>
        )
    }

}

export default Header;
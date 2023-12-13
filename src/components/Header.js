import React from 'react';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../allyouneedisshop.png';
import SearchBar from './SearchBar';

const style1 = { display: 'flex', flexDirection: 'row' };

class Header extends React.Component {
    render() {
        return(
        <div>
            <nav>

            </nav>
            <div style={style1}>
               <img src={logo} alt="all you need is shop" width="30%" />
               <SearchBar />
            </div>
            <nav>

            </nav>
        </div>
        )
    }

}

export default Header;
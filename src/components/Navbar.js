import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../src/logo.svg'
import styled from 'styled-components'
import { ButtonContainer } from './Button'


const Navbar = props => {
        return (
        <div>
           <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <Link to="/">
                        <img src={Logo} />
                    </Link> 
                </div>
                <div className="navbar-item"></div>
                <div className="navbar-item">
                    <Link to="/">
                       Products 
                    </Link> 
                </div>

            </div>
            <div className="navbar-end">
                <div className="navbar-item">

                <ButtonContainer>
                    <Link to="/cart">
                    <span className="icon is-medium" style={{marginRight: '.5em'}}>
                    <i className="fas fa-shopping-cart"></i>
                    </span>
                    my cart
                    </Link> 
                </ButtonContainer>
                </div>
              </div>
            </nav> 
        </div>
    )
};

export default Navbar;
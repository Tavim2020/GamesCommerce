import React from 'react';
import { FooterContainer } from './style/FooterStyle';
import Logo from '../Logo/Logo';
import MenuExposto from '../MenuExposto/MenuExposto';


const Footer = () => {
    
    return (
        <FooterContainer>
            <div>

                <Logo />

                <div>

                    <MenuExposto color={'#E96B00'}/>

                </div>


            </div>
            
        </FooterContainer>
    )
}

export default Footer;

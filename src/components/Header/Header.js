import React from 'react'
import { HeaderContainer, ContainerInternoHeader } from './style/HeaderStyled';
import Logo from '../Logo/Logo';
import UserLoginAndCar from '../UserLoginAndCar/UserLoginAndCar';

const Header = () => {
    return (
        <HeaderContainer>

            <ContainerInternoHeader>

                <Logo title={'Home'}/>

                <UserLoginAndCar />

            </ContainerInternoHeader>

        </HeaderContainer>
    )
}

export default Header

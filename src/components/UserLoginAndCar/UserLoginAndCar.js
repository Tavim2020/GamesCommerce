import React from 'react';
import { UserLoginAndCarContainer } from './style/UserLoginAndCarContainerStyle';
import { GlobalContext } from '../../Context/GlobalContext';
import ButtonGoogle from '../Buttons/ButtonGoogle';
import UserIterator from '../UserIterator/UserIterator';
import Car from './Car';


function UserLoginAndCar() {

    const { loginGoogle } = React.useContext(GlobalContext);

    return (
        <UserLoginAndCarContainer>

            <div className="LoginGoogle">

                <ButtonGoogle />

            </div>

            {!loginGoogle && <UserIterator />}

            <Car />


        </UserLoginAndCarContainer>
    )
}

export default UserLoginAndCar;

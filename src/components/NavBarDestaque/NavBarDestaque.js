import React from 'react';
import { NavBarDestaqueContainer } from './style/NavBarDestaque';
import { Link } from 'react-router-dom';


const NavBarDestaque = () => {
    return (
        <NavBarDestaqueContainer>

            <div className='destaques'>

                <Link to='#'>

                    <h4>Destaques</h4>

                </Link>
        
            </div>

            <div className='destaques'>

                <Link to='#'>
                    
                    <h4>Lançamentos</h4>

                </Link>

            </div>

            <div className='destaques'>

                <Link to='#'>
                    
                    <h4>Liquidação de Games</h4>

                </Link>

            </div>

            <div className='destaques'>

                <Link to='#'>
                    
                    <h4>Promoções</h4>

                </Link>

            </div>

        </NavBarDestaqueContainer>
    )
}

export default NavBarDestaque;

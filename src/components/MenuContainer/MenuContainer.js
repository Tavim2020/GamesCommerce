import React from 'react';
import { MenuContainerSection, ContainerCentral } from './style/MenuStyle';
import GamesCommerce from '../GamesCommerce/GamesCommerce'
import MenuExposto from '../MenuExposto/MenuExposto';
import NavBarDestaque from '../NavBarDestaque/NavBarDestaque';

const MenuContainer = () => {
    return (
        <MenuContainerSection>
            
            <ContainerCentral>

                <div className="GameCommerce">
                        
                    <GamesCommerce />

                    <MenuExposto color={'#494949'}/>

                </div>

                 <NavBarDestaque />

            </ContainerCentral>

        </MenuContainerSection>
    )
}

export default MenuContainer;

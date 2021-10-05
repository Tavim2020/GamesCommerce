import React from 'react';

const Logo = ({title}) => {

    const IconSupera = 'https://www.supera.com.br/wp-content/uploads/2021/05/SUPERA-BRANCO.svg';

    return (
        <>
            <img title={title} src={IconSupera} style={{ width: '15vw', height: '4vw', cursor: 'pointer'}} alt={'Logo Supera'} />
        </>
    )
}

export default Logo;

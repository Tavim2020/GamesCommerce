import React from 'react';



export const GlobalContext = React.createContext();

export const GlobalStorage = ({children}) => {
    const [loginGoogle, setLoginGoogle] = React.useState(false);
    const [nameUser, setNameUser] = React.useState('');
    const [countCar, setCountCar] = React.useState(0);
    const [arrayCar, setArrayCar ]= React.useState([]);
    const [dataResponse, setDataResponse] = React.useState([]);
    const [clickedInCar, setClickedInCar] = React.useState(false);
    const [effectAddToCar, setEffectAddCar] = React.useState(false);
    const carPosition = React.useRef(null);
    const [normalState, setNormalState] = React.useState(true);
    const [crescenteState, setCrescenteState] = React.useState(false);
    const [popularidadeState, setPopularidadeState] = React.useState(false);
    const [priceState, setPriceState] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');
    const [arraySearch, setArraySearch] = React.useState([]);
    const [arrayTrueOrFalse, setArrayTrueOrFalse] = React.useState(false);
    const [frete, setFrete] = React.useState('');
    const [confirmLogOut, setConfirmLogOut] = React.useState(false);
    const [avatar, setAvatar] = React.useState('');


    const [total, setTotal] = React.useState('');
    


    


    return (
        <GlobalContext.Provider value={{
            loginGoogle,
            setLoginGoogle,
            nameUser,
            setNameUser,
            countCar, 
            setCountCar,
            arrayCar,
            setArrayCar,
            dataResponse, 
            setDataResponse,
            clickedInCar, 
            setClickedInCar,
            effectAddToCar, 
            setEffectAddCar,
            carPosition,
            normalState,
            setNormalState,
            crescenteState,
            setCrescenteState,
            popularidadeState,
            setPopularidadeState,
            priceState,
            setPriceState,
            inputValue,
            setInputValue,
            arraySearch,
            setArraySearch,
            arrayTrueOrFalse, 
            setArrayTrueOrFalse,
            frete,
            setFrete,
            confirmLogOut, 
            setConfirmLogOut,
            avatar, 
            setAvatar,
            total, 
            setTotal,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
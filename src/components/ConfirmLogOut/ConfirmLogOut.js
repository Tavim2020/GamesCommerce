import React from 'react';
import { LogOutContainer } from './style/ConfirmLogOutStyle';
import { GlobalContext } from '../../Context/GlobalContext';
import { firebase } from '../../services/firebase';



const ConfirmLogOut = () => {

    const {confirmLogOut, setConfirmLogOut, setLoginGoogle, setNameUser,
            setAvatar} = React.useContext(GlobalContext);

    function logOutSite(){
        firebase.auth().signOut().then(() => {
            setLoginGoogle(false);
            setNameUser('');
            setAvatar('');
            setConfirmLogOut(false);
          }).catch((error) => {
            alert('Ooopsss... Infelizmente algo deu errado. Verifique sua conexão e tente novamente.')
          });
    }

    function cancellogOut(){
        setConfirmLogOut(false);
    }

    return (
        <>
            {confirmLogOut && <LogOutContainer>

                <h5>Tem Certeza que Deseja Fazer LogOut?</h5>

                <div>
                        <button onClick={logOutSite}>Sim</button>

                        <button onClick={cancellogOut}>Não</button>
                </div>

                
            </LogOutContainer>}
        </>
    )
}

export default ConfirmLogOut;

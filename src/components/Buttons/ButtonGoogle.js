import React from 'react';
import { Button, NameUserContainer } from './style/ButtonGoogleStyle';
import GoogleIcon from '../../assets/google.png';
import { GlobalContext } from '../../Context/GlobalContext';
// import { auth, firebase } from '../../services/firebase';


const ButtonGoogle = () => {

    const { loginGoogle, 
        //setLoginGoogle, 
        nameUser, 
        //setNameUser, 
        setConfirmLogOut,
        avatar, 
        //setAvatar
     } = React.useContext(GlobalContext);

    

    // function validationFirebase(){
    //     const provider = new firebase.auth.GoogleAuthProvider();

    //     auth.signInWithPopup(provider).then(result => {
    //         try{
    //             setNameUser(result.additionalUserInfo.profile.name.split(' ')[0]);
    //             setLoginGoogle(true);
    //             setAvatar(result.additionalUserInfo.profile.picture);

    //         }catch(error){
    //             new Error('Erro ao efetuar o login.')
    //             setLoginGoogle(false);
    //             setNameUser('');
    //         }
    //     });
    // }

    

    function confirmLogOutPlease(){
        setConfirmLogOut(true);
    }

    return (
        <>
            {!loginGoogle ? (
            <Button 
            //onClick={validationFirebase}
            >

                <img src={GoogleIcon} alt={'Google Icon'} />

                Login Google
                
            </Button>
            ) : (
                <NameUserContainer>

                    <div className='avatarAndName'>

                        {avatar && <img src={avatar} alt={nameUser} />}

                        {nameUser !== '' && <h4>Hello {nameUser},</h4>}

                    </div>

                    {nameUser !== '' && <button onClick={confirmLogOutPlease}>Sair</button>}

                </NameUserContainer>

            )}
        </>
    )
}

export default ButtonGoogle;

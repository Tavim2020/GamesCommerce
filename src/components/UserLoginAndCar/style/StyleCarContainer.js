import styled from 'styled-components';


export const CarContainer = styled.div`
    width: 7vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    transition: 0.5s;
    position: relative;

    &:hover{
        box-shadow: ${({arrayCar}) => arrayCar.length >= 1 ? 'inset 0 0 1vw var(--color-orange), 0 0 1vw #4040ff' : ''};
    };

    svg{    
        width: 5vw;
        cursor: pointer;
        
    }

    &:hover{
        svg{
            g{
                g{
                    fill: ${({countCar}) => countCar >= 1 ? '#4040ff' : ''};
                }
            }
        }

        div{
            h5{
                color: ${({countCar}) => countCar >= 1 ? '#4040ff' : ''};
            }
        }

        .carContainer{
            box-shadow: inset 0 0 1vw var(--color-orange), 0 0 1vw #4040ff;
        }

    }


`;

export const CountProduct = styled.div`
    position: absolute;
    width: 1.5vw;
    height: 1.5vw;
    border-radius: 50%;
    background-color: var(--white);
    top: 17%;
    right: 13%;
    display: flex;
    align-items: center;
    justify-content: center;

    h5{
        font-size: 1vw;
        color: var(--color-orange);
    }
`;


export const ContainerCarItemsDiv = styled.div`
    width: 20vw;
    height: max-content;
    position: absolute;
    border: 0.16vw solid var(--white);
    border-top-left-radius: 1.2vw;
    border-bottom-left-radius: 1.2vw;
    border-bottom-right-radius: 1.2vw;
    background-color: var(--color-clear);
    top: 70%;
    right: 40%;
    z-index: 12;


    .products{
        text-align: center;
        margin-top: 1vw;
        color: var(--background-supera);
        font-size: 1.3vw;
    }


    .wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: auto;

        &:hover{
            box-shadow: 0 0 1vw var(--background-supera);
        }
    
        div{
            margin: 0 auto;
            width: 90%;
            display: flex;
            align-items: center;

            
            .imageContainer{
                width: 30%;
                margin-top: 2vw;;
                margin-bottom: 2vw;
                img{
                    width: 5vw;
                }
            }

            .titleAndPrice{
                width: 70%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;

                h5{
                    text-align: center;
                    font-size: 1vw;
                    color: var(--background-supera);
                }

                h6{
                    text-align: center;
                    font-size: 0.8vw;
                    color: #008000;
                }

                .remove{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;

                    img{
                        width: 1.2vw;
                        cursor: pointer;
                        transition: transform 0.5s;

                        &:hover{
                            transform: scale3d(1.1, 1.1, 1.1);
                        }
                    }
                }
            }
        }
    }

    .total{
        margin: 0 auto;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        h4{
            font-size: 1vw;
            display: flex;
            justify-content: space-evenly;
            
        }

        strong{
            font-size: 1.1vw;
        }

        
    }    


    .division{
        margin: 0 auto;
        width: 80%;
        height: 0.08vw;
        background-color: var(--background-supera);
        display: flex;
        margin-top: 0.5vw;
        margin-bottom: 0.5vw;
    }

    .finalyTotal{
        margin: 0 auto;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1vw;

        h6{
            font-size: 1.2vw;
            display: flex;
            justify-content: space-evenly; 
        }

        strong{
            font-size: 1.2vw;
        }
    }

    .moveToPayment{
        margin: 0 auto;
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

   

`;
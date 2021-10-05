import React from 'react';
import { SlideBestGamesContainer, TreeBallMoveImage } from './style/styleSlide';
import { ArrayDestaquesGames } from '../../Object/ArrayDestaqueGames';
import CapaAndText from '../CapaAndText/CapaAndText';


const SlideBestGames = () => {

    const slide = React.useRef(null);

    const [first, setFirst] = React.useState(true);
    const [second, setSecond] = React.useState(false);
    const [third, setThird] = React.useState(false);
    const [fourth, setFourth] = React.useState(false);


    const activeSlide = React.useRef(null);

    function SlideON(){
        activeSlide.current = setTimeout(secondTrue, 3000)
    }

    function secondTrue(){
        setFirst(false);
        setSecond(true);
        setThird(false);
        setFourth(false);
        if(slide){
            slide.current.style.backgroundImage = `url(${ArrayDestaquesGames[1].background})`;
        }

        activeSlide.current = setTimeout(thirdTrue, 3000)
    }

    function thirdTrue(){
        setFirst(false);
        setSecond(false);
        setThird(true);
        setFourth(false);
        if(slide){
            slide.current.style.backgroundImage = `url(${ArrayDestaquesGames[2].background})`;
        }

        activeSlide.current = setTimeout(fourthTrue, 3000)
    }

    function fourthTrue(){
        setFirst(false);
        setSecond(false);
        setThird(false);
        setFourth(true);
        if(slide){
            slide.current.style.backgroundImage = `url(${ArrayDestaquesGames[3].background})`;
        }

        activeSlide.current = setTimeout(firstTrue, 3000)
    }

    function firstTrue(){
        setFirst(true);
        setSecond(false);
        setThird(false);
        setFourth(false);
        if(slide){
            slide.current.style.backgroundImage = `url(${ArrayDestaquesGames[0].background})`;
        }

        activeSlide.current = setTimeout(secondTrue, 3000)
    }

    React.useEffect(()=>{
        window.addEventListener('load', SlideON)  /* eslint-disable */
    }, [])



    function moveSlide(event){
            clearTimeout(activeSlide.current)
            if(slide){
                slide.current.style.backgroundImage = `url(${ArrayDestaquesGames[event.target.id].background})`;
            }

            if(Number(event.target.id) === 0){
                firstTrue()
            }

            else if(Number(event.target.id) === 1){
               secondTrue()
            }

            else if(Number(event.target.id) === 2){
                thirdTrue()
            }

            else if(Number(event.target.id) === 3){
               fourthTrue()
            }
    }


    

    return (
        <SlideBestGamesContainer ref={slide} >

            {first && <CapaAndText id={0}/>}


            {second && <CapaAndText id={1}/>}


            {third && <CapaAndText id={2}/>}


            {fourth && <CapaAndText id={3}/>}



            <TreeBallMoveImage>

                <div className='ball'>

                    <div className='center' 
                    onClick={moveSlide}
                    id='0' 
                    first={first.value}
                    style={{ backgroundColor: first ? 'var(--color-orange)' : ''}}></div>

                </div>

                <div className='ball' >

                    <div className='center' 
                    id='1' 
                    onClick={moveSlide}
                    second={second.value}
                    style={{ backgroundColor: second ? 'var(--color-orange)' : ''}}></div>

                </div>

                <div className='ball'>

                    <div className='center' 
                    id='2' 
                    onClick={moveSlide}
                    third={third.value}
                    style={{ backgroundColor: third ? 'var(--color-orange)' : ''}}></div>

                </div>

                <div className='ball' >

                    <div className='center' 
                    id='3' 
                    onClick={moveSlide}
                    fourth={fourth.value}
                    style={{ backgroundColor: fourth ? 'var(--color-orange)' : ''}} ></div>

                </div>
                
            </TreeBallMoveImage>
            
        </SlideBestGamesContainer>
    )
}

export default SlideBestGames;

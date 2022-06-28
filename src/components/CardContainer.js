import { useEffect, useState } from "react";
import './CardContainer.css';
// import testimage from '../assets/lightning.jpg');

function CardContainer(props){
    const [cards, setcards] = useState([]);
    const [currentscore, setcurrentscore] = useState(0);
    const [bestscore, setbestscore] = useState(0);

    useEffect(()=>{
        setcards([
    {image: require('../assets/lightning.jpg'), id: 0, clicked: false, descriptor:'lightning'},
    {image: require('../assets/moon.jpg'), id: 1, clicked: false, descriptor:'moon'},
    {image: require('../assets/morning.jpg'), id: 2, clicked: false, descriptor:'morning'},
    {image: require('../assets/night.jpg'), id: 3, clicked: false, descriptor:'night'},
    {image: require('../assets/rain.jpg'), id: 4, clicked: false, descriptor:'rain'},
    {image: require('../assets/river.jpg'), id: 5, clicked: false, descriptor:'river'},
    {image: require('../assets/sea.jpg'), id: 6, clicked: false, descriptor:'sea'},
    {image: require('../assets/sky.jpg'), id: 7, clicked: false, descriptor:'sky'},
    {image: require('../assets/snow.jpg'), id: 8, clicked: false, descriptor:'snow'},
    {image: require('../assets/stars.jpg'), id: 9, clicked: false, descriptor:'stars'},
    {image: require('../assets/sun.jpg'), id: 10, clicked: false, descriptor:'sun'},
    {image: require('../assets/tornado.jpg'), id: 11, clicked: false, descriptor:'tornado'}]);
    // Shuffle();
    },[]);
    /*
    needed: 
    function to randomize display of images then update after click
    function to keep track of score
    function to keep track of best score
    */
   const Clicked = (e)=>{
    Scorekeeping(e);
    Shuffle();
   }

   const Shuffle = () =>{
    let availablenums = [];
    for(let i=0; i< cards.length;i++){
        availablenums.push(i);
    }
    let newarray = cards.slice();
    for(let i=0; i< cards.length;i++){
        const curindex = Math.floor(Math.random() * availablenums.length);
        const number = availablenums[curindex];
        newarray[i].id = number;
        availablenums.splice(curindex, 1);
    }
    newarray.sort((a,b)=>{return a.id - b.id});
    setcards(newarray);
   }

   const Scorekeeping = (e) =>{
    let newarray = cards.slice();
    const id = e.currentTarget.id;
    // const currentscorevar = currentscore;
    // const currentbestscorevar = bestscore;
    if(newarray[id].clicked === true){
        if(currentscore>bestscore){
            setbestscore(currentscore);
            props.setbestscores(currentscore);
        }
        setcurrentscore(0);
        props.setcurrentscores(0);

        //unclick all the cards for the new round:
        let newstartcards = cards.slice();
        for (let i=0; i<cards.length;i++){
            newstartcards[i].clicked = false;
        }
        setcards(newstartcards);

    }
    else if(newarray[id].clicked === false){
        newarray[id].clicked = true;
        setcurrentscore(currentscore + 1);
        props.setcurrentscores(currentscore + 1);
        if(currentscore + 1>bestscore){
            setbestscore(currentscore+1);
            props.setbestscores(currentscore+1);
        }
    }
    else{
        console.log('ERROR');
    }
   }

    return(
    <div className="cardContainer">
        {cards.map(function(card, index){
            if(card.id===index){
            return <div className="playingcard" key={index} id={card.id} onClick={Clicked}>
                <img src={card.image} alt={card.descriptor}/>
                <p>{card.descriptor}</p>
            </div>
            }
            else return null;
        })

        }
    </div>
    );
}
export default CardContainer;
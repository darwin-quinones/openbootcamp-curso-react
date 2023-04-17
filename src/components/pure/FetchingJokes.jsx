import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { getRandomJoke } from '../../services/fetchJokeService';

const FetchingJokes = () => {
    let [arrayJokesClicked, setArrayJokesClicked ] = useState([]);
    
    let objJokesClicked = {}
    const [joke, setJoke] = useState(null)
    let [likes, setLikes] = useState(0)
    let [dislikes, setDislikes] = useState(0)
    let [canVote, setCanVote] = useState(true)
    let [canDislike, setCanDislike] = useState(true)


    // useEffect(() => {
    //     obtainRandomJoke(); 
    // }, [])

    const obtainRandomJoke = async () => {
        getRandomJoke()
            .then((response) => {
                setJoke(response)
            })
            .catch((error) => { console.log(`Something went wrong fetching joke: ${error}`) })
            .finally(() => { console.log('SUCCESSFUL: joke has been fetched') })
    }

    const thumbUp = () => {
        console.log('arrayJokesClicked', arrayJokesClicked)
        if(arrayJokesClicked.length > 0) {
            let jokeClicked = arrayJokesClicked.find(j => j.id === joke.id && j.like === true)
            if(jokeClicked){
                let jokeIndex = arrayJokesClicked.findIndex(j => {return j.id === joke.id && j.like === true})
                console.log('index:', jokeIndex)
                setLikes(likes = likes - 1)
                arrayJokesClicked.splice(jokeIndex, 1)
                setArrayJokesClicked(arrayJokesClicked)
                
            }else{
                setArrayJokesClicked([...arrayJokesClicked, {id:joke.id, like: true}])
                setLikes(likes = likes + 1)
            }
            //console.log('jokeClicked: ', jokeClicked)
            
        }else{
            setArrayJokesClicked([...arrayJokesClicked, {id:joke.id, like: true}])
            setLikes(likes = likes + 1)
        }
        // console.log('arrayJokesClicked', arrayJokesClicked)
        // let jokeClicked = arrayJokesClicked.find(j => j.id === joke.id && j.like === true)
        // // console.log(joke.id)
       
        // console.log('jokeClicked' , jokeClicked)
       
         
        // if(arrayJokesClicked === undefined){
        //     setArrayJokesClicked(arrayJokesClicked.push({id:joke.id, like: true}))
        //     setLikes(likes = likes + 1)
        //     console.log('llego')
        // }else{
        //     setLikes(likes = likes - 1)
        // }
        // if (canVote) {
        //     setLikes(likes = likes + 1)
        // } else {
        //     setLikes(likes = likes - 1)
        // }
        
        
        
        setCanVote(!canVote)
    }

    function thumbDown() {

        console.log('arrayJokesClicked', arrayJokesClicked)
        if(arrayJokesClicked.length > 0){
            // find the joke clicked
            let jokeClicked = arrayJokesClicked.find(j => {return j.id === joke.id && j.like === true})
            // if(jokeClicked){
            //     setLikes(likes = likes - 1)
            // }
            let jokeClickedFalse = arrayJokesClicked.find(j => {return j.id === joke.id && j.like === false})
            if(jokeClickedFalse){
                // setLikes(likes = likes - 1)
                setDislikes(dislikes = dislikes - 1 )
                let jokeIndex = arrayJokesClicked.findIndex(j => j.id === joke.id && j.like === false)
                arrayJokesClicked.splice(jokeIndex, 1)
                setArrayJokesClicked(arrayJokesClicked)
                

            }else{
                setDislikes(dislikes = dislikes + 1 )
                setArrayJokesClicked([...arrayJokesClicked, {id: joke.id, like: false}])
            }

        }else{
            //setLikes(likes = likes - 1)
            setArrayJokesClicked([...arrayJokesClicked, {id: joke.id, like: false}])
            setDislikes(dislikes = dislikes + 1 )
        }

        // if (canDislike) {
        //     setDislikes(dislikes = dislikes + 1)
        // } else {
        //     setDislikes(dislikes = dislikes - 1)
        // }

        // setCanDislike(!canDislike)




    }

    return (
        <div>
            <h1>Example of fetching Joke</h1>
            <h4>Ejercicios sesiones 19, 20 y 21</h4>
            <div>
                {
                    joke != null ?
                        (
                            <div>
                                <p>{joke.value}</p>

                                <ThumbUp onClick={() => thumbUp()} color={canVote ? '' : 'primary'} style={{ marginBottom: 10 }} />
                                <ThumbDown onClick={() => thumbDown()} color={canDislike ? '' : 'primary'} style={{ marginLeft: 10, marginBottom: 10 }} />
                            </div>


                        )
                        :
                        (<p>No joke to show :) Click the button to genere one</p>)
                }


                <p>You've liked {likes} jokes and disliked {dislikes}</p>
            </div>

            <Button variant='contained' onClick={() => obtainRandomJoke()}>
                Generate new Joke
            </Button>

        </div>
    );
}

export default FetchingJokes;

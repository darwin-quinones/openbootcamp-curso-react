import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { getRandomJoke } from '../../services/fetchJokeService';

const FetchingJokes = () => {
    let jokeIds = []
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
        if(jokeIds.length > 0) {console.log('es mayor')}
        jokeIds.push(joke.id)
        let jokeClicked = jokeIds.find(id => id === joke.id)
        // console.log(joke.id)
       
        console.log(jokeClicked)
        console.log(jokeIds)
        if(jokeClicked){
            setLikes(likes = likes - 1)
        }else{
            setLikes(likes = likes + 1)
        }
        // if (canVote) {
        //     setLikes(likes = likes + 1)
        // } else {
        //     setLikes(likes = likes - 1)
        // }
        console.log('llego')
    
        
        setCanVote(!canVote)
    }

    function thumbDown() {
        if (canDislike) {
            setDislikes(dislikes = dislikes + 1)
        } else {
            setDislikes(dislikes = dislikes - 1)
        }

        setCanDislike(!canDislike)
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

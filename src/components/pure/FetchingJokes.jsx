import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { ThumbUp, ThumbDown } from '@mui/icons-material';
import { getRandomJoke } from '../../services/fetchJokeService';

const FetchingJokes = () => {
    let [arrayJokesClicked, setArrayJokesClicked ] = useState([]);
    const [joke, setJoke] = useState(null)
    let [likes, setLikes] = useState(0)
    let [dislikes, setDislikes] = useState(0)


    // useEffect(() => {
    //     obtainRandomJoke(); 
    // }, [])

    const obtainRandomJoke = async () => {
        getRandomJoke()
            .then((response) => {
                setJoke(response)
                // A WAY TO ADD ANOTHER PROPERTY TO AN OBJECT ALREADY
                setJoke(joke => ({...joke, canLike: true}))
                setJoke(joke => ({...joke, canDislike: true}))
            })
            .catch((error) => { console.log(`Something went wrong fetching joke: ${error}`) })
            .finally(() => { console.log('SUCCESSFUL: joke has been fetched') })
    }

    const thumbUp = () => {
        
        if(arrayJokesClicked.length > 0) {
            
            let jokeClickedFalse = arrayJokesClicked.find(j => j.id === joke.id && j.like === false)
            if(jokeClickedFalse){
                let jokeIndexFalse = arrayJokesClicked.findIndex(j => j.id === joke.id && j.like === false)
                setDislikes(dislikes = dislikes - 1) 
                // setCanDislike(!canDislike)
                setJoke(joke => ({...joke, canDislike: true}))
                arrayJokesClicked.splice(jokeIndexFalse, 1)
                setArrayJokesClicked(arrayJokesClicked)
            }
            let jokeClicked = arrayJokesClicked.find(j => j.id === joke.id && j.like === true)
            if(jokeClicked){
                let jokeIndex = arrayJokesClicked.findIndex(j => {return j.id === joke.id && j.like === true})
                setLikes(likes = likes - 1)
                arrayJokesClicked.splice(jokeIndex, 1)
                setArrayJokesClicked(arrayJokesClicked)
                setJoke(joke => ({...joke, canLike: true}))
                
            }else{
                setArrayJokesClicked([...arrayJokesClicked, {id:joke.id, like: true}])
                setLikes(likes = likes + 1)
                setJoke(joke => ({...joke, canLike: false}))
            }

            
        }else{
            setArrayJokesClicked([...arrayJokesClicked, {id:joke.id, like: true}])
            setLikes(likes = likes + 1)
            setJoke(joke => ({...joke, canLike: false}))
        }  
    }

    function thumbDown() {
        if(arrayJokesClicked.length > 0){
            // find the joke clicked
            let jokeClicked = arrayJokesClicked.find(j => {return j.id === joke.id && j.like === true})
            if(jokeClicked){
                let jokeIndex = arrayJokesClicked.findIndex(j => {return j.id === joke.id && j.like === true})
                setLikes(likes = likes - 1)
                // setCanLike(!canLike)
               
                arrayJokesClicked.splice(jokeIndex, 1)
                setArrayJokesClicked(arrayJokesClicked)
                setJoke(joke => ({...joke, canLike: true}))
            }
            let jokeClickedFalse = arrayJokesClicked.find(j => {return j.id === joke.id && j.like === false})
            if(jokeClickedFalse){
                // setLikes(likes = likes - 1)
                setDislikes(dislikes = dislikes - 1 )
                let jokeIndexFalse = arrayJokesClicked.findIndex(j => j.id === joke.id && j.like === false)
                arrayJokesClicked.splice(jokeIndexFalse, 1)
                setArrayJokesClicked(arrayJokesClicked)   
                setJoke(joke => ({...joke, canDislike: true}))           
            }else{
                setDislikes(dislikes = dislikes + 1 )
                setArrayJokesClicked([...arrayJokesClicked, {id: joke.id, like: false}])
                setJoke(joke => ({...joke, canDislike: false}))
            }

        }else{
            //setLikes(likes = likes - 1)
            setArrayJokesClicked([...arrayJokesClicked, {id: joke.id, like: false}])
            setDislikes(dislikes = dislikes + 1 )
            setJoke(joke => ({...joke, canDislike: false}))
        }
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

                                <ThumbUp onClick={() => thumbUp()} color={ joke.canLike ? '' : 'primary'} style={{ marginBottom: 10 }} />
                                <ThumbDown onClick={() => thumbDown()} color={joke.canDislike ? '' : 'primary'} style={{ marginLeft: 10, marginBottom: 10 }} />
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

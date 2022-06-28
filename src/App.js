/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-undef */
// App.js



import React from 'react';
import {useState,useEffect} from "react";
import './App.css';

const App=()=> {

const [songs,setSongs] = useState([
    {
        "title": "$orries",
        "artist": "Peachy!",
        "album": " Shiloh",
        "track": "$orries",
        "year": "1",
        "img_src": "./songs_images/$orries_Cover (front)_e.jpg",
        "src": "./songs/$orries.mp3"
    },
    {
        "title": "Walk but in a garden",
        "artist": "potsu",
        "album": "Walk but in a garden",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Walk but in a garden_Cover (front)_e.jpg",
        "src": "./songs/Walk but in a garden.mp3"
    },
    {
        "title": "trust u",
        "artist": "The Deli",
        "album": "Vibes 2",
        "track": "12",
        "year": "",
        "img_src": "./songs_images/trust u_Cover (front)_e.jpg",
        "src": "./songs/trust u.mp3"
    },
    {
        "title": "Warm breeze",
        "artist": "Oatmello",
        "album": "Snapshots",
        "track": "3",
        "year": "",
        "img_src": "./songs_images/Warm breeze_Cover (front)_e.jpg",
        "src": "./songs/Warm breeze.mp3"
    },
    {
        "title": "Affection",
        "artist": "Jinsang",
        "album": "Life",
        "track": "15",
        "year": "",
        "img_src": "./songs_images/Affection_Cover (front)_e.jpg ",
        "src": "./songs/Affection.mp3"
    },
    {
        "title": "We let go",
        "artist": "Wun Two",
        "album": "Penthouse",
        "track": "4",
        "year": "",
        "img_src": "./songs_images/We let go_Cover (front)_e.jpg",
        "src": "./songs/We let go.mp3"
    },
   
    {
        "title": "Baby You're Worth It",
        "artist": "Kina",
        "album": "Baby You're Worth It",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/Baby You're Worth It_Cover (front)_e.jpg",
        "src": "./songs/Baby You're Worth It.mp3"
    },
    

]);


const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])

  return (
    <div className="App">
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  );
}

export default App;
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ShowDog = () => {
  const [dogImg, setDogImg] = useState('');
  const { breed, subbreed } = useParams();

  console.log(breed);
  console.log(subbreed);

  useEffect(() => {
    const fetchImage = async () => {
      let imageUrl = '';
      if (subbreed) {
        imageUrl = `https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`;
      }
      else {
        imageUrl = `https://dog.ceo/api/breed/${breed}/images/random`;
      }
      const resp = await axios.get(imageUrl);
      setDogImg(resp.data.message);
    }
    fetchImage();
  }, []);
  return (
    <div>
      <h1>Show Dog</h1>
      <h4>{breed}</h4>
      <h4>{subbreed}</h4>
      <img src={dogImg} alt={breed} />
    </div>
    
  )
}

export default ShowDog;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dog = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    async function apiCall() {
      const dogURL = "https://dog.ceo/api/breeds/list/all";
      const response = await axios.get(dogURL);
      
      console.log(response.data.message);
      const dogBreeds = Object.keys(response.data.message);
      console.log(dogBreeds);
      

      const dogBreedLinks = [];
      
      for (let i = 0; i < dogBreeds.length; i++){
        console.log(`${i}: ${dogBreeds[i]}`);
        const dogBreed = dogBreeds[i];
        const subBreeds = response.data.message[dogBreed];

        if (subBreeds.length > 0) {
          console.log(subBreeds);
          for (let j = 0; j < subBreeds.length; j++){
            console.log(`${dogBreed}${subBreeds[j]}`);
            dogBreedLinks.push(`${dogBreed}/${subBreeds[j]}`);
          }
        } else {
          console.log(dogBreed)
          dogBreedLinks.push(dogBreed);
        }
      }
      console.log(dogBreedLinks);
      setBreeds(dogBreedLinks);
    }
    apiCall();
  }, []);

  return (
    <ul>
      {breeds.map((breed, index) => (
        //we have a link 
        // <li key={index}>{breed}</li>
        <Link to={`/image/${breed}`} key={index}>
          {breed}
        </Link>
      ))}
    </ul>
  );
};

export default Dog;

// state to store breed names
// effect to make API call
// map through breeds in return


<h2 key={comment.id}>{comment.fields.comment}</h2>
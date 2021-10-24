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
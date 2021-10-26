import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/questions?api_key=keymXba1arq3mAVA3';

const QuestionForm = () => {

  const [email, setEmail] = useState('');
  const [yourname, setYourName] = useState('');
  const [question, setQuestion] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true);

  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    console.log('POST');
    const newQuestion = {
      records: [
        {
          fields: {
            yourname,
            email,
            question
          }
        }
      ]
    }
    await axios.post(API_URL, newQuestion);
    setToggleFetch(!toggleFetch);
  }


  return (
    <div>
      <form onSubmit={handlePostRequest}>
          <label htmlFor="yourname">Your Name: </label>
          <input type="text" id="yourname" onChange={(ev) => setYourName(ev.target.value)} />
          <label htmlFor="email">Your Comment: </label>
          <input type="text" id="email" onChange={(ev) => setEmail(ev.target.value)} />
          <label htmlFor="question">Question: </label>
          <input type="text" id="question" onChange={(ev) => setQuestion(ev.target.value)} />
        <br />
          <input type="submit" />
        </form>
    </div>
  )
}
export default QuestionForm;
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
          <label htmlFor="yourname"> </label>
        <input type="text" placeholder="Name" id="yourname" onChange={(ev) => setYourName(ev.target.value)} />
        <br />
          <label htmlFor="email"> </label>
        <input type="text" placeholder="Email" id="email" onChange={(ev) => setEmail(ev.target.value)} />
        <br />
          <label htmlFor="question"> </label>
          <input type="text" placeholder="Question" id="question" onChange={(ev) => setQuestion(ev.target.value)} />
        <br />
          <input type="submit" />
        </form>
    </div>
  )
}
export default QuestionForm;
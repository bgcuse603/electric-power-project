import { useState } from 'react';
import axios from 'axios';

const API_URL = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/comments?api_key=keymXba1arq3mAVA3';

const CommentForm = ({recordId, toggleFetch, setToggleFetch}) => {

  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');

  let referenceid = recordId;

  const handlePostRequest = async (ev) => {
    ev.preventDefault();
    console.log('POST');
    const newComment = {
      records: [
        {
          fields: {
            referenceid,
            comment,
            author
          }
        }
      ]
    }
    await axios.post(API_URL, newComment);
    setToggleFetch(!toggleFetch);
  }


  return (
    <div>
      <form onSubmit={handlePostRequest}>
        <label htmlFor="author"> </label>
        <input type="text" placeholder="Name" id="author" onChange={(ev) => setAuthor(ev.target.value)} />
        <br />
        <label htmlFor="comment"> </label>
        <input type="textarea" placeholder="Comment" id="comment" onChange={(ev) => setComment(ev.target.value)} />
        <br />
        <input type="submit" />
      </form>
    </div>
  )
}
export default CommentForm;

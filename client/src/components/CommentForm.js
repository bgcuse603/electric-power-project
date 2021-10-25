import { useState } from 'react';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

const API_URL = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/comments?api_key=keymXba1arq3mAVA3';

const CommentForm = (props) => {

  const [comment, setComment] = useState('');
  const [author, setAuthor] = useState('');
  const [toggleFetch, setToggleFetch] = useState(true);
  const [redirectHome, setRedirectHome] = useState();
  console.log(props.recordId);
  let referenceid = props.recordId;

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
    setRedirectHome(true);
  }

  // if (redirectHome) {
  //   return <Redirect to='/'/>
  // }

  return (
    <div>
      {/* <form> */}
      <form onSubmit={handlePostRequest}>
          <label htmlFor="author">Your Name: </label>
          <input type="text" id="author" onChange={(ev) => setAuthor(ev.target.value)} />
          <label htmlFor="comment">Your Comment: </label>
          <input type="text" id="comment" onChange={(ev) => setComment(ev.target.value)} />
        <br />
          <input type="submit" />
        </form>
    </div>
  )
}
export default CommentForm;

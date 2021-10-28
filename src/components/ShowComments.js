import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm.js';


const ShowComments = () => {
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const recordId = useParams();

  useEffect(() => {
    async function apiCall() {
      const APIUrl = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/comments';
      const apiKey = '?&api_key=keymXba1arq3mAVA3';

      const commentURL = (`${APIUrl}${apiKey}`);
      const response = await axios.get(commentURL);
      setComments(response.data.records);
    }
    apiCall();
  }, [toggleFetch]);

  let recordSpecificComments = [];
  if (comments.length !== 0) {
    let j = 0;
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].fields.referenceid === recordId.id) {
        recordSpecificComments[j] = comments[i];
        j++;
      }
    }
  } else {
    recordSpecificComments = [
      {
        "id": "loading",
        "fields": {
          "comment": "loading",
          "referenceid": "loading",
          "author": "loading"
        },
        "createdTime": "loading"
      },
    ];
  }

  return (
    <div>
      <h3>leave a comment</h3>
      <CommentForm
        recordId={recordId.id}
        toggleFetch={toggleFetch}
        setToggleFetch={setToggleFetch}
        />
      <h3>comments</h3>
      <ul>
        {recordSpecificComments.map((comment) => (
        <li key={comment.id}>
            <h5>{comment.fields.author}</h5>
            <em>{comment.fields.comment}</em>
        </li>
      ))}
      </ul>
      <br />
      <br />
    </div>
  )
}

export default ShowComments;

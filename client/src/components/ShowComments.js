import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm.js';


const ShowComments = () => {
  const [comments, setComments] = useState([]);
  const recordId = useParams();
  console.log('im in show comments');
  console.log(recordId);
  console.log(`${recordId.id}`);

  useEffect(() => {
    async function apiCall() {
      const APIUrl = 'https://api.airtable.com/v0/appfMQimLWOpFJ1a4/comments';
      const apiKey = '?&api_key=keymXba1arq3mAVA3';

      const commentURL = (`${APIUrl}${apiKey}`);
      const response = await axios.get(commentURL);
      console.log(response.data.records);
      setComments(response.data.records);
    }
    apiCall();
  }, []);

  console.log('comments');
  console.log(comments);

  let recordSpecificComments = [];
  if (comments.length !== 0) {
    let j = 0;
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].fields.referenceid === recordId.id) {
        console.log(j);
        console.log(comments[i]);
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

  console.log('specific comments');
  console.log(recordSpecificComments);
  return (
    <div>
      <h1>Leave a Comment:</h1>
      <CommentForm
        recordId={recordId.id}
        />
      <h1>COMMENTS:</h1>
      <ul>
        {recordSpecificComments.map((comment) => (
        <li key={comment.id}>
            <h5>{comment.fields.author}</h5>
            <em>{comment.fields.comment}</em>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default ShowComments;

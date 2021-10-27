import { useState } from 'react';
import {Redirect} from 'react-router-dom'


const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setRedirect(true);
  }
  

  if (redirect === true) {
    console.log('im within the if');
    return <Redirect to={`/search/${searchTerm}`}/>
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
          <label htmlFor="search" />
          <input type="text" placeholder= "Search" id="search" onChange={(ev) => setSearchTerm(ev.target.value)}/>
        <br />
          <input type="submit" />
        </form>
    </div>
  )
}
export default SearchBar;
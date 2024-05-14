// DERIVED STATES

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  console.log('renderizou')

  useEffect(() => {
    fetch('https://api.github.com/users/alekaimer/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }
  , []);

  // CHANGE THE CODE BELOW
  // const [filteredRepos, setFilteredRepos] = useState([]);
  // useEffect(() => {
  //   searchTerm.length && setFilteredRepos(repos.filter(repo => repo.name.includes(searchTerm)));
  // }, [searchTerm, repos]);

  //FOR THIS CODE TO RESOLUTION RE-RENDER BASED ON DERIVED STATES
  const filteredRepos = searchTerm.length > 0
    ? repos.filter(repo => repo.name.includes(searchTerm))
    : repos

  return (
    <div className="App">
      <input
        type={'text'} 
        placeholder={'Buscar...'} 
        onChange={e=>setSearchTerm(e.target.value)}
        value={searchTerm}
      />
      
      <ul>
        {
          filteredRepos.map(repo => <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></li>)
        }
      </ul>
    </div>
  );
}

export default App;

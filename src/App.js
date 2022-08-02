// DERIVED STATES

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState('');

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
  //   search.length && setFilteredRepos(repos.filter(repo => repo.name.includes(search)));
  // }, [search, repos]);

  //FOR THIS CODE TO RESOLUTION RE-RENDER BASED ON DERIVED STATES
  const filteredRepos = repos.filter(repo => repo.name.includes(search))

  return (
    <div className="App">
      <input
        type={'text'} 
        placeholder={'Buscar...'} 
        onChange={e=>setSearch(e.target.value)}
        value={search}
      />
      <ul>
        {
          search.length > 0 ?
            filteredRepos.map(repo => <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></li>)
            :
            repos.map(repo => <li key={repo.id}><a href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}</a></li>)
        }
      </ul>
    </div>
  );
}

export default App;

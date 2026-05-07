import { useEffect, useState } from 'react';
import ActorList from './components/ActorList';
import Filters from './components/Filters';

const ACTORS_URL = 'https://lanciweb.github.io/demo/api/actors/';
const ACTRESSES_URL = 'https://lanciweb.github.io/demo/api/actresses/';

function App() {
  const [people, setPeople] = useState([]);
  const [filteredPeople, setFilteredPeople] = useState([]);

  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');

  const fetchPeople = (url, type) => {
    return fetch(url)
      .then(res => res.json())
      .then(data => {
        return data.map(person => ({
          id: person.id,
          name: person.name,
          birth_year: person.birth_year,
          nationality: person.nationality,
          biography: person.biography,
          image: person.image,
          awards: person.awards,
          movies: person.most_famous_movies,
          type: type
        }))
      })
  }
}

export default App

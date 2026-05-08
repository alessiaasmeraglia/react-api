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

  useEffect(() => {
    let mounted = true

    Promise.all([
      fetchPeople(ACTORS_URL, 'actor'),
      fetchPeople(ACTRESSES_URL, 'actress')
    ])
      .then(([actors, actresses]) => {
        if (mounted) {
          const all = [...actors, ...actresses]
          setPeople(all)
          setFilteredPeople(all)
        }
      })

    return () => {
      mounted = false
    }
  }, [])

  useEffect(() => {
    let result = people

    if (typeFilter !== 'all') {
      result = result.filter(p => p.type === typeFilter)
    }

    if (search !== '') {
      result = result.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    setFilteredPeople(result)
  }, [search, typeFilter, people])

  return (
    <div className="container">
      <h1>Actors</h1>
      <h3>List of actors fetched from an API</h3>

      <Filters
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />

      <ActorList people={filteredPeople} />
    </div>
  )
}

export default App

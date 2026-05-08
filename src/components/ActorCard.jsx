function ActorCard({ person }) {
    return (
        <div className="card">
            <img src={person.image} alt={person.name} />

            <h2>
                {person.name} ({person.type === 'actor' ? 'Attore' : 'Attrice'})
            </h2>

            <p><strong>Anno:</strong> {person.birth_year}</p>
            <p><strong>Nazionalità:</strong> {person.nationality}</p>

            <p className="bio">{person.biography}</p>

            <p><strong>Riconoscimenti:</strong> {person.awards}</p>

            {person.movies && (
                <>
                    <p><strong>Film famosi:</strong></p>
                    <ul>
                        {person.movies.map((movie) => (
                            <li key={movie}>{movie}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    )
}

export default ActorCard
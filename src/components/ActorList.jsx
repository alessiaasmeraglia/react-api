import ActorCard from './ActorCard'

function ActorList({ people }) {
    return (
        <div className="cards-grid">
            {people.map((person) => (
                <ActorCard key={person.id} person={person} />
            ))}
        </div>
    )
}

export default ActorList
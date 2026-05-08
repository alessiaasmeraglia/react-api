function Filters({ search, setSearch, typeFilter, setTypeFilter }) {
    return (
        <div className="filters">
            <input
                type="text"
                placeholder="Cerca per nome..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
            >
                <option value="all">Tutti</option>
                <option value="actor">Attori</option>
                <option value="actress">Attrici</option>
            </select>
        </div>
    )
}

export default Filters
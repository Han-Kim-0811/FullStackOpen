const Persons = ({ array, text }) => {
    const personsToShow = text === '' 
            ? array 
            : array.filter(person => person.name.includes(text)) 

    return (
        personsToShow.map(person =>
            <div key={person.name}>
                {person.name} {person.number}
            </div>
        )
    )
}

export default Persons
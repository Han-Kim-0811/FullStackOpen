import DelButton from './DelButton'

const Persons = ({ array, text, refresh }) => {
    const personsToShow = text === '' 
            ? array 
            : array.filter(person => person.name.includes(text)) 

    return (
        personsToShow.map(person =>
            <div key={person.id}>
                {person.name} {person.number}
                <DelButton 
                    id={person.id}
                    name={person.name}
                    refresh={refresh}
                />
            </div>
        )
    )
}

export default Persons
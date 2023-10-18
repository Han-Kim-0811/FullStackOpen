import DelButton from './DelButton'

const Persons = ({ array, text, setter }) => {
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
                    setter={setter}
                />
            </div>
        )
    )
}

export default Persons
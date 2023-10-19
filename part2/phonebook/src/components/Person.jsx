import DelButton from './DelButton'

const Persons = ({ array, text, setter, errMsg}) => {
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
                    errMsg={errMsg}
                />
            </div>
        )
    )
}

export default Persons
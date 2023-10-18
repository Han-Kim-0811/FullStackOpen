import personsService from '../services/persons'

const eventHandler = (id, name, setter) => {
    if(window.confirm(`Delete ${name}?`)) {
        personsService.delPerson(id)
        setter(id);
    }
}

const DelButton = ( {id, name, setter} ) => {
    return (
        <button onClick={() => eventHandler(id, name, setter)}>
            Delete
        </button>
    )
}

export default DelButton
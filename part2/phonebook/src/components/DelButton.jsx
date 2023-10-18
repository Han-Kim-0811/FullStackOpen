import personsService from '../services/persons'

const eventHandler = (id, name, refresh) => {
    if(window.confirm(`Delete ${name}?`)) {
        personsService.delPerson(id)
        refresh();
    }
}

const DelButton = ( {id, name, refresh} ) => {
    return (
        <button onClick={() => eventHandler(id, name, refresh)}>
            Delete
        </button>
    )
}

export default DelButton
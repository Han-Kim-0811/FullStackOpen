import personsService from '../services/persons'

const eventHandler = (id, name, setter, errMsg) => {
    if(window.confirm(`Delete ${name}?`)) {
        personsService.delPerson(id)
        .then(() => setter(name, id))
        .catch(() => errMsg(name, id))
    }
}

const DelButton = ( {id, name, setter, errMsg} ) => {
    return (
        <button onClick={() => eventHandler(id, name, setter, errMsg)}>
            Delete
        </button>
    )
}

export default DelButton
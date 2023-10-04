const PersonForm = (props) => {
    return (
        <form>
            <div>
                name: <input 
                value={props.name} 
                onChange={props.nameHandler} />
            </div>
            <div>
                number: <input 
                value={props.number}
                onChange={props.numberHandler}/>
            </div>
            <div>
                <button type="submit" onClick={props.clickHandler}>add</button>
            </div>
        </form>
    )
}

export default PersonForm
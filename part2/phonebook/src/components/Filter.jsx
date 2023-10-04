const Filter = ({ text, handler}) => {
    return (
        <div>
            filter shown with <input
            value={text} 
            onChange={handler}/>
        </div>
    )
}

export default Filter
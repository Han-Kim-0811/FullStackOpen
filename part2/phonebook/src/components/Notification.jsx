const Notification = ({ message }) => {
    if(message === null) {
        return null
    }
    
    const thisStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return(
        <div style={thisStyle}>
            {message}
        </div>
    )
} 

export default Notification
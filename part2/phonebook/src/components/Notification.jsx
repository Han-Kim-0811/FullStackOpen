const Notification = ({ message, styleColor }) => {
    if(message === null) {
        return null
    }
    
    const thisStyle = {
        color: styleColor,
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
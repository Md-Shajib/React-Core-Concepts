function UserCard (props){
    const userStyle = {
        backgroundColor: '#636e72',
        padding: '10px',
        border: '1px solid #fafafa',
        borderRadius: '8px',
        height: '200px',
        width: '200px',
    }
    const mailStyle = {
        fontSize: '15px'
    }

    const name = props.User.name;
    const email = props.User.email;
    return(
        <div>
            <div >
                <div style={userStyle}>
                    <h3>{name}</h3>
                    <p style={mailStyle}>{email}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard;
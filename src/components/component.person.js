
function Person(props){
    const style = {
      padding: '15px',
      borderRadius: '8px',
      backgroundColor: '#636e72',
      margin: '8px',
      border: '1px solid white',
      boxShadow: '5px 5px 8px #b2bec3',
      width: '350px',
      height: '100px'
    }
    return(
      <div style={style}>
        <h2 style={{padding: '0', margin: '0'}}>Name: {props.name}</h2>
        <p>profession: {props.profession}</p>
      </div>
    );
  }

  export default Person;
function Movie(props){
    return(
        <div style={{
            padding: 16,
            textAlign : "center",
            backgroundColor : "grey"
        }}>
            <img style={{
                height: 200,
                width : 150,
            }}
            src = {props.poster}
            />
            <h2 style={{
                color : "yellow"
            }}>{props.judul}</h2>
            <h3 style={{
                textAlign:"center"
            }}>{props.year}</h3>
            <button style={{
                backgroundColor:"aqua",
                color:"black",
                borderRadius:12,
                padding:6,
                width:200
            }} onClick = {props.klik}>Tonton</button>
        </div>
    )
}

export default Movie;
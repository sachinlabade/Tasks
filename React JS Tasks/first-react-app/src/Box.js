const Box =({name})=>{
    return(
        <span className="box">
            Below Is The Special For This Card
            <hr />
            <p>{name}</p>
            <hr />
            <button id="readme">Read ME</button>
        </span>
    )
}
export default Box;
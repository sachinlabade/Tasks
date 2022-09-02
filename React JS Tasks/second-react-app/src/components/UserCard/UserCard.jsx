import "./UserCard.css";
const UserCard =({name, mobNumber,email,add})=>{
    return(
        <div id="userCard">
            <h1>{name}</h1>
            <p>{mobNumber}</p>
            <p>{email}</p>
            <p>India</p>
        </div>
    )
}
export default UserCard;
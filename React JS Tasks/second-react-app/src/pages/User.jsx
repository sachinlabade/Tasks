import React from "react";
import UserCard from "../components/UserCard/UserCard";
const Users =()=>{
    return(
        <>
        <div id="userCards">
            <UserCard name="Kiran Madake"
            mobNumber="+9151251256"
            email="kiran@gmail.com"
            add="Shrigonda"/>
            <UserCard name="Sachin Labade"
            mobNumber="+9151545251256"
            email="sachin@gmail.com"
            add="Pargaon"/>
            <UserCard name="Dipak Ohol"
            mobNumber="+9151251410256"
            email="Diapk@gmail.com"
            add="Pimpri"/>
            <UserCard name="Gaurav Dhalwade"
            mobNumber="+915125145451256"
            email="gaurav@gmail.com"
            add="Pedgaon"/>
            </div>
            </>
    )
}
export default Users;
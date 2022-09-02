import React from "react";
const row=({srNo, StudName, RollNo, percentage, children})=>{
    return(
        <tr className="tableRow">
            <td>{srNo}</td>
            <td>{StudName}</td>
            <td>{RollNo}</td>
            <td>{percentage}</td>
            <td>{children}</td>
        </tr>
        
    );
};
export default row;
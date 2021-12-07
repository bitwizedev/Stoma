import React from "react";



export default function CurrentData(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return(
        <p>Current date is {date}</p>
    );
}
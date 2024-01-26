import React from "react";

const Greeting = () => {
    return (
        <>
           <div>
            <Person/>
            <Message/>
           </div>
        </>

    );

}
const Person = ()=><h2>Srinivas chaligeri</h2>;
const Message = ()=>{
 return <p>this is my message</p>
};
// const Greeting = ()=>{
//     return React.createElement("div",{},React.createElement("h2",{},"This is brand New ReactJs Application"));
// }

export default Greeting;
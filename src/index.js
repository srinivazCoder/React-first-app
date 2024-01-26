
import React from 'react';
import ReactDOM from "react-dom/client";
import "./index.css";
import bannana from './books';
import Book from './Book';


const BookList = () => {
    const getBook = (id) => {
        console.log(id)
        const book1 = bannana.find((e) => e.id == id);
        console.log(book1)
        alert(`${book1.title}`)
    }
    return (
    <>
        <h1>Amezon best sellers</h1>
        <section className='booklist'>
            {/* <h1>Best selling Books</h1> */}
            {bannana.map((e, index) => {
                return <Book {...e} key={e.id} getBook={getBook} number={index} />
            })}

        </section>
    </>
    )
}





// const Image = () => <img src='./images/book1.jpg' alt='Atomic Habits'/>
// const Title = () => <h2>Atomic Habits</h2>
// const Author = () => {
//     const inlineHeadingStyle = {color:"#617d98",fontSize:'0.75rem',marginTop:'0.5rem'}
//     return (
//         <h4 style={inlineHeadingStyle}>James Clearr</h4>
//     )
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(<BookList />);
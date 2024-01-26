const Book = (props) => {

    // console.log(props);
    const { img, title, author,id,getBook,number} = props
    console.log(number)

    return (
        <article className='book'>
            {/* <p>{number+1}</p> */}
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <button onClick={()=>getBook(id)}>Click me</button>
            <h4>{author.toUpperCase()}</h4>
            <span className="number">{`#${number+1}`}</span>
        </article>
    )
}
export default Book
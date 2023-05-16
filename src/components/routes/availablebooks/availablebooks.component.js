import React, {useContext} from "react";
import {BookContext} from '../../../context/books.context'
import {UserContext} from "../../../context/user.context";
import {Link, Outlet} from "react-router-dom";
import '../../../styles.css'

export default function AvailableBooks() {
    const {curBooks, setCurBooks} = useContext(BookContext)
    const {curUser, setUser} = useContext(UserContext);
    function rent(event, isbn) {
        console.log(isbn)
        console.log("renting")
        const filterBooks = curBooks.filter((book) => book.isbn !== isbn)
        const findBook = JSON.parse(JSON.stringify(curBooks.filter((book) => book.isbn == isbn)))
        findBook[0].rented = true;
        curUser
            .rentedBooks
            .push(findBook[0])
        console.log("found book", findBook[0])
        setCurBooks(() => {
            return ([
                ...filterBooks,
                ...findBook
            ])
        })
        //console.log(curBooks);
    }
    return <div className="grid-container">{curBooks.map((props) => {
            return props.status === 1
                ? <div className="book grid-item">
                        <h3>{props.title}</h3>
                        <p>{props.subtitle}</p>
                        <p>Author: {props.author}</p>
                        <p>Published on: {props
                                .published
                                .substring(0, 10)}</p>
                        <Link to={`/bookdetail/${props.isbn}`}>Know more
                        </Link>
                        <Outlet/> {props.rented == false
                            ? <button onClick={event => rent(event, props.isbn)}>Rent</button>
                            : <p>Rented</p>
}
                    </div>
                : null
        })}
    </div>
}
import books from "../Books";
import {useState, useEffect, useContext} from "react";
import Directory from "./directory/directory.component";
import {Route, Routes, useParams} from "react-router-dom";
import Header from "./routes/header/Header";
import Home from "./routes/home/Home";
import SignIn from "./routes/signin/signin.component";
import BookDetails from "./routes/bookDetails/bookDetails.component";
import {BookContext} from "../context/books.context";
import {UserContext} from "../context/user.context";
import Unauthorized from "./unauthorised";
import AvailableBooks from "./routes/availablebooks/availablebooks.component"
import Dashboard from './routes/dashboard/dashboard.component'

export default function App() {
    const {curUser} = useContext(UserContext)
    const {curBooks} = useContext(BookContext)
    const [search,
        setSearch] = useState("");
    const [typed,
        setTyped] = useState(false);
    // const [availableBooks,setBooks] = useState(curBooks);
    const [filteredBooks,
        setFilteredBooks] = useState(curBooks);
    useEffect(() => {
        const newFilter = curBooks.filter((book) => book.title.toLowerCase().includes(search))
        setFilteredBooks(newFilter)
    }, [curBooks, search])
    function getSearch(event) {
        const value = event.target.value;
        setSearch(value.toLowerCase());
    }
    return <Routes>
        <Route path="/" element={< Header />}>
            <Route index element ={< Home />}></Route>
            <Route path="/signin" element={< SignIn />}/> {curUser.role === "admin"
                ? <Route
                        path="admin"
                        element={< Directory getSearch = {
                        getSearch}
                    books = {
                        filteredBooks} />}/>
                : <Route path="admin" element={< Unauthorized />}/>}
            {curUser.role === "user" && <Route path="availablebooks" element={< AvailableBooks />}/>}
            {curUser.role === "user" && <Route path="yourbooks/:id" element={< Dashboard />}/>}
            <Route path="bookdetail/:isbn" element={< BookDetails />}/>
        </Route>
    </Routes>;
}

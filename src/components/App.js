
import books from "../Books";
import { useState,useEffect ,useContext} from "react";
import Directory from "./directory/directory.component";
import { Route, Routes,useParams } from "react-router-dom";
import Header from "./routes/header/Header";
import Home from "./routes/home/Home";
import SignIn from "./routes/signin/signin.component";
import BookDetails from "./routes/bookDetails/bookDetails.component";
import { BookContext } from "../context/books.context";

function sigin(){
  return <h1>This is the sigin page</h1>
}

export default function App() {
  const {curBooks}= useContext(BookContext)
  const [search,setSearch] = useState("");
  const [typed,setTyped]= useState(false);
  // const [availableBooks,setBooks] = useState(curBooks);
  const [filteredBooks,setFilteredBooks] = useState(curBooks);
useEffect(()=>{
  const newFilter = curBooks.filter((book)=>book.title.toLowerCase().includes(search))
  setFilteredBooks(newFilter)
},[curBooks,search])
  function getSearch(event){
    console.log("here")
    const value=event.target.value;
    setSearch(value.toLowerCase());
  }
  return <Routes>
  <Route path="/" element={<Header/>}>
  <Route index element ={<Home/>}>
  </Route>
  <Route path="/signin" element={<SignIn/>}/>
  <Route path="admin" element={<Directory getSearch={getSearch} books={filteredBooks}/>}/>
  <Route path="bookdetail/:isbn" element={<BookDetails/>}/>
  </Route>
  </Routes>
  ;
}

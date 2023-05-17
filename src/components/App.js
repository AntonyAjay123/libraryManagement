import books from "../Books";
import { useState, useEffect, useContext } from "react";
import Directory from "./directory/directory.component";
import { Route, Routes, useParams } from "react-router-dom";
import Header from "./routes/header/Header";
import Home from "./routes/home/Home";
import SignIn from "./routes/signin/signin.component";
import BookDetails from "./routes/bookDetails/bookDetails.component";
import { BookContext } from "../context/books.context";
import { UserContext } from "../context/user.context";
import { AuthContext } from "../context/auth.context";
import Unauthorized from "./unauthorised";
import AvailableBooks from "./routes/availablebooks/availablebooks.component";
import Dashboard from "./routes/dashboard/dashboard.component";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUser } from "./store/user/user.action";

export default function App() {
	const dispatch = useDispatch();
	//const { curUser } = useContext(UserContext);
	const curUser = useSelector((state) => state.user.curUser);
	const { curBooks } = useContext(BookContext);
	const { auth } = useContext(AuthContext);
	const [search, setSearch] = useState("");
	const [typed, setTyped] = useState(false);
	// const [availableBooks,setBooks] = useState(curBooks);
	const [filteredBooks, setFilteredBooks] = useState(curBooks);
	useEffect(() => {
		console.log("app curBooks", curBooks);
		const newFilter = curBooks.filter((book) =>
			book.title.toLowerCase().includes(search)
		);
		setFilteredBooks(newFilter);
	}, [curBooks, search]);
	function getSearch(event) {
		const value = event.target.value;
		setSearch(value.toLowerCase());
	}
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<Home />}></Route>
				<Route path="/signin" element={<SignIn />} />{" "}
				{curUser.role === "admin" ? (
					<Route
						path="admin"
						element={<Directory getSearch={getSearch} books={filteredBooks} />}
					/>
				) : (
					<Route path="admin" element={<Unauthorized />} />
				)}
				<Route
					path="availablebooks"
					element={auth === true ? <AvailableBooks /> : <Unauthorized />}
				/>
				{curUser.role === "user" && (
					<Route path="yourbooks/:id" element={<Dashboard />} />
				)}
				<Route path="bookdetail/:isbn" element={<BookDetails />} />
			</Route>
		</Routes>
	);
}

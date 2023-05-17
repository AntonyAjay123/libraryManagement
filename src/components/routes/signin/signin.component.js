import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { useContext, useState } from "react";
import users from "../../../Users";
import { AuthContext } from "../../../context/auth.context";
import { UserContext } from "../../../context/user.context";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/user/user.action";

export default function SignIn() {
	const dispatch = useDispatch();
	const [user, setUserDetails] = useState({
		id: "",
		name: "",
		email: "",
		password: "",
		role: "",
	});
	const [error, setError] = useState("");
	const [signedIn, setSignedIn] = useState(false);
	const { auth, setAuth } = useContext(AuthContext);
	//const { curUser, setUser } = useContext(UserContext);
	const curUser = useSelector((state) => state.user.curUser);

	//handling submit button

	function handleClick(event) {
		event.preventDefault();
		const findUser = users.filter(
			(dbUser) =>
				dbUser.email === user.email && dbUser.password === user.password
		);
		if (findUser.length == 0) setError("Incorrect credentials");
		else {
			setAuth(true);
			const foundUser = findUser[0];
			dispatch(setUser(foundUser));
		}
	}

	// ----Update user details entered by user

	function handleChange(event) {
		const { name, value } = event.target;
		setUserDetails((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	}

	return (
		<div>
			<h1></h1>
			<div>
				<form onSubmit={handleClick}>
					<div>
						<h4 style={{ color: "red" }}>{error}</h4>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							onChange={handleChange}
							name="email"
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
						/>
						<small id="emailHelp" className="form-text text-muted">
							We'll never share your email with anyone else.
						</small>
					</div>
					<div className="form-group">
						<label htmlFor="exampleInputPassword1">Password</label>
						<input
							onChange={handleChange}
							name="password"
							type="password"
							className="form-control"
							id="exampleInputPassword1"
							placeholder="Password"
						/>
					</div>
					<div className="form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" htmlFor="exampleCheck1">
							Check me out
						</label>
					</div>
					<button className="btn btn-primary">Submit</button>
					{auth && <Navigate to="/" replace={true} />}
				</form>
			</div>
		</div>
	);
}

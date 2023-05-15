import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import users from "../../../Users";

export default function SignIn(){
    // const logGoogleUser = async()=>{
    //     const response = await signInWithGooglePopup();
    //     console.log(response);
    // }
    const [user,setUser] = useState({
        email:"",
        password:"",
        role:"",
    })
    const [error,setError]= useState("")
    const [signedIn,setSignedIn]=useState(false);

    function handleClick(event){
        event.preventDefault();
        const authUser = users.filter((storedUser)=>storedUser.email==user.email && storedUser.password==user.password)
        if(authUser.length==0){
            setSignedIn(false);
            setUser({
                email:"",
                password:"",
                role:"",
            })
        setError("Invalid credentials");}
        else {
            setSignedIn(true);
            const updateRole=authUser[0].role;
            console.log("role",updateRole)
            setUser(authUser[0])
            setError("")
            console.log("authorized",user);
        }
    }

    function handleChange(event){
        const{name,value}=event.target;
        setUser((prev)=>{
            return {
                ...prev,
                [name]:value
            }
        })
    }

    return <div>
    <h1>this is the signin page</h1>
    <div>
    <form onSubmit={handleClick}>
    <div>
    <h4>{error}</h4>
    </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input onChange={handleChange}  name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button  className="btn btn-primary">Submit</button>
</form>
    </div>
    
    </div>;
}
import React , {useState , useRef} from 'react'
import { Link } from 'react-router-dom'
import { CgClose } from "react-icons/cg";
import { StyledLogin } from './StyledLogin'

export const Login = ({handleClickReset , handleClickLogin , handleClickRegister}) => {


    const [ user , setUser] = useState({name:"" , password:""})
    const form = useRef(null);

    const handleChange = e => setUser({...user, [e.target.name] : e.target.value});

    const handleSubmit = e => {
        e.preventDefault()
        form.current.reset();
        console.log(user);

    }
  return (
    <StyledLogin>
        
        <div className="close_login" onClick={handleClickLogin}>
        <CgClose />
        </div>
        <div className="login_header">
            <h3 className="login_title">Sign In</h3>
            <p className="login_description">Don't have an account yet?
            <Link to="/" onClick={()=>{handleClickRegister(); handleClickLogin();}}> Sign up </Link>
            for free
            </p>
        </div>
        <div className="login_body">
            <form ref={form} method="post" onSubmit={handleSubmit}>
                <div className="form_group">
                    <input type="text" id="name" onChange={handleChange} className="form-control form-input" name="name" placeholder="Your username or email" required/>
                </div>
                <div className="form_group">
                <input type="password" id="password" onChange={handleChange} className="form-control form-input" name="password" placeholder="Password" required/>
                </div>
                <div className="form_group checkbox_group">
                    <div className="checkbox">
                        <label className="form-label form-label-checkbox" htmlFor="ip_rememberme">
                            <input type="checkbox" id="ip_rememberme" onChange={handleChange} className="form-checkbox" name="checkbox" value="Stay signed in" required/>
                            <label htmlFor="ip_rememberme">Stay signed in</label>
                        </label>
                    </div>
                    <div className="forget_password">
                        <Link to="/" onClick={()=>{handleClickReset();handleClickLogin();}}>Forgot your password?</Link>
                    </div>
                </div>
                <div className="form_group">
                    <button type="Submit" className="button form_submit">Log In</button>
                </div>
            </form>
        </div>
        
    </StyledLogin>
  )
}

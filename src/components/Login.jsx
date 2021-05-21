import React ,{useState } from 'react';
import ModalLogin from './Modal/ModalLogin';
import Modalforget from './Modal/Modalforget';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeslash = <FontAwesomeIcon icon={faEyeSlash} />;


const Login = ({onAdd}) => {
    const [show,setShow]=useState(false);
    const [showforget,setShowforget]=useState(false);
    const [email, setEmail] = useState("");
    const [pasword,setPasword]=useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const handleSubmmit=(e)=>{
        e.preventDefault();
        if ((!email) || (!pasword)){
           alert('لطفا تمام فیلد ها را پر کنید!');
           return;
        }
        console.log(email,pasword);
        
        console.log("submited!");
        setEmail(" ");
        setPasword("");
        setShow(true)
        }
        
        
     
    return (
        <div>
        <form onSubmit={handleSubmmit} className={onAdd? "form-show":"no-show"} >
           
            <h4 className="login-titre"> خوش آمدید</h4>
            
            <div className="form-inputs">
                <input className="form-input" placeholder='*پست الکترونیک' value={email} type="email" onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-inputs">
                <input className="form-input" placeholder='*کلمه عبور' type={passwordShown ? "text" : "password"} value={pasword} onChange={(e)=> setPasword(e.target.value)}/><i onClick={togglePasswordVisiblity} className="login-eye">{passwordShown? eye : eyeslash}</i>
            </div>
            <div>
            <a href="#" className="forget-pas" onClick={()=>setShowforget(true)}>فراموش کردید؟</a>
            </div>
            
            <button className="btn" type="submit" > ورود</button>
         
        </form>
          <ModalLogin show={show} onClose={()=>setShow(false)} email={email} />
          <Modalforget show={showforget} onClose={()=>setShowforget(false)} />
        </div>
    )
}

export default Login

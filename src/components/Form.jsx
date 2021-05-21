import React ,{ useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../style/Form.css';



const Form = () => {
    const [show,setShow]=useState(false);
    const login=()=>{
      setShow(true);
      console.log("login show");
    }
    const register=()=>{
        setShow(false);
        console.log("register show");
    }
    return (
        <div className="main">
          <button className={show?"login active":"login"} onClick={login}> ورود  </button>
          <button className={show?"register":"register active"} onClick={register}> ثبت نام </button>
          <Register onAdd={show}/>
          <Login onAdd={show}/>
        </div>
        
    )
};

export default Form;

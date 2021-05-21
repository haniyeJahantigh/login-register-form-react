import React, { useState } from 'react';
import Modalregister from './Modal/Modalregister';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeslash = <FontAwesomeIcon icon={faEyeSlash} />;

const Register = ({onAdd}) => {
    const [email, setEmail] = useState("");
    const [pasword,setPasword]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [states,setStates]=useState("");
    const [substates,setSubstates]=useState("");
    const [education,setEducation]=useState("");
    const [eduplace,setEduplace]=useState("");

    const [show,setShow]=useState(false);

    const [edu,setEdu]=useState(false);
    const [city, setCity] = useState(false);
    const [citys,setCitys]=useState(new Array([]));
    
    const [passwordShown, setPasswordShown] = useState(false);

    const handleEdu =(e)=>{
        setEducation(e.target.value);
        if(e.target.value===""){
            setEdu(false)
        }else{
            setEdu(true)
        }
    }

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
      };

    const handleCity=(e)=>{
        setStates(e.target.value);
        console.log(e.target.value);
        if(e.target.value===""){
         setCity(false)
        }else{
            setCity(true)
            if(e.target.value==="ksh"){
             setCitys([{name:"بیستون"},{name:"کرمانشاه"}])
            }if(e.target.value==="khr"){
             setCitys([{name:"نیشابور"},{name:"مشهد"}])
            }if(e.target.value==="khsh"){
             setCitys([{name:"بجنورد"},{name:"شاهرود"}])
            }if(e.target.value==="kerman"){
             setCitys([{name:"کرمان"},{name:"رفسنجان"}])
            }if(e.target.value==="gol"){
             setCitys([{name:"گرگان"},{name:"گنبد کاووس"}])
            }if(e.target.value==="gil"){
             setCitys([{name:"رشت"},{name:"بندرانزلی"}])
            }if(e.target.value==="lor"){
             setCitys([{name:"بروجرد"},{name:"خرم آباد"}])
            }if(e.target.value==="teh"){
             setCitys([{name:"تهران"},{name:"کرج"}])
            }if(e.target.value==="ham"){
             setCitys([{name:"همدان"},{name:"ملایر"}])
            }if(e.target.value==="ghom"){
             setCitys([{name:"قم"},{name:"دستجرد"}])
        }
         
        }

    }

    const registerSubmmit=(e)=>{
        e.preventDefault();
        // if (!email || !pasword || !fname || !lname  || !states || !substates || !eduplace){
        //    alert('لطفا تمام فیلد ها را پر کنید!');
        //    return;
        // }
        console.log(email,pasword,fname,lname,states,substates,eduplace);
         console.log("submited!");
        setEmail("");
        setPasword("");
        setFname("");
        setLname("");
        setStates("");
        setEducation("");
        setEduplace("");
        setSubstates("")
        setShow(true)
     }
    
    return (
        <div>
        <form onSubmit={registerSubmmit} className={onAdd? "no-show":"form-show"}>
            <h4 className="register-titre"> رایگان ثبت نام کنید</h4>
            <div className="form-inputs fname">
                <input className="form-input " placeholder='*نام' type="text" value={fname} onChange={(e)=> setFname(e.target.value)}/>
            </div>
            <div className="form-inputs lname">
                <input className="form-input " placeholder='*نام خانوادگی' type="text" value={lname} onChange={(e)=> setLname(e.target.value)}/>
            </div>
            <div className="form-inputs">
                <input className="form-input" placeholder='*پست الکترونیک' type="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className="form-inputs">
                <input className="form-input" placeholder='*کلمه عبور ' type={passwordShown ? "text" : "password"} onChange={(e)=> setPasword(e.target.value)}/><i onClick={togglePasswordVisiblity} className="register-eye">{passwordShown? eye : eyeslash}</i>
            </div>
            <div className="form-inputs">
                <input className="form-input" placeholder="تحصیلات" type="text" onChange={handleEdu} value={education}/>
            </div>
            <div className="form-inputs">
                <input className={edu?"form-input form-show":"no-show"} placeholder="محل تحصیل" type="text" value={eduplace} onChange={(e)=> setEduplace(e.target.value)}/>
            </div>
            <div className="form-inputs">
                <select className="form-input" placeholder="استان" type="text" onChange={handleCity} value={states}>
                    <option value="">استان</option>
                    <option value="ksh">کرمانشاه</option>
                    <option value="khr">خراسان رضوی</option>
                    <option value="khsh">خراسان شمالی</option>
                    <option value="kerman">کرمان</option>
                    <option value="gol">گلستان</option>
                    <option value="gil">گیلان</option>
                    <option value="lor">لرستان</option>
                    <option value="teh">تهران</option>
                    <option value="ham">همدان</option>
                    <option value="ghom">قم</option>
                </select>
            </div>

                <div className="form-inputs">
                   <select className={city?"form-input form-show":"no-show"} value={substates} onChange={(e)=>setSubstates(e.target.value)}>
                       {/* {console.log(citys)} */}
                       {citys.map((item,i)=>{
                           
                    return(<option value={item.name} key={i}>{item.name}</option>);
                           
                       })}

                   </select>
               </div>
               <button className="btn" type="submit">ثبت نام</button>
        </form>
        <Modalregister show={show} onClose={()=>setShow(false)} email={email} lname={lname} fname={fname} />
        </div>
    )
}
export default Register;
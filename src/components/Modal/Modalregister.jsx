import React from 'react';


const Modalregister = ({show,onClose,fname,lname,email,education,states,substate ,add}) => {
if(!show){
    return null
}
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    نام ونام خوانوادگی: <span>{fname} {lname}</span>
                    پست الکترونیک:  <span>{email}</span>
                    تحصیلات: <span>{education}</span>
                    استان: <span>{states}</span>
                    شهر: <span>{substate}</span>
                    {add}


                </div>
                <div className="modal-footer">
                    <button className='modal-btn' onClick={onClose}>بستن</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modalregister;
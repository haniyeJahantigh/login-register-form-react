import React from 'react';


const Modalforgert = ({show,onClose}) => {
if(!show){
    return null
}
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    برای ارسال رمز ایمیل خود را وارد کنید:
                    <input className="form-input" placeholder='پست الکترونیک'  type="email" />
                </div>
                <div className="modal-footer">
                    <button className='modal-btn' onClick={onClose}>دریافت رمز</button>
                </div>
            </div>
            
        </div>
    )
}

export default Modalforgert;

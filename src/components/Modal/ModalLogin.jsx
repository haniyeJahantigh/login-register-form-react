import React from 'react';


const ModalLogin = ({show,email,onClose}) => {
if(!show){
    return null
}
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-body">
                    کاربر {email} با موفقیت وارد شد

                </div>
                <div className="modal-footer">
                    <button className='modal-btn' onClick={onClose}>بستن</button>
                </div>
            </div>
            
        </div>
    )
}

export default ModalLogin;

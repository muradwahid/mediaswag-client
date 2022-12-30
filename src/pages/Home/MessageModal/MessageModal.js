import React from 'react';

const MessageModal = () => {
  return (
    <div className='w-[200px]'>
      <input type="checkbox" id="message-modal" className="modal-toggle" />
      
      <div className="modal">
        <div className="modal-box relative h-[100vh] ">
          <label htmlFor="message-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <div>
            <div>
              
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
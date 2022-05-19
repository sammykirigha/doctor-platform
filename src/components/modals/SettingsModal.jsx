import React from 'react'
import Logo from '../common/Logo';
import Modal from "../common/Modal";
import { FaTimes } from 'react-icons/fa';

const SettingsModal = ({isOpen, closeModal, message}) => {
  return (
	<Modal isOpen={isOpen} closeModal={closeModal} positionY="top">
		  <div>
			  <Logo />
              <div className="mt-4">
                <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                >
                    <FaTimes />
                </button>
            </div>
		  </div>
		  <div>
			  <div>
				  <img src='../../assets/settingImage.png' alt='setting'/>
			  </div>
			   <div>
				  <img src='../../assets/settingImage2.png' alt='setting' />
			  </div>
			   <div>
				  <img src='../../assets/settingImage3.png' alt='setting' />
			  </div>
		  </div>
		  <div>
			  <h5>Landing Demos</h5>
		  </div>

		  <div>
			  <span>hjkvjfdlk</span>
		  </div>

            
        </Modal>
  )
}

export default SettingsModal
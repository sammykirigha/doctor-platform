import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProfileComp from '../../components/others/ProfileComp';
import { resetNotifications } from '../../state/reducers/error.reducer';

const Profile = () => {
	const { patient } = useSelector((state) => state.patient);
	
    console.log("<<<>>>", patient);
     const dispatch = useDispatch()

    useEffect(() => {
      return ()=>dispatch(resetNotifications())
	}, [dispatch])
	
  return (
	  <div>
		  <ProfileComp user={patient} />
	</div>
  )
}

export default Profile
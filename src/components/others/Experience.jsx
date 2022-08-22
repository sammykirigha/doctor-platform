import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetNotifications } from "../../state/reducers/error.reducer";

const Experience = () => {
    const { doctor } = useSelector((state) => state.doctor);

     const dispatch = useDispatch()

    useEffect(() => {
      return ()=>dispatch(resetNotifications())
    }, [dispatch])

    return (
        <div className="flex flex-col">
            <h5 className="text-md text-slate-900 font-semibold mt-5">Experience: </h5>
            <p className="text-md text-slate-400 mt-8 font-normal mb-8">
                {doctor?.experience}
            </p>
        </div>
    );
};

export default Experience;

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_ONE_PATIENT_QUERY } from "../queries/patient";
import { fetchSinglePatientAction } from "../state/actions/patient.action";

const useFetchPatient = () => {
    const { user } = useSelector((state) => state.auth);
    const [patient, setPatient] = useState({});

    const dispatch = useDispatch();

    useEffect(() => {
        if (user?.role === "patient") {
            if (user?.user_id) {
                const inputValues = {
                    id: user?.user_id,
                };

                const details = {
                    query: GET_ONE_PATIENT_QUERY,
                    variables: inputValues,
                };

                const getPatient = async () => {
                    const { payload } = await dispatch(
                        fetchSinglePatientAction(details)
					);
					setPatient(payload.patient)
				};
				
				getPatient()
            }
        }
    }, [user?.role, dispatch, setPatient, user?.user_id]);

    return [patient];
};

export default useFetchPatient;

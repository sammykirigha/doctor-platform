import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Appointment from "../pages/Appointment";
import {BrowserRouter as Router} from 'react-router-dom'

describe("The suit is to test the body component", () => {
    it("Snapshot of TimeTable", () => {
        const { asFragment } = render(<Appointment />);
        expect(asFragment()).toMatchSnapshot();
    });

    // it("should render the TimeTable with the right text", () => {
    //     const handleClick = jest.fn();
    //     render(
    //         <Router>
    //             <Appointment onClick={handleClick}>Appointment</Appointment>
    //         </Router>
    //     );
    //     let element = screen.getByText("Appointment");
    //     fireEvent.click(element);

    //     expect(handleClick).toHaveBeenCalled(1);
    // });

});

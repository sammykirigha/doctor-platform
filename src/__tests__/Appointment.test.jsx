import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import Appointment from "../pages/Appointment";
import {
    BrowserRouter as Router,
    MemoryRouter,
    Route,
    Routes,
} from "react-router-dom";

describe("The suit is to test the body component", () => {
    beforeEach(() => {
        // IntersectionObserver isn't available in test environment
        const mockIntersectionObserver = jest.fn();
        mockIntersectionObserver.mockReturnValue({
            observe: () => null,
            unobserve: () => null,
            disconnect: () => null,
        });
        window.IntersectionObserver = mockIntersectionObserver;
    });
    // it("Snapshot of appointment", () => {
    //     const { asFragment } = render(<Appointment />);
    //     expect(asFragment()).toMatchSnapshot();
    // });

    it("should render the appointment with the right text", () => {
        const handleClick = jest.fn();
        render(
            <MemoryRouter initialEntries={["/appointment"]}>
                <Routes>
                    <Route
                        path="/appointment"
                        element={
                            <Appointment onClick={handleClick}>
                                Appointment
                            </Appointment>
                        }
                    ></Route>
                </Routes>
            </MemoryRouter>
        );
        let element = screen.getByText("Appointment");
        fireEvent.click(element);

        expect(handleClick).toHaveBeenCalled();
    });
});

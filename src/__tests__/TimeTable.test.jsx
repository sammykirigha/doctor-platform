import { cleanup, render, screen } from '@testing-library/react';
import TimeTable from '../components/TimeTable'


describe('The suit is to test the body component', () => {

	it('Snapshot of TimeTable', () => {
		const { asFragment } = render(<TimeTable />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('should render the TimeTable with the contact@example.com text', () => {
		render(<TimeTable />)
		let element = screen.getByText('contact@example.com');

		expect(element.textContent).toBe('contact@example.com')
	})

	it('should render the TimeTable with the right text', () => {
		render(<TimeTable />)
		let element = screen.getByText( 'Phone');

		expect(element.textContent).toBe('Phone')
	})

})
import { cleanup, render, screen } from '@testing-library/react';
import Title from '../components/Title'


describe('The suit is to test the body component', () => {

	it('Snapshot of UserMessage', () => {
		const { asFragment } = render(<Title title="my header" />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('should render the UserMessage with the right index', () => {
		render(<Title title="my header" />)
		let element = screen.getByText('my header');

		expect(element.textContent).toBe('my header')
	})

})
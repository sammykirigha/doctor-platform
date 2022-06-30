/* eslint-disable testing-library/prefer-screen-queries */
import { cleanup, render, screen } from '@testing-library/react';
import UserMessage from '../components/UserMessage'


describe('The suit is to test the body component', () => {

	it('Snapshot of UserMessage', () => {
		const { asFragment } = render(<UserMessage index={'1'} />)
		expect(asFragment()).toMatchSnapshot()
	})

	it('should render the UserMessage with the right index', () => {
		render(<UserMessage />)
		let element = screen.getByText('Nice to meet you');

		expect(element.textContent).toBe('Nice to you')

	})

})
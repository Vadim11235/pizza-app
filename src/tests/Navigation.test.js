import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import { AuthProvider } from "../components/AuthContext";
import App from '../App'

describe('App', () => {
	describe('pay link click', () => {
		it('navigates to pay page', () => {
			const history = createMemoryHistory();
            const { container, queryByText } = render(
                <AuthProvider>
                    <Router history={history}>
                        <App />
                    </Router>
                </AuthProvider>
            );
		  
			// Проверяем, что мы начинаем на странице заказа
            // expect(container.innerHTML).toMatch('Собери свою пиццу')
            // expect(queryByDisplayValue(PIZZA.SIZE[i].key)).toBeTruthy();

            const payLink = queryByText('Pay');
            fireEvent.click(payLink);
			// Проверяем, что мы перешли на страницу pay
            expect(container.innerHTML).toMatch('Страница оформления заказа с формой оплаты');
		})
	})

	describe('with an unsupported URL', () => {
		it('shows 404 page', () => {
			const history = createMemoryHistory();
            history.push('/some/bad/route');

            const { container } = render(
                <AuthProvider>
                    <Router history={history}>
                        <App />
                    </Router>
                </AuthProvider>
            );

            expect(container.innerHTML).toMatch('404 page');
		})
	})
})
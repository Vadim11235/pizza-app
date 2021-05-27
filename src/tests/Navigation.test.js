import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import { App } from './app'

describe('App', () => {
	describe('about link click', () => {
		it('navigates to pay page', () => {
			const history = createMemoryHistory();
            const { container, queryByText } = render(
                <Router history={history}>
                    <App />
                </Router>
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
                <Router history={history}>
                    <App />
                </Router>
            );

            expect(container.innerHTML).toMatch('404 page');
		})
	})
})
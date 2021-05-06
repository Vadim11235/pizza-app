import { render, fireEvent } from '@testing-library/react';

import App from './App';
import PIZZA from './utils/constants';
import arrLikeOrder from './utils/arrLikeOrder';
import Fieldset from './components/Fieldset';

// it('renders learn react link', () => {
//   render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("Fieldset checkboxes", () => {
  it("correctly render", () => {
    const { queryByDisplayValue } = render(<Fieldset
      type="radio"
      title="Размер"
      name="SIZE"
      list={arrLikeOrder(PIZZA.SIZE, PIZZA.SIZE[0].value, 'radio')}
      handler={() => {}}
    />);

    for (var i = 0; i < PIZZA.SIZE.length; i++) {
      expect(queryByDisplayValue(PIZZA.SIZE[i].key)).toBeTruthy();
    }
  });


  // Arrange Act Assert
  describe("Fieldset Click", () => {
    it("correctly change", () => {
      // Arrange
      const changeHandler = jest.fn();
      const { queryByDisplayValue, queryByText } = render(
        <Fieldset
          type="radio"
          title="Размер"
          name="SIZE"
          list={arrLikeOrder(PIZZA.SIZE, PIZZA.SIZE[0].value, 'radio')}
          handler={changeHandler}
        />
      );

      // Act
      const secondLabel = queryByText(PIZZA.SIZE[1].title);
      fireEvent.click(secondLabel);

      // Assert
      // const secondRadio = queryByDisplayValue(PIZZA.SIZE[1].key);
      // console.dir(secondRadio.tagName);
      // console.dir(secondRadio.checked);
      expect(changeHandler).toHaveBeenCalled();
    });
  });



});

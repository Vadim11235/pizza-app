import React from 'react';

let getUniqId = (() => {
  let id = 0;

  return {
    next: () => id++,
    get: () => 'input-' + id
  };
})();

export default function Fieldset({type='checkbox', title, name, list, handler}) {
  return (
    <fieldset>
      <legend>{title}</legend>
      {
        list.map(el => {
          getUniqId.next();

          return (
            <React.Fragment key={el.key}>
              <input type={type} id={getUniqId.get()}
                name={name} value={el.key} checked={el.checked}
                onChange={e => handler(name, e.target.value, type)} />
              <label htmlFor={getUniqId.get()}>{el.title}</label>
            </React.Fragment>
          );
        })
      }
    </fieldset>
  );
}

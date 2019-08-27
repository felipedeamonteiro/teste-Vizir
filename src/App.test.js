// Este teste foi baseada nesta página https://github.com/testing-library/react-testing-library
//Tem esse também  https://jestjs.io/docs/en/tutorial-react

import React from 'react';
//import App from './App';
import Formulario from './Formulario';
import {render, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';

test('The cost of a call with some input', async () => {
 
  // const someData = {
 //   origem: '011', 
 //   destino:'016',
 //   tempo: '20',
 //   plano: 'FaleMais 30'
 // }

 // jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
 //   return Promise.resolve({
 //     json: () => Promise.resolve(someData),
 //   })
 // })

  const {getByLabelText, getByText} = render(
  <Formulario comfm={this.props.comfm} semfm={this.props.semfm} />
  )

  fireEvent.change(getByLabelText(/origem/i), {target: {value: '011'}})
  fireEvent.change(getByLabelText(/destino/i), {target: {value: '016'}})
  fireEvent.change(getByLabelText(/tempo/i), {target: {value: '20'}})
  fireEvent.change(getByLabelText(/plano/i), {target: {value: 'FaleMais 30'}})
  fireEvent.click(getByText(/submit/i))

  const comfm = getByText(/comfm/i)
  const semfm = getByText(/semfm/i)

  expect(comfm).toBe('R$ 0.00');
  expect(semfm).toBe('R$ 38.00');
});
import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add numbers together', () => {
    const add1 = container.getByTestId('number1');
    const add4 = container.getByTestId('number4');
    const addition = container.getByTestId('operator-add')
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const addNumber = container.getByTestId('running-total');
    fireEvent.click(add1);
    fireEvent.click(addition);
    fireEvent.click(add4);
    fireEvent.click(equals)
    expect(addNumber.textContent).toEqual('5');
  })

  it('Should be able to subtract two numbers', () => {
    const sub7 = container.getByTestId('number7');
    const sub4 = container.getByTestId('number4');
    const subtraction = container.getByTestId('operator-subtract')
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const subtractNumber = container.getByTestId('running-total');
    fireEvent.click(sub7);
    fireEvent.click(subtraction);
    fireEvent.click(sub4);
    fireEvent.click(equals)
    expect(subtractNumber.textContent).toEqual('3');
  })

  it('Should be able to multiply numbers together', () => {
    const multiply3 = container.getByTestId('number3');
    const multiply5 = container.getByTestId('number5');
    const multiply = container.getByTestId('operator-multiply')
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const multiplyNumber = container.getByTestId('running-total');
    fireEvent.click(multiply3);
    fireEvent.click(multiply);
    fireEvent.click(multiply5);
    fireEvent.click(equals)
    expect(multiplyNumber.textContent).toEqual('15');
  })

  it('Should be able to divide two numbers', () => {
    const div2 = container.getByTestId('number2');
    const div1 = container.getByTestId('number1');
    const div7 = container.getByTestId('number7');
    const divide = container.getByTestId('operator-divide')
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const divideNumber = container.getByTestId('running-total');
    fireEvent.click(div2);
    fireEvent.click(div1)
    fireEvent.click(divide);
    fireEvent.click(div7);
    fireEvent.click(equals)
    expect(divideNumber.textContent).toEqual('3');
  })

  it('Should be able to concatenate numbers together', () => {
    const add1 = container.getByTestId('number1');
    const add4 = container.getByTestId('number4');
    const clear = container.getByTestId('clear')
    const addNumber = container.getByTestId('running-total');
    fireEvent.click(add1);
    fireEvent.click(add4);
    expect(addNumber.textContent).toEqual('14');
  })

  it('Should be able to perform multiple operations on numbers', () => {
    const add1 = container.getByTestId('number1');
    const add4 = container.getByTestId('number4');
    const mul5 = container.getByTestId('number5');
    const addition = container.getByTestId('operator-add')
    const multiply = container.getByTestId('operator-multiply')
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const total = container.getByTestId('running-total');
    fireEvent.click(add1);
    fireEvent.click(addition);
    fireEvent.click(add4);
    fireEvent.click(multiply)
    fireEvent.click(mul5)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('25');
  })

  it('Should be able to clear the last operation', () => {
    const add1 = container.getByTestId('number1');
    const add4 = container.getByTestId('number4');
    const mul5 = container.getByTestId('number5');
    const addition = container.getByTestId('operator-add')
    const multiply = container.getByTestId('operator-multiply')
    const equals = container.getByTestId('operator-equals')
    const clear = container.getByTestId('clear')
    const total = container.getByTestId('running-total');
    fireEvent.click(add1);
    fireEvent.click(addition);
    fireEvent.click(add4);
    fireEvent.click(clear)
    fireEvent.click(multiply);
    fireEvent.click(mul5)
    fireEvent.click(equals)
    expect(total.textContent).toEqual('5');
  })
})


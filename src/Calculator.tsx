import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {

    const [input, setInput] = useState<string>('0')
    const isOperator = (char: string) => /[+\-*/.%]/.test(char)

    const handleButtonClick = (value: string) => {
        const lastChar = input[input.length - 1];

        if (isOperator(value) && isOperator(lastChar)) {
            return
        }
        if (input === '0' && !isOperator(value) && value !== '.') {
            setInput(value)
        } else {
            setInput((prevInput) => prevInput + value)
        }
    }

    const plusMinusClick = () => {
        if (Number(input) > 0) {
            setInput(`(-${input})`)
        } else if (Number(input) === 0) {
            setInput('0')
        } else {
            setInput(input.replace(/[()]/g, '').slice(1))
        }
    }

    const clear = () => {
        setInput('0')
    }

    const handleCalculate = () => {
        try {
            let result = eval(input).toString();
            if (result.length > 10) {
                result = result.slice(0, 10);
            }
            setInput(result);
        } catch (error) {
            setInput('Ошибка');
        }
    }

    return (
        <div className={'container'}>
            <div className={'calculator'}>
                <div className={'display'}>{ input }</div>
                <div className={'buttons'}>
                    <button className={'grey-color'} onClick={clear}>AC</button>
                    <button className={'grey-color'} onClick={plusMinusClick}>+/-</button>
                    <button className={'grey-color'} onClick={() => handleButtonClick('%')}>%</button>
                    <button onClick={() => handleButtonClick('/')} className={'yellow-color'}>/</button>

                    <button onClick={() => handleButtonClick('7')}>7</button>
                    <button onClick={() => handleButtonClick('8')}>8</button>
                    <button onClick={() => handleButtonClick('9')}>9</button>
                    <button onClick={() => handleButtonClick('*')} className={'yellow-color'}>x</button>

                    <button onClick={() => handleButtonClick('4')}>4</button>
                    <button onClick={() => handleButtonClick('5')}>5</button>
                    <button onClick={() => handleButtonClick('6')}>6</button>
                    <button onClick={() => handleButtonClick('-')} className={'yellow-color'}>-</button>

                    <button onClick={() => handleButtonClick('1')}>1</button>
                    <button onClick={() => handleButtonClick('2')}>2</button>
                    <button onClick={() => handleButtonClick('3')}>3</button>
                    <button onClick={() => handleButtonClick('+')} className={'yellow-color'}>+</button>

                    <button>[]</button>
                    <button onClick={() => handleButtonClick('0')}>0</button>
                    <button onClick={() => handleButtonClick('.')}>.</button>
                    <button onClick={handleCalculate} className={'yellow-color'}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator

// Ниже код переписан на классовых компонентах (с помощью), но я в них еще не разобрался полностью (классы трудно даются)

// import React, { Component } from 'react'
// import './Calculator.css'
//
// type State = {
//     input: string
// };
//
// class Calculator extends Component<{}, State> {
//     state: State = {
//         input: '0',
//     };
//
//     isOperator = (char: string) => /[+\-*/.%]/.test(char)
//
//     handleButtonClick = (value: string) => {
//         const { input } = this.state
//         const lastChar = input[input.length - 1]
//
//         if (this.isOperator(value) && this.isOperator(lastChar)) {
//             return
//         }
//
//         if (input === '0' && !this.isOperator(value) && value !== '.') {
//             this.setState({ input: value })
//         } else {
//             this.setState({ input: input + value })
//         }
//     };
//
//     plusMinusClick = () => {
//         const { input } = this.state
//
//         if (Number(input) > 0) {
//             this.setState({ input: `(-${input})` })
//         } else if (Number(input) === 0) {
//             this.setState({ input: '0' })
//         } else {
//             const positive = input.replace(/[()]/g, '').slice(1)
//             this.setState({ input: positive })
//         }
//     };
//
//     handleClear = () => {
//         this.setState({ input: '0' })
//     };
//
//     handleCalculate = () => {
//         const { input } = this.state
//         try {
//             let result = eval(input).toString()
//             if (result.length > 10) {
//                 result = result.slice(0, 10)
//             }
//             this.setState({ input: result })
//         } catch (error) {
//             this.setState({ input: 'Ошибка' })
//         }
//     };
//
//     render() {
//         const { input } = this.state
//
//         return (
//             <div className="container">
//                 <div className="calculator">
//                     <div className="display">{input}</div>
//                     <div className="buttons">
//                         <button className="grey-color" onClick={this.handleClear}>AC</button>
//                         <button className="grey-color" onClick={this.plusMinusClick}>+/-</button>
//                         <button className="grey-color" onClick={() => this.handleButtonClick('%')}>%</button>
//                         <button className="yellow-color" onClick={() => this.handleButtonClick('/')}>/</button>
//
//                         <button onClick={() => this.handleButtonClick('7')}>7</button>
//                         <button onClick={() => this.handleButtonClick('8')}>8</button>
//                         <button onClick={() => this.handleButtonClick('9')}>9</button>
//                         <button className="yellow-color" onClick={() => this.handleButtonClick('*')}>x</button>
//
//                         <button onClick={() => this.handleButtonClick('4')}>4</button>
//                         <button onClick={() => this.handleButtonClick('5')}>5</button>
//                         <button onClick={() => this.handleButtonClick('6')}>6</button>
//                         <button className="yellow-color" onClick={() => this.handleButtonClick('-')}>-</button>
//
//                         <button onClick={() => this.handleButtonClick('1')}>1</button>
//                         <button onClick={() => this.handleButtonClick('2')}>2</button>
//                         <button onClick={() => this.handleButtonClick('3')}>3</button>
//                         <button className="yellow-color" onClick={() => this.handleButtonClick('+')}>+</button>
//
//                         <button onClick={() => this.handleButtonClick('(')}>(</button>
//                         <button onClick={() => this.handleButtonClick('0')}>0</button>
//                         <button onClick={() => this.handleButtonClick('.')}>.</button>
//                         <button className="yellow-color" onClick={this.handleCalculate}>=</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Calculator



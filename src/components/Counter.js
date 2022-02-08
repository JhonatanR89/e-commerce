import React, {useState} from 'react';

const Counter = ({stock}) => {

    const [counter, setCounter] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentDate, setCurrentDate] = useState('');

    const minus = () =>{
        if (counter <= 0) return;
        setCounter(counter - 1);
    };

    const plus = () =>{
        if (counter >= 0) return;
        setCounter(counter + 1);
    };

    const press  = () =>{
        setCurrentTime(currentTime + 1);
        const today = new Date();
    setCurrentDate(`Date = ${today.getFullYear()}
    -${today.getMonth() + 1} - ${today.getDate()}`)

    }

    return (
    <>
        <div>
            <h3>press {currentTime} : 0</h3>
            <h3>{currentDate}</h3>
            <button>onclick={minus}</button>
            <span>{counter}</span>
            <button>onclick={plus}</button>
        </div>
        <button>onclick={press}</button>
    </>
    )
}

export default Counter;
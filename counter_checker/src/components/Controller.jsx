const Controller = ({ onIncrease, onDecrease }) => {
    return (
        <div>
            <button onClick={() => onDecrease(1)}>-1</button>
            <button onClick={() => onDecrease(10)}>-10</button>
            <button onClick={() => onDecrease(100)}>-100</button>
            <button onClick={() => onIncrease(100)}>+100</button>
            <button onClick={() => onIncrease(10)}>+10</button>
            <button onClick={() => onIncrease(1)}>+1</button>
        </div>
    )
}

export default Controller;
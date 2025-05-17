import './TodoItem.css';

const TodoItem = () => {
    return (
        <div className='TodoItem'>
            <input type="checkbox" />
            <div className='TodoItem-text'>Todo...</div>
            <div className='TodoItem-date'>Date</div>
            <button>삭제</button>
        </div>
    )
}

export default TodoItem;
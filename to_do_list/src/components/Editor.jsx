import './Editor.css';
import { useState, useRef } from 'react';

const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    const contentRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    const onSubmit = (e) => {
        if(content.length === 0){
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent('');
    }
    return (
        <div className='Editor'>
            <input type="text" placeholder="새로운 Todo..." value={content} onChange={onChangeContent} ref={contentRef} />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor;
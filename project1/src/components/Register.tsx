import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 이름, 생년월일, 국적, 자기소개
const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        nationality: "",
        introduction: "",
    });

    const refObj = useRef();
    console.log(refObj.current);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput({...input, [e.target.name]: e.target.value});
    }

    const onSubmit = () => {
        if(input.name === "") {
            refObj.current.focus();
        }
    }

    
    return (
        <div>

            <div>
                <input ref={refObj} type="text" placeholder="이름" value={input.name} onChange={onChange} />
            </div>
            <div>
                <input ref={refObj} type="date" placeholder="생년월일" value={input.birth} onChange={onChange} />
            </div>
            <div>
                <select ref={refObj} value={input.nationality} onChange={onChange}>
                    <option value="한국">한국</option>
                    <option value="미국">미국</option>
                    <option value="중국">중국</option>
                </select>
            </div>
            <div>
                <textarea ref={refObj} placeholder="자기소개" value={input.introduction} onChange={onChange} />
            </div>
            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register;
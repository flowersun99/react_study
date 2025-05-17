import { useState } from 'react';

// 3가지 훅 관련 팁
// 1. 조건문, 반복문에서는 사용 안됨 = 조건부로 호출될 수는 없다
// 2. 함수 컴포넌트 내부, 커스텀 훅 내부에서만 사용 가능
// 3. 나만의 훅(Custom Hook) 만들 수 있음

import useInput from '../hooks/useInput';

const HookExam = () => {
    const [count, onIncrease] = useInput();

    return (        
        <div>
            <h1>{count}</h1>
            <button onClick={onIncrease}>증가</button>
        </div>
    )
}

export default HookExam;
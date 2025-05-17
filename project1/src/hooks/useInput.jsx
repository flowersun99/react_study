import { useState } from "react";

function useInput(){
    const [count, setCount] = useState(0);
    
    const onIncrease = () => {
        setCount(count + 1);
    }

    return [count, onIncrease];

}

export default useInput;
import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState, useEffect } from 'react'

function App() {

  const [count, setCount] = useState(0);

  // 1. 마운트 : 탄생
  useEffect(() => {
    console.log('마운트 되었습니다.');
  }, [])

  // 2. 업데이트 : 변화, 리렌더링 만약 시작부터 update 안쓰고 싶으면 useRef써서 if문 써서 return 처리 해주면 됨
  useEffect(() => {
    console.log('update');
  })

  // 3. 언마운트 : 죽음
  useEffect(() => {
    return () => {
      console.log('언마운트 되었습니다.');
    }
  }, [])

  const onIncrease = (value) => {
    setCount(count + value);
  }

  const onDecrease = (value) => {
    setCount(count - value);
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onIncrease={onIncrease} onDecrease={onDecrease} />
      </section>
    </div>
  )
}

export default App

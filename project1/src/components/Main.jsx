const Main = () => {
    const user = {
        name : '홍길동',
        isLogin : true,
    }

    return (
        <div>
            <h1>Main</h1>
            <h2>{user.name}</h2>
            <h2>{user.isLogin ? (<div>로그인</div>) : (<div>로그아웃</div>)}</h2>
        </div>
    )
}

export default Main;
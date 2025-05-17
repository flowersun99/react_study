const Button = (props) => {

    // 이벤트 객체
    const onClick = (e) => {
        console.log(e);
        console.log(props.text);
    }

    return (
        <button onClick={onClick}>{props.text}</button>
    );
}

Button.defaultProps = {
    color : 'black',}
export default Button;

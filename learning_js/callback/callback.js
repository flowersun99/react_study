// function main(value){
//     value();
// }


// function sub() {
//     console.log("i am sub");
// }
// main(sub);

// 콜백 함수의 활용
function repeat(count, callback){
    for(let i = 1; i <= count; i++){
        callback(i);
    }
}

repeat(5, (i) => {
    console.log(i);
});

repeat(5, (i) => {
    console.log(i * 2);
});

repeat(5, (i) => {
    console.log(i * 3);
});
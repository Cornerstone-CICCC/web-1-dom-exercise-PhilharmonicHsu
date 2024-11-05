// YOUR CODE HERE
let btn1 = document.querySelector('#btn1');
btn1.onclick = function(){
    document.querySelector('#output1').style.color = 'red';
}

let btn2 = document.querySelector('#btn2');
btn2.onclick = function(){
    let hollowWordSpan = document.createElement('span')
    hollowWordSpan.textContent = "Hello word";
    document.querySelector('#output2').append(hollowWordSpan);
}

let btn3 = document.querySelector('#btn3');
btn3.onclick = function(){
    document.querySelector('#output3 > p').classList.remove('small-text');
}

let btn4 = document.querySelector('#btn4');
btn4.onclick = function(){
    let elements = document.querySelectorAll('#output4 > p');
    elements.forEach(element => {
        element.style.color = 'red';
    });
}

let btn5 = document.querySelector('#btn5');
btn5.onclick = function(){
    let input = document.querySelector('#output5 > input[type=text]');
    console.log(input.value);
}
const minusButton = document.querySelector('#minus');
const plusButton = document.querySelector('#plus');
const heartButton = document.querySelector('#heart');


function incrementalCounter(){
    let counter = document.querySelector('#counter').innerHTML
    setInterval(function(){
    document.querySelector('#counter').textContent = counter++;
    }, 1000)
}

incrementalCounter()

minusButton.addEventListener('click', decrementalCounter)
function decrementalCounter(){
    let counter = document.querySelector('#counter').innerHTML
    let numCount = parseInt(counter, 10)
    document.querySelector('#counter').textContent = numCount-1;
}

plusButton.addEventListener('click', incrementCount)
function incrementCount(){
    let counter = document.querySelector('#counter').innerHTML
    let numCount = parseInt(counter, 10)
    document.querySelector('#counter').textContent = numCount+1;
}

heartButton.addEventListener('click', like)
let num = 0;
function like(){
    let liked = document.createElement('p')
    let counter = document.querySelector('#counter').innerHTML
    const numberOfLikes= num++;
    liked.innerText = numberOfLikes + ' liked ' + counter
    document.querySelector('.likes').append(liked)
}
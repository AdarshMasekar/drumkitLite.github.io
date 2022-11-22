var a = new Audio('./sounds/a.mp3')
var d = new Audio('./sounds/d.mp3')
var s = new Audio('./sounds/s.mp3')
var j = new Audio('./sounds/j.mp3')
var k = new Audio('./sounds/k.mp3')
var l = new Audio('./sounds/l.mp3')
var w = new Audio('./sounds/w.mp3')




document.querySelectorAll('button')[0].addEventListener('click', function() {
    a.play();
})

document.querySelectorAll('button')[1].addEventListener('click', function() {
    s.play();
})

document.querySelectorAll('button')[2].addEventListener('click', function() {
    d.play();
})

document.querySelectorAll('button')[3].addEventListener('click', function() {
    j.play();
})

document.querySelectorAll('button')[4].addEventListener('click', function() {
    w.play();
})

document.querySelectorAll('button')[5].addEventListener('click', function() {
    k.play();
})

document.querySelectorAll('button')[6].addEventListener('click', function() {
    l.play();
})
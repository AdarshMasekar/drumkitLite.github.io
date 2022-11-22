var a = new Audio('./sounds/a.mp3')
var d = new Audio('./sounds/d.mp3')
var s = new Audio('./sounds/s.mp3')
var j = new Audio('./sounds/j.mp3')
var k = new Audio('./sounds/k.mp3')
var l = new Audio('./sounds/l.mp3')
var w = new Audio('./sounds/w.mp3')

var sounds = [a, d, s, j, k, l, w];


for (var i = 0; i < sounds.length; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {
        sounds[i].play();
    })
}
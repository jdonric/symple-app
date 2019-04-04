//global variables
var frame = document.getElementById('framei');
var vidSource = frame.src;
var corpo = document.getElementsByTagName('body');  //corpo is portuguese for body
var btn = document.getElementsByTagName('button');
var resetIt = document.getElementById('reset');

var playlist = [
    'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfshMq9ZShHZC9dCHVA77p6e',  //focused
    'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfvU7_CtGmJpB8cK-tGQ2Z8-', //fluid
    'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfvuTrEMkYUnSZ2bQqdTwlzQ', //boss
    'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfsKQbr_M8RMWBUHYZKKqI9I' //grooved
    
];


//show videos
function video() {
    resetIt.style.display='block';
    frame.style.display = 'inline';

}

function showFocus() {
    video();
    frame.setAttribute('src', 'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfshMq9ZShHZC9dCHVA77p6e');
    document.body.style.backgroundImage = 'linear-gradient(#93a5cf, #ebedee)';
};
function showFluid() {
    video();
    frame.setAttribute('src', 'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfvU7_CtGmJpB8cK-tGQ2Z8-');
    document.body.style.backgroundImage = 'linear-gradient(#13547a, #ebedee)';
};
function showBoss() {
    video();
    frame.setAttribute('src', 'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfvuTrEMkYUnSZ2bQqdTwlzQ');
    document.body.style.backgroundImage = 'linear-gradient(#f45c43, #ebedee)';
};
function showGroove() {
    video();
    frame.setAttribute('src', 'https://www.youtube.com/embed/videoseries?list=PLhiCctpaTlfsKQbr_M8RMWBUHYZKKqI9I');
  document.body.style.backgroundImage = 'linear-gradient(#fcb69f, #ebedee)';
};



//button click prompts relevant playlist
function promptPlaylist() {
    var one = document.getElementById('focus');
    var two = document.getElementById('fluid');
    var three = document.getElementById('boss');
    var four = document.getElementById('groove');

    one.onclick = showFocus;
    two.onclick = showFluid;
    three.onclick = showBoss;
    four.onclick = showGroove;

};

function resetPlaylist() {
    resetIt.style.display = 'none';
    frame.style.display ='none';
    body.style.backgroundImage = 'background-image: linear-gradient(#fdfbfb, #ebedee)';
}

promptPlaylist();
resetIt.onclick = resetPlaylist;

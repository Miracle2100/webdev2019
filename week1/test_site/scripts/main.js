var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Guitar2.png')
        myImage.setAttribute('src', 'images/Guitar3.png', this.height = 950, this.width = 900);
        else myImage.setAttribute('src', 'images/Guitar2.png', this.height = 950, this.width = 560);
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML  = 'Guitars are cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML  = 'Guitars are cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
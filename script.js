const button = document.getElementById('myButton');
button.addEventListener('click', function() {

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    
    button.style.backgroundColor = randomColor;
  });
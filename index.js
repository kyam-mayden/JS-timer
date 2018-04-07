//create button
var button = document.querySelector('.form1')
var para=document.querySelector('.counter')


//new button created on button press
button.addEventListener('submit', function(e){
    var button2
    var counter=0
    e.preventDefault()
    button.innerHTML=' <input class="button" type="submit" value="start the timer">' +
        ' <input class="button2" type="submit" value="button 2">'
    var button2= document.querySelector('.button2')
    button2.addEventListener('click', function(){

        counter= counter +1
        console.log(counter)
    })

    setTimeout(function() {
        button.innerHTML=' <input class="button" type="submit" value="start the timer">'
    }, 3000)
})


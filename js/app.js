$(document).ready(function() {

    $(".new").click(function(event) {
        var num = generate();
        console.log(num);
        var counter = 1;

        $(".button").on("click", function(event) {
            event.preventDefault();
            $('#count').text(counter);
            counter++;
            var input = parseInt($('#userGuess').val());
            var difference = Math.abs(num - input);
            $('ul#guessList').append("<li class='lists'>" + parseInt($('#userGuess').val()) + '</li>').show();
            console.log(input);
            if (difference === 0) {
                $('h2').text("You got it!");
            } else if (difference < 10) {
                $('h2').text("Very hot!");
            } else if (difference < 20) {
                $('h2').text("Getting warm!");
            } else if (difference < 30) {
                $('h2').text("Warm!");
            } else if (difference < 40) {
                $('h2').text("You're cold!");
            } else if (difference < 50) {
                $('h2').text("Brrrrr...it's cold in here!");
            } else if(input > 100 || input < 0){
                $('h2').text("Invalid!")
            }
        })
        $("ul#guessList").children('li').remove();
        $('#count').text('0');
        $('h2').text('Make your Guess!');
    });
    var generate = function() {
        return Math.floor(Math.random() * 100);
    };

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);
    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

})

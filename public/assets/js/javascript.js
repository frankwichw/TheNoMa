$('select').material_select();

// Random Drawing Prompt

var drawThis = ["Taco cat", "Don't eat the cookies", "Pretending to read", "Candyman", "Eggmobile", "Lonely Plumber", "North of the Wall", "Robot Birthday"];


var guessNumber = Math.floor(Math.random() * 8);
console.log(guessNumber);

var subject = drawThis[guessNumber];
console.log("subject" + subject);

$('#user-to-draw').append("<h3>" + subject + "</h3>");    


$("#save").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var data = canvas.toDataURL();
    //new drawing object
    var drawingInput = {
        drawing_descriptor: subject,
        UserId: 3,
        drawing: data
    };
    
    console.log(drawingInput);
    // Send the POST request.
    $.ajax("/api/drawing", {
        type: "POST",
        data: drawingInput
    }).then(
        function () {
            console.log("created new drawing");
            // Reload the page to get the updated list
            location.replace("/welcome");
        }
    );
}); 

var newUserGuess = '';

$("#guess-submit").on("click", function (event) {
    event.preventDefault();
    newUserGuess = $("#guess").val().trim();
    $("#rate-art").removeClass("hide");
    $("#guess-form").addClass("hide");
});

$("#submit-all").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newUserGuess = $("#guess").val().trim();

    var userRating = parseInt($("#art-rating").val());
    //new guess object
    var guessInput = {
        guess: newUserGuess,
        DrawingId: 3,
        userId: 2,
        rating: userRating
    };

    console.log(guessInput);
    // Send the POST request.
    $.ajax("/api/guess", {
        type: "POST",
        data: guessInput
    }).then(
        function () {
            console.log("created new guess");
            // Reload the page to get the updated list
            // location.reload();
        }
    );
}); 



// var img = base64 uri
// var data = img.replace(/^data:image\/\w+;base64,/, "");
// var buf = new Buffer(data, 'base64');
// $('#user-to-draw').append("<img src="+ buf + ">");
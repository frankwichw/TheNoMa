// $("#guess-submit").on("click", function (event) {
//     event.preventDefault();


//     var userGuess = $("#guess").val().trim();

//     console.dir("in the form " + userGuess);

//     $.post("/api/guess", userGuess).done(function (data) {
//         console.log('this is the data' + data);

//     });

// });

// Random Drawing Prompt

var drawThis = ["Taco cat", "Don't eat the cookies", "Pretending to read", "Candyman", "Eggmobile"];


var guessNumber = Math.floor(Math.random() * 5);
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
            location.reload();
        }
    );
});

$("#guess-submit").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newUserGuess = $("#guess").val().trim();
    var guessRating = 4;
    var userScore = guessRating * 10;
    //new guess object
    var guessInput = {
        guess: newUserGuess,
        DrawingId: 3,
        userId: 2,
        Rating: 4
    };
    var userScore = {
        user_score: userScore,
        id: 2
    };

    console.log(guessInput);
    // Send the POST request.
    $.ajax("/api/guess", {
        type: "POST",
        data: guessInput
    }).then(
        function () {
            console.log("created new guess");
            console.log("*** req.user.id ***")
            console.log(req.user.id);
            console.log("*** req.user.id ***")
            // Reload the page to get the updated list
            // location.reload();
        });

    $.ajax("/api/score", {
        type: "PUT",
        data: userScore
    }).then(
        function () {
            console.log("user score updated");
            // Reload the page to get the updated list
            location.replace("/welcome");
        });
});



// var img = base64 uri
// var data = img.replace(/^data:image\/\w+;base64,/, "");
// var buf = new Buffer(data, 'base64');
// $('#user-to-draw').append("<img src="+ buf + ">");
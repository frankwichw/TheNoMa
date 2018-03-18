$(document).ready(function () {
    $('select').material_select();

    // Random Drawing Prompt

    var drawThis = ["Taco cat", "Don't eat the cookies", "Pretending to read", "Candyman", "Eggmobile", "Lonely Plumber", ""];

    var guessNumber = Math.floor(Math.random() * 5);
    console.log(guessNumber);

    var subject = drawThis[guessNumber];
    console.log("subject" + subject);

    $('#user-to-draw').append("<h3>" + subject + "</h3>");


    $("#save").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        // ensure id value is used and is an integer
        var userID = parseInt($("#userID").val());
        var data = canvas.toDataURL();
        //new drawing object
        var drawingInput = {
            drawing_descriptor: subject,
            UserId: userID,
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

        // Ensure values are used and numeric
        var userRating = parseInt($("#art-rating").val());
        var user_score = parseInt($("#user_score").val());
        var artistID = parseInt($("#artistID").val());
        var drawingID = parseInt($("#drawingID").val());
        var guessUID = parseInt($("#guessUID").val());

        // update user object with new score
        var userScore = user_score + (userRating * 10);
        var userScore = {
            user_score: userScore,
            id: artistID
        };

        // new guess object
        var guessInput = {
            guess: newUserGuess,
            DrawingId: drawingID,
            rating: userRating,
            userId: guessUID
        };

        // Send the POST request.
        $.ajax("/api/guess", {
            type: "POST",
            data: guessInput
        }).then(
            function () {
                console.log("created new guess");
            }
        );

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
});
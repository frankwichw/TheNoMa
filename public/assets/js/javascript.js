$("#guess-submit").on("click", function (event) {
    event.preventDefault();


    var userGuess = $("#guess").val().trim();

    console.dir("in the form " + userGuess);

    $.post("/api/guess", userGuess).done(function (data) {
        console.log('this is the data' + data);

    });

});
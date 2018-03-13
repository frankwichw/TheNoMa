
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // canvas.width = window.innerWidth;
    // canvas.hieght = window.innerHeight;
    var radius = 5;
    var dragging = false;

    context.lineWidth = radius * 2;

        var putPoint = function(point) {
            if (dragging) {
        context.lineTo(point.offsetX, point.offsetY);
    context.stroke();
    context.beginPath();
    context.arc(point.offsetX, point.offsetY, radius, 0, Math.PI * 2);
    context.fill();
    context.beginPath();
    context.moveTo(point.offsetX, point.offsetY);
}
}

        var engage = function(point) {
        dragging = true;
    putPoint(point);
}

        var disengage = function() {
        dragging = false;
    context.beginPath();
}


canvas.addEventListener("mousedown", engage);
canvas.addEventListener("mousemove", putPoint);
canvas.addEventListener("mouseup", disengage);

// new file for brush radius
        var setRadius = function(newRadius) {
            if (newRadius < minRad) {
        newRadius = minRad;
    } else if (newRadius > maxRad) {
        newRadius = maxRad;
    };
    radius = newRadius;
    context.lineWidth = radius * 2;

    radSpan.innerHTML = radius;
}

var minRad = 2,
    maxRad = 8,
    defaultRad = 4,
    interval = 2,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decRad'),
    incRad = document.getElementById('incRad')

        decRad.addEventListener("click", function() {
        setRadius(radius - interval);
    });

        incRad.addEventListener("click", function() {
        setRadius(radius + interval);
    });

    setRadius(defaultRad);

    // new file for color
var colors = ['black', 'red', 'cyan', 'purple', 'yellow', 'green']


        for (var i = 0; i < colors.length; i++) {
            var swatch = document.createElement('div');
    swatch.className = "swatch";
    swatch.style.backgroundColor = colors[i];
    swatch.addEventListener('click', setSwatch);
    document.getElementById('colors').appendChild(swatch);
}

        function setColor(color) {
        context.fillStyle = color;
    context.strokeStyle = color;
    var active = document.getElementsByClassName('active')[0];
            if (active) {
        active.className = 'swatch';
    }
}

        function setSwatch(e) {
            var swatch = e.target;
    setColor(swatch.style.backgroundColor);
    swatch.className += ' active';
}

        setSwatch({
        target: document.getElementsByClassName('swatch')[0]
});


// for save file

var saveButton = document.getElementById("save");

saveButton.addEventListener('click', saveImage);

        function saveImage() {
            var data = canvas.toDataURL();
    console.log(data);

    
        $.ajax("/drawing", {
            type: "POST",
            data: data
        }).then(
            function () {
                console.log("drawing sent");
                // load next page
                // location.reload();
            }
        );
    }
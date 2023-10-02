function solvequadratic() {
    // Get the input element by its ID
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    // Convert the input value to a number (float or integer)

    const Discriminant = b * b - 4 * a * c;

    if (Discriminant > 0) {
    const alpha = (-b + Math.sqrt(Discriminant)) / 2 * a;
    const beta = (-b - Math.sqrt(Discriminant)) / 2 * a;
        document.getElementById('result').innerHTML = `Root 1: ${alpha.toFixed(2)}, Root 2: ${beta.toFixed(2)}`;

    } else if(Discriminant === 0) {
        const root = -b / (2 * a);  
        document.getElementById('result').innerHTML = `repeated roots: ${alpha.toFixed(2)}`;
        } else {
            alert('The roots are imaginary');
        } 
    }
    var images = ["q.jpg", "q1.jpg"];
    $(function () {
        var i = 0;
        $("#dvImage").css("background-image", "url(images/" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#dvImage").fadeOut("slow", function () {
                $(this).css("background-image", "url(images/" + images[i] + ")");
                $(this).fadeIn("slow");
            });
        }, 5000);
    });
    

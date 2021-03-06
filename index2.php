<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>HTML5 camera test</title>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
    <body>
        <form>
            <input id="file-input" type="file" name="image" accept="image/*" capture="camera" />
        </form>
        <pre id="output"></pre>
 
        <script>
            var input = document.getElementById("file-input");
            input.addEventListener("change", function(event) {
                var file = input.files[0],
                    img = new Image(),
                    reader = new FileReader();

                document.getElementById("output").innerHTML =
                    file.name + "\n" +
                    file.type + "\n" +
                    file.size + " bytes\n";

				console.log(event);

                reader.onload = function(event) {
                    var img = new Image();
                    img.width = 300;
                    img.src = event.target.result;
                    document.body.appendChild(img);
					console.log(event);
                };
				
                reader.readAsDataURL(file);
				
            }, false);
        </script>
    </body>
</html>
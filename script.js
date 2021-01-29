let display = document.getElementById('display').value;
let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
    document.querySelectorAll('button')[i].addEventListener('click', function() {

        var text = this.innerHTML;
        if (text === "C") {
            document.getElementById('display').value = "";
        } else if (text !== "=") {
            document.getElementById('display').value = document.getElementById('display').value + text;
        } else {
            document.getElementById('display').value = eval(document.getElementById('display').value);
        }

    })

}
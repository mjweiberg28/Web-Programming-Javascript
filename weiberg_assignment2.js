function parseJSON() {
    var userInput = document.getElementById("userInput").value;
    var results = document.getElementById("results");
    results.innerHTML = "";

    try {
        // converts a string into an object and can throw exceptions into the "inspect" window in Chrome
        var userJson = JSON.parse(userInput);
    } catch (error) {
        displayError(error);
        return;
    }

    displayError("");

    // if 'buttons' field exists but is not an array
    if (userJson.buttons && !Array.isArray(userJson.buttons)) {
        displayError("Error: buttons is not an array");
    } else if (userJson.buttons) {
        for (var i = 0; i < userJson.buttons.length; i++) {
            if (typeof userJson.buttons[i] !== "string") {
                displayError("Error: JSON was parsed, but not all 'buttons' are strings");
                return;
            }
        }
        userJson.buttons.forEach(function (arrayElement) {
            var button = document.createElement('input');
            button.setAttribute("type", "button");
            button.setAttribute("value", arrayElement);
            results.appendChild(button);
        });
    }

    var linebreak = document.createElement('br');
    results.appendChild(linebreak);
    var linebreak = document.createElement('br');
    results.appendChild(linebreak);

    // if 'fields' field exists but is not an array
    if (userJson.fields && !Array.isArray(userJson.fields)) {
        displayError("Error: fields is not an array");
    } else if (userJson.fields) {
        for (var i = 0; i < userJson.fields.length; i++) {
            if (typeof userJson.fields[i] !== "string" && typeof userJson.fields[i] !== "object") {
                displayError("Error: JSON was parsed, but not all 'fields' are objects or strings");
                return;
            }
            if (typeof userJson.fields[i] === 'object' && !userJson.fields[i].name) {
                displayError("Error: One of your 'fields' did not have a name");
                return;
            }
        }
        for (var i = 0; i < userJson.fields.length; i++) {
            if (typeof userJson.fields[i] === 'object') {
                var para = document.createElement('text');
                para.innerText = userJson.fields[i].name + ": ";
                results.appendChild(para);
                var textBox = document.createElement('input')
                textBox.setAttribute("type", "text");
                textBox.setAttribute("value", userJson.fields[i].default);
                results.appendChild(textBox);
                var linebreak = document.createElement('br');
                results.appendChild(linebreak);
            }

            if (typeof userJson.fields[i] === 'string') {
                var para = document.createElement('text');
                para.innerText = userJson.fields[i] + ": ";
                results.appendChild(para);
                var textBox = document.createElement('input')
                textBox.setAttribute("type", "text");
                results.appendChild(textBox);
                var linebreak = document.createElement('br');
                results.appendChild(linebreak);
            }
        }
    }
}

function displayError(errorMessage) {
    var error = document.getElementById("error");
    error.innerHTML = errorMessage;
}

window.onload = function () {
    // DOM = Document Object Model
    document.getElementById("jsonButton").onclick = parseJSON;
}
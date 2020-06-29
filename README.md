# Web-Programming-Javascript
Assignment 2 of Bethel University Fall 2019's Web Programming course, this assignment being centered around Javascript.

Page accepts a generic block of text from a user, then if the inputted text is valid JSON,
it generates a web form based on the input. The page includes a TextArea and parse button for
inputting valid JSON, showing an error if invalid.

If the JSON includes the key 'buttons', the buttons field
accepts an array of strings, which creates the HTML buttons of those types if valid JSON.
Example JSON: {"buttons": ["Link Wins", "Ganon Loses"]}

If the JSON includes the key 'fields', the fields field
accepts an array of strings or objects. If an element of an array is a string, a text box labeled with
that string is displayed. If an element of an array is an object, the name and default fields of the
object are read. The name field becomes the label for the input box, and the default field sets the initial
value of the input box.
Example JSON: {"fields": [{"name": "Boot Type", "default": "lead"}, "Tunic Color"]}

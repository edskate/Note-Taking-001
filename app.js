// app.js
function saveNote() {
    const noteInput = document.getElementById("noteInput").value;
    if (noteInput.trim() !== "") {
        const noteList = document.getElementById("noteList");
        const li = document.createElement("li");
        li.textContent = noteInput;
        noteList.appendChild(li);
        // You can save the note to the server or local storage here
    }
}

var myVariable = 'global';
myOtherVariable = 'global';
function myFunction(){
    var myVariable = 'local';
    return myVariable;
}
function myOtherFunction(){
    returnVariable = 'local';
    return myOtherVariable;
}
console.log(myVariable);

console.log(myFunction());
console.log(myOtherVariable);
console.log(myOtherFunction());
console.log(myOtherVariable);

var num = 0;
num = num + 2;
num = num * 3;
num = num /2;
num++;
num += 1;
num -=2;
num*= 3;
num /=2;
num %= 2;
console.log('num == 1 :' + (num == 1));
console.log('num === 1:' + (num === 1));
console.log('num != 1:' + (num !=1));
console.log('num >  1:' + (num >1));
console.log('num <= 1:' + (num <= 1));
console.log('true && falce:' + (true && falce));
console.log('true || false:' + (true || false));
console.log('!true: ' + (!true)); 
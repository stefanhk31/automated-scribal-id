var x = document.getElementById("contact-form");
var createform = document.createElement('form');
createform.setAttribute("action", "");
createform.setAttribute("method", "post");
x.appendChild(createform);

var line = document.createElement('hr');
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label');
namelabel.innerHTML = "Your Name : ";
createform.appendChild(namelabel);

var namebreakOne = document.createElement('br');
createform.appendChild(namebreakOne);

var nameelement = document.createElement('input'); 
nameelement.setAttribute("type", "text");
nameelement.setAttribute("name", "dname");
nameelement.required = true;
createform.appendChild(nameelement);

var namebreakTwo = document.createElement('br');
createform.appendChild(namebreakTwo);

var emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailbreakOne = document.createElement('br');
createform.appendChild(emailbreakOne);

var emailelement = document.createElement('input');
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
emailelement.required = true;
createform.appendChild(emailelement);

var emailbreakTwo = document.createElement('br');
createform.appendChild(emailbreakTwo);

var messagelabel = document.createElement('label'); 
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var messagebreakOne = document.createElement('br');
createform.appendChild(messagebreakOne);

var messageelement = document.createElement('textarea');
messageelement.setAttribute("name", "dmessage");
messageelement.required = true;
createform.appendChild(messageelement);

var messagebreakTwo = document.createElement('br');
createform.appendChild(messagebreakTwo);

/* var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement); */


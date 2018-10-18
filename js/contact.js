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


var nameelement = document.createElement('input'); 
nameelement.setAttribute("type", "text");
nameelement.setAttribute("name", "dname");
nameelement.required = true;
createform.appendChild(nameelement);

var namebreak = document.createElement('br');
createform.appendChild(namebreak);

var emaillabel = document.createElement('label');
emaillabel.innerHTML = "Your Email : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement('input');
emailelement.setAttribute("type", "text");
emailelement.setAttribute("name", "demail");
emailelement.required = true;
createform.appendChild(emailelement);

var emailbreak = document.createElement('br');
createform.appendChild(emailbreak);

var messagelabel = document.createElement('label'); 
messagelabel.innerHTML = "Your Message : ";
createform.appendChild(messagelabel);

var messageelement = document.createElement('textarea');
messageelement.setAttribute("name", "dmessage");
messageelement.required = true;
createform.appendChild(messageelement);

var messagebreak = document.createElement('br');
createform.appendChild(messagebreak);

/* var submitelement = document.createElement('input'); 
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement); */


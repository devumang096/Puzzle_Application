let data = [];

function addData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const age = document.getElementById("age").value;
  const starttime = document.getElementById("starttime").value;
  const endtime = document.getElementById("endtime").value;
  
  // Validate input fields
  if (!name || !email || !phone) {
    alert("Please fill out all fields");
    return;
  }
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }
  if (!isValidPhone(phone)) {
    alert("Please enter a valid phone number");
    return;
  }

  const user = {
    name: name,
    email: email,
    phone: phone,
    age : age,
    starttime:starttime,
    endtime:endtime
  };

  data.push(user);
  displayData();
}

function displayData() {
  let output = "<h2>User Data:</h2>";

  // Sort data by name
  data.sort((a, b) => a.name.localeCompare(b.name));

  data.forEach(function(user) {
    output+=" <b>Default User</b><br><br><br>Name: Umang Devanshu<br>Email: devumang096@gmail.com<br>Phone: 6203683509"
    output += "<div class='user'>";
    output += "<ul>";
    output += "<li>Name: " + user.name + "</li>";
    output += "<li>Email: " + user.email + "</li>";
    output += "<li>Phone: " + user.phone + "</li>";
    output += "<li>Age: " + user.age + "</li>";
    output += "<li>start-time: " + user.starttime + "</li>";
    output += "<li>end-time: " + user.endtime + "</li>";
    output += "</ul>";
    output += "<button onclick='deleteData(\"" + user.email + "\")'>Delete</button>";
    output += "</div>";
  });

  document.getElementById("output").innerHTML = output;
}

function deleteData(email) {
  data = data.filter(user => user.email !== email);
  displayData();
}

function isValidEmail(email) {
  // Simple email validation using regular expression
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  // Simple phone validation to check for 10 digits
  return phone.length === 10 && !isNaN(phone);
}

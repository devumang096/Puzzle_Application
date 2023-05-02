function login() {
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;
  
    if (id === "admin@gmail.com" && password === "password") {
      window.location.href = "./../admin dashboard/index.html";
    } else {
      document.getElementById("output").innerHTML = "<p id='error'>Invalid ID or Password</p>";
    }
  }
  

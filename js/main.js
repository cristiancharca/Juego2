// const username = document.getElementById('username')
// const password = document.getElementById('password')
// const button = document.getElementById('button')

//  button.addEventListener('click', (e) => {
//     e.preventDefault()
//     const data = {
//          username: username.value,
//         password: password.value
//      }

//      console.log(data)
// })
function login(){
   var username, password
   
   username =document.getElementById("username").value;
   password = document.getElementById("password").value;

   if (username =="juego" && password =="1234"){
      window.location = "index.html";
      alert("iniciaste sesion!!!")
      //Location.href="index.html";
     // window.location = 'index.html';
     // Window.location="index.html";
      //window.location ="index.html";
   } else{
      alert("datos incorrectos")
   }

}
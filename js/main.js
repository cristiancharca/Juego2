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

   if (username =="trifon" && password == "1234"){
      alert("iniciaste sesion!!!")
      window.location = "index.html";
   } else{
      alert("datos incorrectos")
   }

}
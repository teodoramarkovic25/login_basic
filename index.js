function login(){

    event.preventDefault();
    var username =document.getElementById("username").value;
    var password =document.getElementById("password").value;
   

    if(username== "new_user" && password== 123456789){

      document.getElementById("username").insertAdjacentHTML('afterend', '<i class="fa fa-check"></i>');
      document.getElementById("password").insertAdjacentHTML('afterend', '<i class="fa fa-check"></i>');
        document.getElementById("username").style.border = "2px solid green";
        document.getElementById("password").style.border = "2px solid green";
        document.getElementById("p2").innerHTML = "Uspjesno ste se logovali";
    }
    else if (username !== "new_user" && password !== 123456789){
        document.getElementById("username").insertAdjacentHTML('afterend', '<i class="fa fa-times"></i>');
        document.getElementById("password").insertAdjacentHTML('afterend', '<i class="fa fa-times"></i>');
       document.getElementById("username").style.border = "2 px solid red";
       document.getElementById("password").style.border = "2 px solid red";
        document.getElementById("p1").innerHTML = "Niste unijeli ispravan username i password";
    }
    else if(username !== "new_user"  ){
     
        document.getElementById("username").style.border = "2px solid red";
        document.getElementById("p1").innerHTML = "Niste unijeli ispravan username";
    }
    else if(password !== 123456789  ){
        document.getElementById("username").style.border = "2 px solid green";
        document.getElementById("username").insertAdjacentHTML('afterend', '<i class="fa fa-check"></i>');
        document.getElementById("password").style.border = "2px solid red";
        document.getElementById("password").insertAdjacentHTML('afterend', '<i class="fa fa-times"></i>');
        document.getElementById("p1").innerHTML = "Niste unijeli ispravnu lozinku";
    }else {
        document.getElementById("button").addEventListener("click", function() {
            var userInput = document.getElementById("username").value;
          
            if (userInput.trim() === "") {
              alert("Niste unijeli username");
            } 
          });
          document.getElementById("button").addEventListener("click", function() {
            var userInput = document.getElementById("password").value;
          
            if (userInput.trim() === "") {
              alert("Niste unijeli password");
            } 
          });
    }
}







  
  
 
     
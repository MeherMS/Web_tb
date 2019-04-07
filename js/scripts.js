function inscription(){
 var fn=document.getElementById("first_name").value;
 var ln=document.getElementById('last_name').value;
 var un=document.getElementById("user_name").value;
 var m=document.getElementById("mail").value;
 var d=document.getElementById("date").value;
 var a=document.getElementById("adress").value;
 var c=document.getElementById("city").value;
 var con =document.getElementById("country");
 var cc=con.options[con.selectedIndex].value;
 var ps=document.getElementById("password").value;
 var im=document.getElementById("img").value;
 

	var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

   			 alert ("demande envoyeé avec succes");
 			window.location.href="events.html";
       }

      };
     xhttp.open('GET', "http://localhost/inscription.php?fn="+fn+"&ln="+ln+"&un="+un+"&m="+m+"&d="+d+"&a="+a+"&c="+c+"&cc="+cc+"&im="+im+"&ps="+ps,true);
     xhttp.send();
 }

function login() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
      	if (this.readyState == 4 && this.status == 200) {
    		 var x=JSON.parse(this.responseText);
     		 if(x["id"]=="erreur"){
     			alert('verifier compte');
     		   }
      
     
      
       			 else { alert ("welcome");
              window.location.href = "events.html";;}
                 }
 	  		};
  		var lo =document.getElementById("log").value;
  		var password =document.getElementById("pass").value;
		  xhttp.open("POST", "http:/localhost/login.php",true);
		  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	  	xhttp.send("l="+lo+"&p="+password);}

function signInTab() {
   document.getElementById("c").innerHTML="<br><br><br><div class='mt-10 '><input type='text' id='log' placeholder='User Name' required class='' ></div><div class='mt-10 '><input type='password' id='pass' placeholder='Password' required class='' ><br><div class='mt-10 '> <button onclick='login()' class='ml-10 primary_btn yellow_btn btn sub-btn rounded'>Sign In</button></div></div>";}   

function aff_acc(){

   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
           var x=JSON.parse(this.responseText);
            var ch="";
            for (var i = 0; i < x.length; i++) {
           
       ch=ch+("<div class='col-lg-6'><div class='single_event'><div class='row align-items-center'><div class='col-lg-6 col-md-6'><figure><img class='img-fluid w-100' src='img/event/e3.jpg' alt=''   onclick='redirect("+x[i].id_publication+")'><div class='img-overlay'></div></figure></div><div class='col-lg-6 col-md-6'><div class='content_wrapper'><h3 class='title' onclick='redirect("+x[i].id_publication+")'>"+x[i].titre+"</h3><p>"+x[i].description+"</p><div class='d-flex count_time' id='clockdiv3'></div><div class='mr-25'><h4 class='hours'>"+x[i].dure+"</h4><p>Hours</p></div></div><a onclick='redirect("+x[i].id_publication+")' class='primary_btn'>Learn More</a></div></div></div></div></div>")
      }; 
     

     document.getElementById("container").innerHTML=ch ;
     
   }};
     xhttp.open('GET',"http://localhost/getpublication.php",true);
     xhttp.send();
   }

function redirect(id){
    window.location.href = "event-details.html";
    localStorage.setItem("id_pub",id);}

function aff_pub(){
   var id= localStorage.getItem("id_pub");
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
           var x=JSON.parse(this.responseText);
           
             document.getElementById("titre").innerHTML=x.titre ;
             document.getElementById("description").innerHTML=x.description ;
             document.getElementById("dure").innerHTML="<div class='h4'>"+x.dure+" hours </div>" ;

             

   }};
   
    xhttp.open("POST", "http:/localhost/getpub.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("id="+id);


    }

function sendRequest(){
  // not worked yet 
   var xhttp = new XMLHttpRequest();
   xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
           var x=JSON.parse(this.responseText);
   }};
   
    xhttp.open("POST", "http:/localhost/getpub.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("id="+id);


    }
   
function addPub(){
  
  var titre=document.getElementById("titre").value;
  var date=document.getElementById("date").value;
  var adresse=document.getElementById("adress").value;
  var city=document.getElementById("city").value;
  var description=document.getElementById("description").value;
  var dur =document.getElementById("dure");
    var dure=dur.options[dur.selectedIndex].value;
 var im=document.getElementById("img").value;
 
 var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "http:/localhost/addpub.php",true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("titre="+titre+"&date="+date+"&adresse="+adresse+"&city="+city+"&description="+description+"&dure="+dure+"&image="+im);


 xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
  
        console.log("added");
          alert("publication added !");
   } else {alert("il y a un probleme!!");
            console.log("problem");};
   
    }
  }




    

/*


     
<div class='col-lg-6'><div class='single_event'><div class='row align-items-center'><div class='col-lg-6 col-md-6'><figure><img class='img-fluid w-100' src='img/event/e3.jpg' alt=''><div class='img-overlay'></div></figure></div><div class='col-lg-6 col-md-6'><div class='content_wrapper'><h3 class='title'><a href='event-details.html'>Save the clean water</a></h3><p>Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.</p><div class='d-flex count_time' id='clockdiv3'></div><div class='mr-25'><h4 class='hours'>08</h4><p>Hours</p></div></div><a href='#' class='primary_btn'>Learn More</a></div></div></div></div></div> */
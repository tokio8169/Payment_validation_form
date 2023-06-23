     // change in headings..//
     document.querySelector("h2 span").innerHTML="Application Form";

     // Button chnages //
     document.querySelector(".box-3").innerHTML="Login";
     document.querySelector(".box-3").style.color="darkred";

     // CONFIRM PASSWORD MESSAGE CHANGES //
     document.querySelector("#message").innerHTML="";
     document.querySelector("#message").style.color="white";
     document.querySelector("#message").style.margin="20px 10px";
     document.querySelector("#message").style.fontSize="18px";

    //  document.getElementsByClassName(".message").innerHTML="wrong pass";

     // All Field are Required case //
     function myname(){
       var Name=document.getElementById("text").value;

       var Gen=document.getElementById("gender").value;

       var Add=document.getElementById("Address").value;

       var Pin=document.getElementById("Pincode").value;

       var user=document.getElementById("username").value;

       var pass=document.getElementById("password").value;

       var confirmpass=document.getElementById("confirm_password").value;


      //  if(Name=="" || Gen=="" || Add=="" || Pin=="" || user=="" || pass=="" || confirmpass==""){
      //   // alert("All Field are Requried");
      //    alert("Please Enter Name");
      //    return false;

      //  }else{
      //   return true;
      //  }
          
      if(Name==""){
        alert("Please Enter Name");
        return false;
      }else if(Gen==""){
        alert("Please Enter Gender");
        return false;
      }else if(Add==""){
        alert("Please Enter Add");
        return false;
      }else if(Pin==""){
        alert("Please Enter Pincode");
        return false;
      }else if(user==""){
        alert("Please Enter Username");
        return false;

      } else if(pass==""){
        alert("Please Enter Password");
        return false ;

      }else if(confirmpass==""){
        alert("Please Enter Confirm Password");
        return false;
      }
      
      else {
        return true;
      }
       
    }  
  
      
    /* PASSWORD CONFIRM OR NOT PART CHANGES */
     
    document.querySelector(".box-3").addEventListener("click" , function(){
      
      var Passs1=document.getElementById("password").value;
      var Passs2=document.getElementById("confirm_password").value;
      var msg=document.getElementById("message");

     if(Passs1!=0){
      if(Passs1!=Passs2){
        msg.innerHTML="Password does not Matched";
        msg.style.color="red";
        return false;
      }
   
      else {
        msg.innerHTML="Password  matched";
        msg.style.color="lightgreen";
        return true;
      }
    }   

    })


    /* Payment form changes */

    document.getElementById("card_type").style.backgroundColor="white";

    
      document.querySelector("#abc").addEventListener("click" , function(){
      

      var card=document.getElementById("card_type").value;

      var cardNo=document.getElementById("cardno").value;

      var Expiry=document.getElementById("Expriydate").value;

      var Cvv=document.getElementById("cvv").value;
      

      if(card=="" || cardNo=="" || Expiry=="" || Cvv=="" ){
        alert("All Field are Requried ");
        return false ;
      }else {
        return true;


      }
  

     
    })
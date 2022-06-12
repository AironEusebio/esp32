const container = document.querySelector(".containerStart"),
      pwShowHide = document.querySelectorAll(".showHidePw"),
      pwFields = document.querySelectorAll(".password"),
      signUp1 = document.querySelector(".signup-link"),
      login1 = document.querySelector(".login-link");

    // js code to appear signup and login form
    signUp1.addEventListener("click", ( )=>{
        container.classList.add("active");
        document.title = "Registration | Oasis";
    });
    login1.addEventListener("click", ( )=>{
        container.classList.remove("active");
        document.title = "Login | Oasis";
    });



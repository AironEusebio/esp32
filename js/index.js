


//Eto yung pag connect sa Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCBk6kP8xENvajXRFD0l9SS_lr_P0z5VFk",
    authDomain: "watering-system-85cc1.firebaseapp.com",
    databaseURL: "https://watering-system-85cc1-default-rtdb.firebaseio.com",
    projectId: "watering-system-85cc1",
    storageBucket: "watering-system-85cc1.appspot.com",
    messagingSenderId: "957301103330",
    appId: "1:957301103330:web:68b710ad1cf2e40f621cbb",
    measurementId: "G-DP5HTK7YKL"
  };

firebase.initializeApp(firebaseConfig);



const auth = firebase.auth();
const database = firebase.database();

var userLoggedIn = firebase.auth().currentUser;


if(Notification.permission === "granted"){
  
}else if(Notification.permission !== "denied"){
  Notification.requestPermission().then(permission =>{
    
  });
}


setTimeout(function(){
    if(window.location.pathname == "/html/iconLoader.html"){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              window.location = "/html/intro.html";
            } else {
                window.location = "/html/loginform.html";
            }
          });
    }
}, 4000);



function showNotifCritical(){
  const notification = new Notification("New message from Oasis!", {
    body: "Critical Water Level, Refill water Container",
    icon: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487"
  })

  notification.onclick = (e) => {
    window.location.href = ""
  };
}

function showNotifGood(){
  const notification = new Notification("New message from Oasis!", {
    body: "Refilled Successfully!",
    icon: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487"
  })

  notification.onclick = (e) => {
    window.location.href = ""
  };
}

function showNotifWatering1(){
  const notification = new Notification("New message from Oasis!", {
    body: "Watered Successfully!",
    icon: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487"
  })

  notification.onclick = (e) => {
    window.location.href = ""
  };
}

function showNotifWatering2(){
  const notification = new Notification("New message from Oasis!", {
    body: "Watered Successfully!",
    icon: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487"
  })

  notification.onclick = (e) => {
    window.location.href = ""
  };
}

function showNotifLoad(){
  const notification = new Notification("New message from Oasis!", {
    body: "Not Enough Load, Reload Immediately!",
    icon: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487"
  })

  notification.onclick = (e) => {
    window.location.href = ""
  };
}



//Eto nakalimutan ko na pinag gamitan ko neto
const formLogin = document.getElementById('validationLogin');
const formSignUp = document.getElementById('validationSignUp');

var counter = 0;

//Eto naman yung localStorage parang nag save ka lang mismo ng info sa PC mo
var getUID = localStorage.getItem("userUID");
var getCodeWater = localStorage.getItem("codeWater");



var startTime, endTime;

function start() {
  startTime = new Date();
};

function end() {
  endTime = new Date();
  var timeDiff = endTime - startTime; //in ms
  // strip the ms
  timeDiff /= 1000;

  // get seconds 
  var seconds = Math.round(timeDiff);
  console.log(seconds + " seconds");
}


if(window.location.pathname == "/html/intro.html"){

    //This prevents back button
    // firebase.auth().onAuthStateChanged(function(user) {
    //     if (user) {
    //     } else {
    //         window.location = '/html/iconLoader.html'; 
    //     }
    //   });

   

    start();

    //Disable past dates
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if(dd<10){
      dd='0'+dd
    } 
    if(mm<10){
      mm='0'+mm
    } 
    var today = yyyy+'-'+mm+'-'+dd;
    document.getElementById("expirationDate").setAttribute("min", today);

    //Select default in radio button
    document.getElementById("dot-1").checked = true;

    var firebaseRef = database.ref("oasis/" + getCodeWater);
    firebaseRef.on("value", function(snapshot){
    var data = snapshot.val();
        document.getElementById('userText').innerHTML = data.username;
        document.getElementById('sensor2').innerHTML = data.sensor2 + "%";
        document.getElementById('sensor1').innerHTML = data.sensor1 + "%";
        document.getElementById('sensorName1').innerHTML = data.sensorName1;
        document.getElementById('sensorName2').innerHTML = data.sensorName2;
        document.getElementById('waterLevelName').innerHTML = data.waterLevelName;
        document.getElementById('signalName').innerHTML = data.signalName;
        document.getElementById('signal').innerHTML = data.signal;
        document.getElementById('sensorNameEdit1').innerHTML = data.sensorName1;
        document.getElementById('sensorNameEdit2').innerHTML = data.sensorName2;
        document.getElementById('plantName1').innerHTML = data.plantName1;
        document.getElementById('plantName2').innerHTML = data.plantName2;
        document.getElementById('sensorDescription1').innerHTML = data.description1;
        document.getElementById('sensorDescription2').innerHTML = data.description2;
        document.getElementById('pic1').src = data.plantPictureURL1;
        document.getElementById('pic2').src = data.plantPictureURL2;
        document.getElementById('profilePic').src = data.profilePicture;
        document.getElementById('waterLevel').innerHTML = data.waterLevel + "%";
        document.getElementById('profilePicID').src = data.profilePicture;
        document.getElementById('notifCount').innerText = data.counter;
        document.getElementById('plantProfileSoil').innerText = data.soilType;
        document.getElementById('plantProfileName').innerText = data.plantName1;
        document.getElementById('plantProfileDescription').innerText = data.description1;
        document.getElementById('plantProfilePicture').src = data.plantPictureURL1;


        if(data.waterAdd != "0"){
          const d = new Date();
          var day = d.getDay();

          if(day == 1){
            var databaseRef = database.ref();
              var userData = {
                  monday: data.waterAdd + data.monday,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }

          else if(day == 2){
            var databaseRef = database.ref();
              var userData = {
                  tuesday: data.waterAdd + data.tuesday,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }

          else if(day == 3){
            var databaseRef = database.ref();
              var userData = {
                  wednesday: data.waterAdd + data.wednesday,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }

          else if(day == 4){
            var databaseRef = database.ref();
              var userData = {
                  thursday: data.waterAdd + data.thursday,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }

          else if(day == 5){
            var databaseRef = database.ref();
              var userData = {
                  friday: data.waterAdd + data.friday,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }

          else if(day == 6){
            var databaseRef = database.ref();
              var userData = {
                  saturday: data.waterAdd + data.saturday,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }

          else if(day == 0){
            var databaseRef = database.ref();
              var userData = {
                  sunday: data.waterAdd + data.tuesday,
                  monday: 0,
                  tuesday: 0,
                  wednesday: 0,
                  thursday: 0,
                  friday: 0,
                  saturday: 0,
                  waterAdd: 0
              }
            databaseRef.child("oasis/" + getCodeWater).update(userData);
          }
        }





        //Push Notifications

        Chart.defaults.global.defaultFontFamily = "Poppins";
        let ctx = document.querySelector("#revenueChart");
        let revChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: [
              "Monday",
              "Tuesday",
              "Wedenesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            datasets: [
              {
                label: "Water Usage (mL)",
                borderColor: "blue",
                borderWidth: "3",
                backgroundColor: "rgba(233,238,253,0.5)",
                data: [data.monday, data.tuesday, data.wednesday, data.thursday, data.friday, data.saturday, data.sunday],
              },
            ],
          },
          options: {
            responsive: true,
            tooltips: {
              intersect: false,
              node: "index",
            },
          },
        });
  
        ctx.style.width = "100%";
        ctx.style.height = "100%";


        
       


      //Load
       var boxItemLoad = document.getElementById("boxItemLoad");
       var primaryMessageLoad = document.getElementById("primaryMessageLoad");
       var instructionsLoad = document.getElementById("instructionsLoad");
       var elapsedLoad = document.getElementById("elapsedLoad");

      //Critical
      var boxItemCritical = document.getElementById("boxItemCritical");
      var primaryMessageCritical = document.getElementById("primaryMessageCritical");
      var instructionsCritical = document.getElementById("instructionsCritical");
      var elapsedCritical = document.getElementById("elapsedCritical");

      //Good
      var boxItemGood = document.getElementById("boxItemGood");
      var primaryMessageGood = document.getElementById("primaryMessageGood");
      var instructionsGood = document.getElementById("instructionsGood");
      var elapsedGood = document.getElementById("elapsedGood");

      //Weekly
      var boxItemWeekly = document.getElementById("boxItemWeekly");
      var primaryMessageWeekly = document.getElementById("primaryMessageWeekly");
      var instructionsWeekly = document.getElementById("instructionsWeekly");
      var elapsedWeekly = document.getElementById("elapsedWeekly");

      //Good
      var boxItemWatering1 = document.getElementById("boxItemWatering1");
      var primaryMessageWatering1 = document.getElementById("primaryMessageWatering1");
      var instructionsWatering1 = document.getElementById("instructionsWatering1");
      var elapsedWatering1 = document.getElementById("elapsedWatering1");

      //Good
      var boxItemWatering2 = document.getElementById("boxItemWatering2");
      var primaryMessageWatering2 = document.getElementById("primaryMessageWatering2");
      var instructionsWatering2 = document.getElementById("instructionsWatering2");
      var elapsedWatering2 = document.getElementById("elapsedWatering2");

      //Text
      var boxItemText = document.getElementById("boxItemText");
      var primaryMessageText = document.getElementById("primaryMessageText");
      var instructionsText = document.getElementById("instructionsText");
      var elapsedText = document.getElementById("elapsedText");


      if(data.waterLevel < 20){

            if(data.criticalCheck == "true"){
              boxItemCritical.style.display = "flex";
              boxItemCritical.style.animation = "fade-in .5s forwards";

              endTime = new Date();
                    
              var timeDiff = endTime - Date.parse(data.elapsedCritical); //in ms
              // strip the ms
              timeDiff /= 60000;
            
              // get seconds 
              var minutes = Math.round(timeDiff);
              console.log(minutes + " minutes");

              if(minutes < 1){
                document.getElementById("elapsedCritical").innerHTML = "Just now";
              }else if(minutes < 59){
                document.getElementById("elapsedCritical").innerHTML = minutes + " minutes ago";
              }else if(minutes/60 < 23){
                if(Math.round(minutes/60) == 1){
                  document.getElementById("elapsedCritical").innerHTML = Math.round(minutes/60) + " hour ago";
                }else{
                  document.getElementById("elapsedCritical").innerHTML = Math.round(minutes/60) + " hours ago";
                }
                
              }else{
                if(Math.round(minutes/1440) == 1){
                  document.getElementById("elapsedCritical").innerHTML = Math.round(minutes/1440) + " day ago";
                }else{
                  document.getElementById("elapsedCritical").innerHTML = Math.round(minutes/1440) + " days ago";
                }
                
              }

          }else if(data.criticalCheck == "false"){
            showNotifCritical();
              var databaseRef = database.ref();
              var userData = {
                  elapsedCritical : Date(),
                  criticalCheck: "true",
                  counter: 1
              }
              databaseRef.child("oasis/" + getCodeWater).update(userData);
              
          }
      }

      if(data.waterLevel > 20){

        if(data.goodCheck == "true"){
          
          boxItemGood.style.display = "flex";
          boxItemGood.style.animation = "fade-in .5s forwards";

          endTime = new Date();
                
          var timeDiff = endTime - Date.parse(data.elapsedGood); //in ms
          // strip the ms
          timeDiff /= 60000;
        
          // get seconds 
          var minutes = Math.round(timeDiff);
          console.log(minutes + " minutes");

          if(minutes < 1){
            document.getElementById("elapsedGood").innerHTML = "Just now";
          }else if(minutes < 59){
            document.getElementById("elapsedGood").innerHTML = minutes + " minutes ago";
          }else if(minutes/60 < 23){
            if(Math.round(minutes/60) == 1){
              document.getElementById("elapsedGood").innerHTML = Math.round(minutes/60) + " hour ago";
            }else{
              document.getElementById("elapsedGood").innerHTML = Math.round(minutes/60) + " hours ago";
            }
            
          }else{
            if(Math.round(minutes/1440) == 1){
              document.getElementById("elapsedGood").innerHTML = Math.round(minutes/1440) + " day ago";
            }else{
              document.getElementById("elapsedGood").innerHTML = Math.round(minutes/1440) + " days ago";
            }
            
          }

      }else if(data.goodCheck == "false"){
        showNotifGood();
        var databaseRef = database.ref();
          var userData = {
              elapsedGood : Date(),
              goodCheck: "true",
              counter: data.counter + 1
          }
          databaseRef.child("oasis/" + getCodeWater).update(userData);
          
      }
  }


  if(data.sensor1 > data.setSensor1){

    if(data.watering1Check == "true"){
      
      boxItemWatering1.style.display = "flex";
      boxItemWatering1.style.animation = "fade-in .5s forwards";

      endTime = new Date();
            
      var timeDiff = endTime - Date.parse(data.elapsedWatering1); //in ms
      // strip the ms
      timeDiff /= 60000;
    
      // get seconds 
      var minutes = Math.round(timeDiff);
      console.log(minutes + " minutes");

      if(minutes < 1){
        document.getElementById("elapsedWatering1").innerHTML = "Just now";
      }else if(minutes < 59){
        document.getElementById("elapsedWatering1").innerHTML = minutes + " minutes ago";
      }else if(minutes/60 < 23){
        if(Math.round(minutes/60) == 1){
          document.getElementById("elapsedWatering1").innerHTML = Math.round(minutes/60) + " hour ago";
        }else{
          document.getElementById("elapsedWatering1").innerHTML = Math.round(minutes/60) + " hours ago";
        }
        
      }else{
        if(Math.round(minutes/1440) == 1){
          document.getElementById("elapsedWatering1").innerHTML = Math.round(minutes/1440) + " day ago";
        }else{
          document.getElementById("elapsedWatering1").innerHTML = Math.round(minutes/1440) + " days ago";
        }
        
      }

  }else if(data.watering1Check == "false"){
    showNotifWatering1();
    var databaseRef = database.ref();
      var userData = {
        elapsedWatering1 : Date(),
        watering1Check: "true",
        counter: data.counter + 1
      }
      databaseRef.child("oasis/" + getCodeWater).update(userData);
      
  }
}

if(data.sensor2 > data.setSensor2){

  if(data.watering2Check == "true"){
    
    boxItemWatering2.style.display = "flex";
    boxItemWatering2.style.animation = "fade-in .5s forwards";

    endTime = new Date();
          
    var timeDiff = endTime - Date.parse(data.elapsedWatering2); //in ms
    // strip the ms
    timeDiff /= 60000;
  
    // get seconds 
    var minutes = Math.round(timeDiff);
    console.log(minutes + " minutes");

    if(minutes < 1){
      document.getElementById("elapsedWatering2").innerHTML = "Just now";
    }else if(minutes < 59){
      document.getElementById("elapsedWatering2").innerHTML = minutes + " minutes ago";
    }else if(minutes/60 < 23){
      if(Math.round(minutes/60) == 1){
        document.getElementById("elapsedWatering2").innerHTML = Math.round(minutes/60) + " hour ago";
      }else{
        document.getElementById("elapsedWatering2").innerHTML = Math.round(minutes/60) + " hours ago";
      }
      
    }else{
      if(Math.round(minutes/1440) == 1){
        document.getElementById("elapsedWatering2").innerHTML = Math.round(minutes/1440) + " day ago";
      }else{
        document.getElementById("elapsedWatering2").innerHTML = Math.round(minutes/1440) + " days ago";
      }
      
    }

}else if(data.watering2Check == "false"){
  showNotifWatering2();
  var databaseRef = database.ref();
    var userData = {
      elapsedWatering2 : Date(),
      watering2Check: "true",
      counter: data.counter + 1
    }
    databaseRef.child("oasis/" + getCodeWater).update(userData);
    
}
}

  });




}    




//Registration Form
function register(){
  var code = document.getElementById("registerCode").value;

    //Kuhanin muna mga value sa input box
    var username = document.getElementById("registerUsername").value;
    
    var email = document.getElementById("registerEmail").value;
    var password = document.getElementById("registerPassword").value;
    
    var firebaseRef = database.ref("users/" + code);
    firebaseRef.once("value",snapshot => { 
      if (snapshot.exists()){ 
        const userData = snapshot.val();
        if(code == userData){
        
          console.log("exists!", userData); 



          if(username.length < 7){
            return;
        }
            
        if (validateEmail(email) == false){
            return;
        }
                    
        if(validatePassword(password) == false){
            return;
        }
        
    
        //Pag okay naman lahat ng inputs dito didiretso magsesesave na ng data sa Firebase
        auth.createUserWithEmailAndPassword(email, password)
                .then(function(){
    
                    var user = auth.currentUser;
                    
    
                    
                    var databaseRef = database.ref();
    
                    var userData = {
                        email : email,
                        username : username,
                        sensorName1: "Layer 1 Moisture",
                        sensorName2: "Layer 2 Moisture",
                        sensor1: 0,
                        sensor2: 0,
                        waterLevelName: "Water Level",
                        waterLevel: 0,
                        signalName: "Signal Strength",
                        signal: "none",
                        setSensor1: 0,
                        setSensor2: 0,
                        description1: "",
                        description2: "",  
                        plantName1: "Plant Name",
                        plantName2: "Plant Name",
                        profilePicture: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/userpic.jpg?alt=media&token=9825af99-258a-4556-8320-252d4ab9a957",
                        plantPictureURL1: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487",
                        plantPictureURL2: "https://firebasestorage.googleapis.com/v0/b/watering-system-85cc1.appspot.com/o/plantProfile.jpg?alt=media&token=09f20ed2-e757-4ece-8370-82d6f3cd3487",
                        mobileNumber: "",
                        expirationDate: "",
                        soilType: "",
                        loadPromo: "",
                        communicationType: "",
                        oasisCode: code,
                        numberOfMessages: 0,
                        counter: 0,
                        monday: 0,
                        tuesday: 0,
                        wednesday: 0,
                        thursday: 0,
                        friday: 0,
                        saturday: 0,
                        sunday: 0,
                        elapsedCritical: "",
                        elapsedGood: "",
                        elapsedLoad: "",
                        elapsedText: "",
                        elapsedWatering1: "",
                        elapsedWatering2: "",
                        elapsedWeekly: "",
                        criticalCheck: "false", 
                        goodCheck: "false",
                        loadCheck: "false",
                        watering1Check: "false",
                        watering2Check: "false",
                        waterAdd: 0,
                        loginTime: Date()
                    }

                    var userCode = {
                        oasisCode : code
                    }

                    var deleteCode = {
                        oasisCode : ""
                    }

                    databaseRef.child('oasis/' + code).set(userData);
                    databaseRef.child('users/' + user.uid + "/").set(userCode);
                    databaseRef.child('users/' + code).set(deleteCode);
                    
                    const button = document.querySelector("button"),
                    toast = document.querySelector(".toast")
                    closeIcon = document.querySelector(".close"),
                    progress = document.querySelector(".progress");
                    document.getElementById("firstMessage").innerHTML = "Saving Informations"
                    document.getElementById("secondMessage").innerHTML = "Please Wait"
                    document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                    document.getElementById("iconToast").className = "fa-solid fa-check check";
                    let timer1, timer2;
              
                    toast.style.display = "block";
                      toast.classList.add("active");
                      progress.classList.add("active");
              
                      timer1 = setTimeout(() => {
                          toast.classList.remove("active");
                          document.getElementById("registerUsername").value = '';
                        document.getElementById("registerCode").value = '';
                        document.getElementById("registerEmail").value = '';
                        document.getElementById("registerPassword").value = '';
    
                      }, 5000); //1s = 1000 milliseconds
              
                      timer2 = setTimeout(() => {
                        progress.classList.remove("active");
                      }, 5300);
                    
                    closeIcon.addEventListener("click", () => {
                      toast.classList.remove("active");
                      
                      setTimeout(() => {
                        progress.classList.remove("active");
                      }, 300);
              
                      clearTimeout(timer1);
                      clearTimeout(timer2);
                    });
    
                    //Clear lang yung input box para makapag input ulit
                    
    
                    
                }).catch(function(error){
                  const button = document.querySelector("button"),
                  toast = document.querySelector(".toast")
                  closeIcon = document.querySelector(".close"),
                  progress = document.querySelector(".progress");
                  document.getElementById("firstMessage").innerHTML = "Failed";
                  document.getElementById("secondMessage").innerHTML = "Email already exists";
                  document.getElementById("iconToast").style.backgroundColor = "red"; 
                  document.getElementById("iconToast").className = "fa-solid fa-xmark check";
  
                  let timer1, timer2;
            
                  toast.style.display = "block";
                    toast.classList.add("active");
                    progress.classList.add("active");
            
                    timer1 = setTimeout(() => {
                        toast.classList.remove("active");
  
                    }, 5000); //1s = 1000 milliseconds
            
                    timer2 = setTimeout(() => {
                      progress.classList.remove("active");
                    }, 5300);
                  
                  closeIcon.addEventListener("click", () => {
                    toast.classList.remove("active");
                    
                    setTimeout(() => {
                      progress.classList.remove("active");
                    }, 300);
            
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                  });
    
                })

        }else{
          const button = document.querySelector("button"),
                  toast = document.querySelector(".toast")
                  closeIcon = document.querySelector(".close"),
                  progress = document.querySelector(".progress");
                  document.getElementById("firstMessage").innerHTML = "Failed";
                  document.getElementById("secondMessage").innerHTML = "Oasis Code is already used";
                  document.getElementById("iconToast").style.backgroundColor = "red"; 
                  document.getElementById("iconToast").className = "fa-solid fa-xmark check";
  
                  let timer1, timer2;
            
                  toast.style.display = "block";
                    toast.classList.add("active");
                    progress.classList.add("active");
            
                    timer1 = setTimeout(() => {
                        toast.classList.remove("active");
  
                    }, 5000); //1s = 1000 milliseconds
            
                    timer2 = setTimeout(() => {
                      progress.classList.remove("active");
                    }, 5300);
                  
                  closeIcon.addEventListener("click", () => {
                    toast.classList.remove("active");
                    
                    setTimeout(() => {
                      progress.classList.remove("active");
                    }, 300);
            
                    clearTimeout(timer1);
                    clearTimeout(timer2);
                  });
          return;
          
        }
        
        
  
      }else{
        const button = document.querySelector("button"),
        toast = document.querySelector(".toast")
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");
        document.getElementById("firstMessage").innerHTML = "Failed";
        document.getElementById("secondMessage").innerHTML = "Oasis Code doesn't exist";
        document.getElementById("iconToast").style.backgroundColor = "red"; 
        document.getElementById("iconToast").className = "fa-solid fa-xmark check";

        let timer1, timer2;
  
        toast.style.display = "block";
          toast.classList.add("active");
          progress.classList.add("active");
  
          timer1 = setTimeout(() => {
              toast.classList.remove("active");

          }, 5000); //1s = 1000 milliseconds
  
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        
        closeIcon.addEventListener("click", () => {
          toast.classList.remove("active");
          
          setTimeout(() => {
            progress.classList.remove("active");
          }, 300);
  
          clearTimeout(timer1);
          clearTimeout(timer2);
        });
        return;
      } 
    });
    
    

    // Validation of Inputs pag pumasok sa if else statement return na ibig sabihin hinto na yung code
    
}


//Validation of Email kung tama yung format
function validateEmail(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) == true){
        return true
    }else{
        return false
    }

}

function validatePhoneNumber(number){
    expression = /^(09|\+639)\d{9}$/
    if(expression.test(number) == true){
        return true;
    }else{
        return false;
    }
}

//Validation of Password kung mataas yung security
function validatePassword(password){
    expression = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    if(expression.test(password) == true){
        return true
    }else{
        return false
    }
}


//Login Form using User Authentication Firebase
function login(){
    var email = document.getElementById("validationUsername").value;
    var password = document.getElementById("validationPassword").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(function(){

        var user = auth.currentUser;


        var firebaseRef = database.ref("users/" + user.uid + "/oasisCode");
        firebaseRef.on("value", function(snapshot){
        var data = snapshot.val();

            localStorage.setItem("codeWater", data);

            //second phase
            var databaseRef = database.ref();

            var userData = {
                loginTime: Date()
            }
    
    
            databaseRef.child('oasis/' + data).update(userData);
            
    
                const button = document.querySelector("button"),
                toast = document.querySelector(".toast")
                closeIcon = document.querySelector(".close"),
                progress = document.querySelector(".progress");
                document.getElementById("firstMessage").innerHTML = "Logging in"
                document.getElementById("secondMessage").innerHTML = "Please Wait"
                document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                document.getElementById("iconToast").className = "fa-solid fa-arrow-right-to-bracket check";
    
                let timer1, timer2;
          
                toast.style.display = "block";
                  toast.classList.add("active");
                  progress.classList.add("active");
          
                  timer1 = setTimeout(() => {
                      toast.classList.remove("active");
                      firebase.auth().onAuthStateChanged(user => {
                        if(user) {
                            document.getElementById("validationUsername").value = '';
                            document.getElementById("validationPassword").value = '';              
                            localStorage.setItem("myName", email);
                            localStorage.setItem("userUID", user.uid);
                            window.location = '/html/intro.html'; 
                            
                        }
                      });
                  }, 5000); //1s = 1000 milliseconds
          
                  timer2 = setTimeout(() => {
                    progress.classList.remove("active");
                  }, 5300);
                
                closeIcon.addEventListener("click", () => {
                  toast.classList.remove("active");
                  
                  setTimeout(() => {
                    progress.classList.remove("active");
                  }, 300);
          
                  clearTimeout(timer1);
                  clearTimeout(timer2);
                });
    
            
        });

        
    })
    .catch(function(error){
                const button = document.querySelector("button"),
                toast = document.querySelector(".toast")
                closeIcon = document.querySelector(".close"),
                progress = document.querySelector(".progress");
                document.getElementById("firstMessage").innerHTML = "Failed"
                document.getElementById("secondMessage").innerHTML = "Wrong Password or Email"
                document.getElementById("iconToast").style.backgroundColor = "red"; 
                document.getElementById("iconToast").className = "fa-solid fa-xmark check";

                let timer1, timer2;
          
                toast.style.display = "block";
                  toast.classList.add("active");
                  progress.classList.add("active");
          
                  timer1 = setTimeout(() => {
                      toast.classList.remove("active");
                      document.getElementById("registerUsername").value = '';
                    document.getElementById("registerCode").value = '';
                    document.getElementById("registerEmail").value = '';
                    document.getElementById("registerPassword").value = '';

                  }, 5000); //1s = 1000 milliseconds
          
                  timer2 = setTimeout(() => {
                    progress.classList.remove("active");
                  }, 5300);
                
                closeIcon.addEventListener("click", () => {
                  toast.classList.remove("active");
                  
                  setTimeout(() => {
                    progress.classList.remove("active");
                  }, 300);
          
                  clearTimeout(timer1);
                  clearTimeout(timer2);
                });
    })
}


//Get Data From Firebase
function getEmail(){

    var username = document.getElementById("get").value;
    var username_ref = database.ref("users/"+username);
    username_ref.on("value", function(snapshot){
        var data = snapshot.val();
    })
}


//Update Data from Firebase
function update(){

    var ginagawa = document.getElementById("update").value;
    var username = document.getElementById("username").value;
    var updates = {
        ginagawa: ginagawa
    }

    database.ref("users/"+username).update(updates);
}

//Remove Date from Firebase
function remove(){
    var username = document.getElementById("remove").value;

    database.ref("users/"+username).remove();
}

//Paglipat sa mga sections
function gone(){
    document.getElementById("try1").style.display = "none";
    document.getElementById("overview").style.display = "none";
    document.getElementById("palit").style.display = "block";
    document.getElementById("palit").style.animation = "fade-in .5s forwards";
    document.getElementById("pop").style.display = "none";
    document.getElementById("messageSection").style.display = "none";
    document.getElementById("moistureGuideSection").style.display = "none";
    document.getElementById("settingsSection").style.display = "none";
    
    document.title = "Adjustments | Oasis";
}

function back(){
    document.getElementById("overview").style.display = "block";
    document.getElementById("overview").style.animation = "fade-in .5s forwards";
    document.getElementById("try1").style.animation = "fade-in .5s forwards";
    document.getElementById("try1").style.display = "block";
    document.getElementById("palit").style.display = "none";
    document.getElementById("pop").style.display = "none";
    document.getElementById("messageSection").style.display = "none";
    document.getElementById("moistureGuideSection").style.display = "none";
    document.getElementById("settingsSection").style.display = "none";
    
    document.title = "Oasis";
}

function goMessage(){
    document.getElementById("try1").style.display = "none";
    document.getElementById("overview").style.display = "none";
    document.getElementById("palit").style.display = "none";
    document.getElementById("moistureGuideSection").style.display = "none";
    document.getElementById("pop").style.display = "none";
    document.getElementById("messageSection").style.animation = "fade-in .5s forwards";
    document.getElementById("messageSection").style.display = "block";
    document.getElementById("settingsSection").style.display = "none";

    document.title = "Communication | Oasis";
}

function goMoistureGuide(){
    document.getElementById("try1").style.display = "none";
    document.getElementById("overview").style.display = "none";
    document.getElementById("palit").style.display = "none";
    document.getElementById("pop").style.display = "none";
    document.getElementById("moistureGuideSection").style.animation = "fade-in .5s forwards";
    document.getElementById("moistureGuideSection").style.display = "block";
    document.getElementById("messageSection").style.display = "none";
    document.getElementById("settingsSection").style.display = "none";
    document.title = "Communication | Moisture Guide";
}

function goSettings(){
    document.getElementById("try1").style.display = "none";
    document.getElementById("overview").style.display = "none";
    document.getElementById("palit").style.display = "none";
    document.getElementById("moistureGuideSection").style.display = "none";
    document.getElementById("pop").style.display = "none";
    document.getElementById("settingsSection").style.display = "block";
    document.getElementById("settingsSection").style.animation = "fade-in .5s forwards";
    document.getElementById("messageSection").style.display = "none";

    document.title = "Settings | Oasis";
}

//Send Data to Popup
//Yung Popup kasi di pa sya nakadisplay sa simula pag pinindot mo yung button dun palang sya lalabas kaya naglagay ako ng if else
function popup(){
    if(event.srcElement.id == "editPopup1"){
        document.getElementById('try1').scrollIntoView(true);
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        document.getElementById("holderPlantName").value = data.plantName1;
        document.getElementById("selectedMoisture").innerHTML = data.sensorName1;
        document.getElementById("holderMoistureLevel").value = data.setSensor1;
        localStorage.setItem("myChoice", "1");
        document.getElementById('myImg').src = data.plantPictureURL1;
    })

    }else if(event.srcElement.id == "editPopup2"){
        document.getElementById("selectedMoisture").innerHTML = "Soil Moisture 2";
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        document.getElementById("holderPlantName").value = data.plantName2;
        document.getElementById("selectedMoisture").innerHTML = data.sensorName2;
        document.getElementById("holderMoistureLevel").value = data.setSensor2;
        localStorage.setItem("myChoice", "2");
        document.getElementById('myImg').src = data.plantPictureURL2;
    })

    }else if(event.srcElement.id == "editPopup3"){
        document.getElementById("selectedMoisture").innerHTML = "Soil Moisture 3";
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        document.getElementById("holderPlantName").value = data.plantName1;
        localStorage.setItem("myChoice", "3");
    })

    }
   
    document.getElementById("pop").style.display = "block";
    document.getElementById("pop").style.animation = "fade-in .5s forwards";
}



//Eto naman para lang pag pinindot mo yung mga options sa gilid magkakaron sila ng 'active' na class name
let sidebar = document.querySelectorAll(".sidebar-menu a");

sidebar.forEach(button =>{
    button.addEventListener('click', function(){
        sidebar.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});



const btnUpload = document.querySelector("#submitIt");
//Eto sa picture 
function clickMe(){
    localStorage.setItem("count", "1");
}

function clickProfile(){
    localStorage.setItem("countProfile", "1");

}





//Uploading Image
function uploadImage(){

    var holderSoilType = document.getElementById("pickSoilType").value;
    var holderDescription = document.getElementById("holderDescription").value;
    var holderPlantName = document.getElementById("holderPlantName").value;
    var holderMoistureLevel = document.getElementById("holderMoistureLevel").value;
    if(localStorage.getItem("myChoice") == "1"){
        
        var userData = {
            description1: holderDescription,
            plantName1: holderPlantName,
            soilType: holderSoilType,
            setSensor1: holderMoistureLevel
        }

        if(holderPlantName == "" ){
            return;
        }
        if(holderSoilType == ""){
            return;
        }

        if(holderMoistureLevel == ""){
          return;
        }
        
        if(holderMoistureLevel > 100 || holderMoistureLevel < 20){
          return;
        }

        if(holderSoilType == "Loamy"){

        }
        if(holderSoilType == "Sandy"){
            
        }
        database.ref("oasis/" + getCodeWater).update(userData);
        const button = document.querySelector("button"),
        toast = document.querySelector(".toast")
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");
        document.getElementById("firstMessage").innerHTML = "Success"
        document.getElementById("secondMessage").innerHTML = "Change has been Updated"
        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
  
        let timer1, timer2;
  
        toast.style.display = "block";
          toast.classList.add("active");
          progress.classList.add("active");
  
          timer1 = setTimeout(() => {
              toast.classList.remove("active");
          }, 5000); //1s = 1000 milliseconds
  
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        
        closeIcon.addEventListener("click", () => {
          toast.classList.remove("active");
          
          setTimeout(() => {
            progress.classList.remove("active");
          }, 300);
  
          clearTimeout(timer1);
          clearTimeout(timer2);
        });

        

        if(localStorage.getItem("count")=="1"){
            localStorage.setItem("count", "0");
            const ref = firebase.storage().ref("oasis/" + getCodeWater)
            const file = document.querySelector("#picture").files[0]
            const name = "sensorPic1"
            const metadata = {
                contentType:file.type
            }
            const task = ref.child(name).put(file,metadata)
    
            task
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                const image = document.querySelector("#myImg")
                image.src = url
                var userData = {
                    plantPictureURL1: url
                }
    
                database.ref("oasis/" + getCodeWater).update(userData);
                const button = document.querySelector("button"),
                toast = document.querySelector(".toast")
                closeIcon = document.querySelector(".close"),
                progress = document.querySelector(".progress");
                document.getElementById("firstMessage").value = "Success"
                document.getElementById("secondMessage").value = "Picture has been Updated"
          
                let timer1, timer2;
          
                toast.style.display = "block";
                  toast.classList.add("active");
                  progress.classList.add("active");
          
                  timer1 = setTimeout(() => {
                      toast.classList.remove("active");
                  }, 5000); //1s = 1000 milliseconds
          
                  timer2 = setTimeout(() => {
                    progress.classList.remove("active");
                  }, 5300);
                
                closeIcon.addEventListener("click", () => {
                  toast.classList.remove("active");
                  
                  setTimeout(() => {
                    progress.classList.remove("active");
                  }, 300);
          
                  clearTimeout(timer1);
                  clearTimeout(timer2);
                });
            })
        }else{
    
        }

    }else if(localStorage.getItem("myChoice") == "2"){
        var userData = {
            setSensor2: holderMoistureLevel,
            description2: holderDescription,
            plantName2: holderPlantName
        }

        database.ref("oasis/" + getCodeWater).update(userData);
        const button = document.querySelector("button"),
        toast = document.querySelector(".toast")
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");
        document.getElementById("firstMessage").innerHTML = "Success"
        document.getElementById("secondMessage").innerHTML = "Changes has been Updated"
        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
  
        let timer1, timer2;
  
        toast.style.display = "block";
          toast.classList.add("active");
          progress.classList.add("active");
  
          timer1 = setTimeout(() => {
              toast.classList.remove("active");
          }, 5000); //1s = 1000 milliseconds
  
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        
        closeIcon.addEventListener("click", () => {
          toast.classList.remove("active");
          
          setTimeout(() => {
            progress.classList.remove("active");
          }, 300);
  
          clearTimeout(timer1);
          clearTimeout(timer2);
        });


        if(localStorage.getItem("count")=="1"){
            localStorage.setItem("count", "0");
            const ref = firebase.storage().ref("oasis/" + getCodeWater)
        const file = document.querySelector("#picture").files[0]
        const name = "sensorPic2"
        const metadata = {
            contentType:file.type
        }
        const task = ref.child(name).put(file,metadata)
    
        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            const image = document.querySelector("#myImg")
            image.src = url
            var userData = {
                plantPictureURL2: url
            }
    
            database.ref("oasis/" + getCodeWater).update(userData);
            const button = document.querySelector("button"),
            toast = document.querySelector(".toast")
            closeIcon = document.querySelector(".close"),
            progress = document.querySelector(".progress");
            document.getElementById("firstMessage").innerHTML = "Success"
            document.getElementById("secondMessage").innerHTML = "Changes has been Updated"
            document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
            document.getElementById("iconToast").className = "fas fa-solid fa-check check";
      
            let timer1, timer2;
      
            toast.style.display = "block";
              toast.classList.add("active");
              progress.classList.add("active");
      
              timer1 = setTimeout(() => {
                  toast.classList.remove("active");
              }, 5000); //1s = 1000 milliseconds
      
              timer2 = setTimeout(() => {
                progress.classList.remove("active");
              }, 5300);
            
            closeIcon.addEventListener("click", () => {
              toast.classList.remove("active");
              
              setTimeout(() => {
                progress.classList.remove("active");
              }, 300);
      
              clearTimeout(timer1);
              clearTimeout(timer2);
            });
        })
        }else{
    
        }


    }else if(localStorage.getItem("myChoice") == "3"){
        var userData = {
            setSensor1: holderMoistureLevel,
            description1: holderDescription,
            plantName1: holderPlantName
        }

        database.ref("oasis/" + getCodeWater).update(userData);

        if(localStorage.getItem("count")=="1"){
            localStorage.setItem("count", "0");
            const ref = firebase.storage().ref("oasis/" + getCodeWater)
            const file = document.querySelector("#picture").files[0]
            const name = "sensorPic1"
        const metadata = {
            contentType:file.type
        }
        const task = ref.child(name).put(file,metadata)
    
        task
        .then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            const image = document.querySelector("#myImg")
            image.src = url
            var userData = {
                plantPictureURL1: url
            }
    
            database.ref("oasis/" + getCodeWater).update(userData);

            
        })
        }else{
    
        }

    }
    const button = document.querySelector("button"),
      toast = document.querySelector(".toast")
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");
      document.getElementById("firstMessage").value = "Success"
      document.getElementById("secondMessage").value = "Your changes has been saved"
      document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
            document.getElementById("iconToast").className = "fas fa-solid fa-check check";

      let timer1, timer2;

      toast.style.display = "block";
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });
}


function correctAlert(){
      const button = document.querySelector("button"),
      toast = document.querySelector(".toast")
      closeIcon = document.querySelector(".close"),
      progress = document.querySelector(".progress");
      document.getElementById("firstMessage").value = "Success"
      document.getElementById("secondMessage").value = "Your changes has been saved"
      document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
            document.getElementById("iconToast").className = "fas fa-solid fa-check check";

      let timer1, timer2;

      toast.style.display = "block";
        toast.classList.add("active");
        progress.classList.add("active");

        timer1 = setTimeout(() => {
            toast.classList.remove("active");
        }, 5000); //1s = 1000 milliseconds

        timer2 = setTimeout(() => {
          progress.classList.remove("active");
        }, 5300);
      
      closeIcon.addEventListener("click", () => {
        toast.classList.remove("active");
        
        setTimeout(() => {
          progress.classList.remove("active");
        }, 300);

        clearTimeout(timer1);
        clearTimeout(timer2);
      });
}

//Eto yung preloader kunwari nagloload lang yung html lalabas yan pero pag tapos na mawawala na GIF yan



//Communication Section
//Eto ginawa ko lang kanina pag regular load yung sinelect lalabas yung isang div na naka hide
function load(){



    var expirationDate = document.getElementById("expirationDate");
    var promo = document.getElementById('limitedText');
    var messa = document.getElementById('loadPromo');
    if(messa.options[messa.selectedIndex].value == "Limited Number of Text"){
        document.getElementsByName('limited')[0].placeholder = "Enter number of Messages";
        expirationDate.value = "";
    } else if(messa.options[messa.selectedIndex].value == "Regular Load"){
      expirationDate.value = yyyy+1 + '-' + mm + '-' + dd;
      document.getElementsByName('limited')[0].placeholder = "Enter your Regular Load";
  }else{
      expirationDate.value = "";
      }
}


//Disable past dates from date picker
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

//Get date today
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

var today = mm + '/' + dd + '/' + yyyy;
//Get time today
var timeToday = new Date().toLocaleTimeString();




//Eto naman yung pag save ng mobile number na ininput sa Firebase
function saveMessageData(){

    //Get Date today

    var signalStrength = document.getElementById("signalStrength").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var loadPromo = document.getElementById("loadPromo").value;
    var expirationDate = document.getElementById("expirationDate").value.split("-");
    expirationDate = expirationDate[1].concat("/", expirationDate[2], "/", expirationDate[0], " ", new Date().toLocaleTimeString());
    var numberMessage = document.getElementById("numberMessage").value;
    
    var modeOfCommunication = document.querySelector('input[name="communicate"]:checked').value;

    
    if(mobileNumber == "" && loadPromo == "None" && expirationDate == "" && modeOfCommunication == ""){
        return;
    }
    if(!validatePhoneNumber(mobileNumber)){
        return;
    }
    if(loadPromo == "Limited Number of Text"){
        if(numberMessage == ""){
            return;
        }else{

        }
    }

    if(loadPromo == "Regular Load"){
      if(numberMessage == ""){
          return;
      }else{
        
      }
  }
    var databaseRef = database.ref();

    var userData = {
        mobileNumber: mobileNumber,
        loadPromo: loadPromo,
        expirationDate: expirationDate,
        numberOfMessages: numberMessage,
        communicationType: modeOfCommunication
    }

    databaseRef.child("oasis/" + getCodeWater).update(userData);


    const button = document.querySelector("button"),
    toast = document.querySelector(".toast")
    closeIcon = document.querySelector(".close"),
    progress = document.querySelector(".progress");
    document.getElementById("firstMessage").value = "Success"
    document.getElementById("secondMessage").value = "Your changes has been saved"
    document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
          document.getElementById("iconToast").className = "fas fa-solid fa-check check";

    let timer1, timer2;

    toast.style.display = "block";
      toast.classList.add("active");
      progress.classList.add("active");

      timer1 = setTimeout(() => {
        document.getElementById("mobileNumber").value = "";
        document.getElementById("loadPromo").value = "";
        document.getElementById("expirationDate").value = "";
        document.getElementById("numberMessage").value = "";
          toast.classList.remove("active");
          
      }, 5000); //1s = 1000 milliseconds

      timer2 = setTimeout(() => {
        progress.classList.remove("active");
      }, 5300);
    
    closeIcon.addEventListener("click", () => {
      toast.classList.remove("active");
      
      setTimeout(() => {
        progress.classList.remove("active");
      }, 300);

      clearTimeout(timer1);
      clearTimeout(timer2);
    });

    

    
}

//Moisture Guide
var popupViews = document.querySelectorAll(".popup-view");
var popupBtns = document.querySelectorAll(".popup-btn");
var closeBtns = document.querySelectorAll(".close-btn");
var close2 = document.querySelectorAll(".add-cart-btn");

      //javascript for quick view button
      var popup1 = function (popupClick) {
        popupViews[popupClick].classList.add("active");
      };

      popupBtns.forEach((popupBtn, i) => {
        popupBtn.addEventListener("click", () => {
          popup1(i);
        });
      });

      //javascript for close button
      closeBtns.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          popupViews.forEach((popupView) => {
            popupView.classList.remove("active");
          });
        });
      });

      close2.forEach((closeBtn) => {
        closeBtn.addEventListener("click", () => {
          popupViews.forEach((popupView) => {
            popupView.classList.remove("active");
          });
        });
      });


//Logout
function logout(){
    firebase.auth().signOut().then(function() {
        const button = document.querySelector("button"),
        toast = document.querySelector(".toast")
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");
        document.getElementById("firstMessage").innerHTML = "Logging Out";
        document.getElementById("secondMessage").innerHTML = "Come back again!";
        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
        document.getElementById("iconToast").className = "fa-solid fa-water check";
        
        let timer1, timer2;
  
        toast.style.display = "block";
          toast.classList.add("active");
          progress.classList.add("active");
  
          timer1 = setTimeout(() => {
              toast.classList.remove("active");
              window.location = '/html/iconLoader.html'; 
          }, 5000); //1s = 1000 milliseconds
  
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        
        closeIcon.addEventListener("click", () => {
          toast.classList.remove("active");
          
          setTimeout(() => {
            progress.classList.remove("active");
          }, 300);
  
          clearTimeout(timer1);
          clearTimeout(timer2);
        });

        
      }, function(error) {
        console.error('Sign Out Error', error);
      });
}

//Notif
var box = document.getElementById("box");
var down = false;

function toggleNotifi() {
  if (down) {
    box.style.height = "0px";
    box.style.display = "none";
    box.style.animation = "fade-in .5s forwards";
    down = false;
    

   

  } else {
    box.style.height = "510px";
    box.style.display = "block";
    var databaseRef = database.ref();
    var userData = {
        counter: 0
    }
    databaseRef.child("oasis/" + getCodeWater).update(userData);
    down = true;
  }
}



//Set Name in the Dashboard
function pickCard(){
    var plantProfilePicture = document.getElementById("plantProfilePicture");
    var plantProfileName = document.getElementById("plantProfileName");
    var plantProfileDescription = document.getElementById("plantProfileDescription");

    if(event.srcElement.id == "moisture1Click"){
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        plantProfileName.innerHTML = data.plantName1;
        plantProfileDescription.innerHTML = data.sensorName1;
        plantProfilePicture.src = data.plantPictureURL1;    
        });
    }else if(event.srcElement.id == "moisture2Click"){
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        plantProfileName.innerHTML = data.plantName2;
        plantProfileDescription.innerHTML = data.sensorName2;
        plantProfilePicture.src = data.plantPictureURL2;    
        });
    }else if(event.srcElement.id == "waterClick"){
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        plantProfileName.innerHTML = "Water Level";
        plantProfileDescription.innerHTML = data.sensorName1;
        plantProfilePicture.src = data.plantPictureURL1;    
        });
    }else if(event.srcElement.id == "signalClick"){
        var username_ref = database.ref("oasis/" + getCodeWater);
        username_ref.on("value", function(snapshot){
        var data = snapshot.val();
        plantProfileName.innerHTML = "Signal Strength";
        plantProfileDescription.innerHTML = data.sensorName1;
        plantProfilePicture.src = data.plantPictureURL1;    
        });
    }
}



//Settings Section
function inputSettings(){
    var usernameSettings = document.getElementById("usernameSettings").value;
    var passwordCurrent = document.getElementById("passwordCurrent").value;

    var changePassCurrent = document.getElementById("changePassCurrent").value;
    var changePass = document.getElementById("changePass").value;
    var changePassConfirm = document.getElementById("changePassConfirm").value;
    


    if(usernameSettings != "" || passwordCurrent != ""){
        document.getElementById("changePass").disabled = true;
        document.getElementById("changePassConfirm").disabled = true;
        document.getElementById("changePassCurrent").disabled = true;

    }else{
        document.getElementById("changePassCurrent").disabled = false;
        document.getElementById("changePass").disabled = false;
        document.getElementById("changePassConfirm").disabled = false;
    }

    if(changePass != "" || changePassConfirm != "" || changePassCurrent != ""){
        document.getElementById("usernameSettings").disabled = true;
        document.getElementById("passwordCurrent").disabled = true;

    }else{
        document.getElementById("usernameSettings").disabled = false;
        document.getElementById("passwordCurrent").disabled = false;

    }

}

//Uploading Profile Picture
function uploadProfilePic(){
    var usernameSettings = document.getElementById("usernameSettings").value;
    var passwordCurrent = document.getElementById("passwordCurrent").value;

    var changePassCurrent = document.getElementById("changePassCurrent").value;
    var changePass = document.getElementById("changePass").value;
    var changePassConfirm = document.getElementById("changePassConfirm").value;


    end();

    if(localStorage.getItem("countProfile") == "1"){

        //Update Picture Only
        if(usernameSettings == "" && passwordCurrent == "" && changePassCurrent == "" && changePass == "" && changePassConfirm == ""){
            var ref = firebase.storage().ref("oasis/" + getCodeWater)
                    var file = document.querySelector("#pictureOverlay").files[0]
                    var name = "profilePic"
                    var metadata = {
                        contentType:file.type
                    }
                    var task = ref.child(name).put(file,metadata)
        
                    task
                    .then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        const image = document.querySelector("#profilePicID")
                        image.src = url
                        var userData = {
                            profilePicture: url
                        }
        
                        database.ref("oasis/" + getCodeWater).update(userData);
                        

                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Success"
                        document.getElementById("secondMessage").innerHTML = "Picture has been Updated"
                        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });



                        
                        localStorage.setItem("countProfile", "0");
                    });
            return;
        }

        //Update Username with Picture
        if(document.getElementById("changePass").disabled == true){
            if(usernameSettings == "" || usernameSettings.length < 7 || validatePassword(passwordCurrent) == false){
               
                return;
            }
    
            if(usernameSettings != "" && usernameSettings.length > 7 && validatePassword(passwordCurrent)){
                firebase.auth()
                .signInWithEmailAndPassword(localStorage.getItem("myName"), passwordCurrent)
                .then(function(user) {
                   
                    
                    var user = auth.currentUser;
    
                    var databaseRef = database.ref();
        
                    var userData = {
                        username: usernameSettings
                    }
        
                    databaseRef.child("oasis/" + getCodeWater).update(userData);
        
                    document.getElementById("usernameSettings").value = '';
                    document.getElementById("passwordCurrent").value = '';

        
                    var ref = firebase.storage().ref("oasis/" + getCodeWater)
                    var file = document.querySelector("#pictureOverlay").files[0]
                    var name = "profilePic"
                    var metadata = {
                        contentType:file.type
                    }
                    var task = ref.child(name).put(file,metadata)
        
                    task
                    .then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        const image = document.querySelector("#profilePicID")
                        image.src = url
                        var userData = {
                            profilePicture: url
                        }
        
                        database.ref("oasis/" + getCodeWater).update(userData);
                        

                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Success"
                        document.getElementById("secondMessage").innerHTML = "Username and Picture Updated"
                        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });

                        
                        localStorage.setItem("countProfile", "0");
                    });
                    
                    
                }).catch(function(err){
                    const button = document.querySelector("button"),
                    toast = document.querySelector(".toast")
                    closeIcon = document.querySelector(".close"),
                    progress = document.querySelector(".progress");
                    document.getElementById("firstMessage").innerHTML = "Error"
                    document.getElementById("secondMessage").innerHTML = "Wrong Password"
                    document.getElementById("iconToast").style.backgroundColor = "red"; 
                    document.getElementById("iconToast").className = "fa-solid fa-xmark check";
              
                    let timer1, timer2;
              
                    toast.style.display = "block";
                      toast.classList.add("active");
                      progress.classList.add("active");
              
                      timer1 = setTimeout(() => {
                          toast.classList.remove("active");
                      }, 5000); //1s = 1000 milliseconds
              
                      timer2 = setTimeout(() => {
                        progress.classList.remove("active");
                      }, 5300);
                    
                    closeIcon.addEventListener("click", () => {
                      toast.classList.remove("active");
                      
                      setTimeout(() => {
                        progress.classList.remove("active");
                      }, 300);
              
                      clearTimeout(timer1);
                      clearTimeout(timer2);
                    });
                });
            }else{
                return;
            }

        
            //Update Picture with Password
        }else if(changePass != "" && changePassConfirm != "" && changePassCurrent != ""){
            if(validatePassword(changePass) && validatePassword(changePassConfirm) && validatePassword(changePassCurrent)){
                if(changePass == changePassConfirm){
                    firebase.auth()
                    .signInWithEmailAndPassword(localStorage.getItem("myName"), changePass)
                    .then(function(user) {

                    firebase.auth().currentUser.updatePassword(changePassConfirm).then(function(){

                    var ref = firebase.storage().ref("oasis/" + getCodeWater)
                    var file = document.querySelector("#pictureOverlay").files[0]
                    var name = "profilePic"
                    var metadata = {
                        contentType:file.type
                    }
                    var task = ref.child(name).put(file,metadata)
        
                    task
                    .then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {
                        const image = document.querySelector("#profilePicID")
                        image.src = url
                        var userData = {
                            profilePicture: url
                        }
        
                        database.ref("oasis/" + getCodeWater).update(userData);
                        

                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Success"
                        document.getElementById("secondMessage").innerHTML = "Picture and Password Updated"
                        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });



                        localStorage.setItem("countProfile", "0");

                        document.getElementById("changePassCurrent").value = '';
                        document.getElementById("changePass").value = '';
                        document.getElementById("changePassConfirm").value = '';
                    });

                    }).catch(function(err){
                    //Do something
                    });

                    }).catch(function(err){
                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Error"
                        document.getElementById("secondMessage").innerHTML = "Wrong Password"
                        document.getElementById("iconToast").style.backgroundColor = "red"; 
                        document.getElementById("iconToast").className = "fa-solid fa-xmark check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });
                    });
                }else{
                    localStorage.setItem("countProfile", "0");
                    return;
                    
                }
            }else{
                localStorage.setItem("countProfile", "0");
                return;
            }
            localStorage.setItem("countProfile", "0");
        }
        else{
            localStorage.setItem("countProfile", "0");
            return;
        }
       
    }else{
        //Update Username without Picture
        if(document.getElementById("changePass").disabled == true){
            if(usernameSettings == "" || usernameSettings.length < 7 || validatePassword(passwordCurrent) == false){
                return;
            }
    
            if(usernameSettings != "" && usernameSettings.length > 7 && validatePassword(passwordCurrent)){
                firebase.auth()
                .signInWithEmailAndPassword(localStorage.getItem("myName"), passwordCurrent)
                .then(function(user) {
                    
                    var user = auth.currentUser;
    
                    var databaseRef = database.ref();
        
                    var userData = {
                        username: usernameSettings
                    }
        
                    databaseRef.child("oasis/" + getCodeWater).update(userData);
        
                    document.getElementById("usernameSettings").value = '';
                    document.getElementById("passwordCurrent").value = '';


                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Success"
                        document.getElementById("secondMessage").innerHTML = "Username has been Updated"
                        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });

                    localStorage.setItem("countProfile", "0");

        
                    
                    
                    
                }).catch(function(err){
                    const button = document.querySelector("button"),
                    toast = document.querySelector(".toast")
                    closeIcon = document.querySelector(".close"),
                    progress = document.querySelector(".progress");
                    document.getElementById("firstMessage").innerHTML = "Error"
                    document.getElementById("secondMessage").innerHTML = "Wrong Password"
                    document.getElementById("iconToast").style.backgroundColor = "red"; 
                    document.getElementById("iconToast").className = "fa-solid fa-xmark check";
              
                    let timer1, timer2;
              
                    toast.style.display = "block";
                      toast.classList.add("active");
                      progress.classList.add("active");
              
                      timer1 = setTimeout(() => {
                          toast.classList.remove("active");
                      }, 5000); //1s = 1000 milliseconds
              
                      timer2 = setTimeout(() => {
                        progress.classList.remove("active");
                      }, 5300);
                    
                    closeIcon.addEventListener("click", () => {
                      toast.classList.remove("active");
                      
                      setTimeout(() => {
                        progress.classList.remove("active");
                      }, 300);
              
                      clearTimeout(timer1);
                      clearTimeout(timer2);
                    });
                });
            }else{
                return;
            }

        
            //Update Password without Picture
        }else if(changePass != "" && changePassConfirm != "" && changePassCurrent != ""){
            if(validatePassword(changePass) && validatePassword(changePassConfirm) && validatePassword(changePassCurrent)){
                if(changePass == changePassConfirm){
                    firebase.auth()
                    .signInWithEmailAndPassword(localStorage.getItem("myName"), changePassCurrent)
                    .then(function(user) {
                    firebase.auth().currentUser.updatePassword(changePassConfirm).then(function(){

                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Success"
                        document.getElementById("secondMessage").innerHTML = "Username has been Updated"
                        document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
                        document.getElementById("iconToast").className = "fas fa-solid fa-check check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });


                        
                    document.getElementById("changePassCurrent").value = '';
                    document.getElementById("changePass").value = '';
                    document.getElementById("changePassConfirm").value = '';
                        

                    }).catch(function(err){
                    //Do something
                    });

                    }).catch(function(err){
                        const button = document.querySelector("button"),
                        toast = document.querySelector(".toast")
                        closeIcon = document.querySelector(".close"),
                        progress = document.querySelector(".progress");
                        document.getElementById("firstMessage").innerHTML = "Error"
                        document.getElementById("secondMessage").innerHTML = "Wrong Password"
                        document.getElementById("iconToast").style.backgroundColor = "red"; 
                        document.getElementById("iconToast").className = "fa-solid fa-xmark check";
                  
                        let timer1, timer2;
                  
                        toast.style.display = "block";
                          toast.classList.add("active");
                          progress.classList.add("active");
                  
                          timer1 = setTimeout(() => {
                              toast.classList.remove("active");
                          }, 5000); //1s = 1000 milliseconds
                  
                          timer2 = setTimeout(() => {
                            progress.classList.remove("active");
                          }, 5300);
                        
                        closeIcon.addEventListener("click", () => {
                          toast.classList.remove("active");
                          
                          setTimeout(() => {
                            progress.classList.remove("active");
                          }, 300);
                  
                          clearTimeout(timer1);
                          clearTimeout(timer2);
                        });
                    });
                }else{
                    localStorage.setItem("countProfile", "0");
                    return;
                    
                }
            }else{
                localStorage.setItem("countProfile", "0");
                return;
            }
            localStorage.setItem("countProfile", "0");
        }
        else{
            localStorage.setItem("countProfile", "0");
            return;
        }
           
    }
}


//Forgot Password

function forgotPass1(){
  
      var email = document.getElementById("validationUsername").value;
      if(email == ""){
        const button = document.querySelector("button"),
        toast = document.querySelector(".toast")
        closeIcon = document.querySelector(".close"),
        progress = document.querySelector(".progress");
        document.getElementById("firstMessage").innerHTML = "Error"
        document.getElementById("secondMessage").innerHTML = "Please enter your email"
        document.getElementById("iconToast").style.backgroundColor = "red"; 
        document.getElementById("iconToast").className = "fa-solid fa-xmark check";
  
        let timer1, timer2;
  
        toast.style.display = "block";
          toast.classList.add("active");
          progress.classList.add("active");
  
          timer1 = setTimeout(() => {
              toast.classList.remove("active");
          }, 5000); //1s = 1000 milliseconds
  
          timer2 = setTimeout(() => {
            progress.classList.remove("active");
          }, 5300);
        
        closeIcon.addEventListener("click", () => {
          toast.classList.remove("active");
          
          setTimeout(() => {
            progress.classList.remove("active");
          }, 300);
  
          clearTimeout(timer1);
          clearTimeout(timer2);
        });
        return;
      }
      var auth = firebase.auth();
  

      
      
      auth.sendPasswordResetEmail(email)
      .then(function() {  
       const button = document.querySelector("button"),
          toast = document.querySelector(".toast")
          closeIcon = document.querySelector(".close"),
          progress = document.querySelector(".progress");
          document.getElementById("firstMessage").innerHTML = "Success"
          document.getElementById("secondMessage").innerHTML = "Check your Email"
          document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
          document.getElementById("iconToast").className = "fas fa-solid fa-check check";
    
          let timer1, timer2;
    
          toast.style.display = "block";
            toast.classList.add("active");
            progress.classList.add("active");
    
            timer1 = setTimeout(() => {
                toast.classList.remove("active");
            }, 5000); //1s = 1000 milliseconds
    
            timer2 = setTimeout(() => {
              progress.classList.remove("active");
            }, 5300);
          
          closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");
            
            setTimeout(() => {
              progress.classList.remove("active");
            }, 300);
    
            clearTimeout(timer1);
            clearTimeout(timer2);
          });
      })
      .catch(function(error) {
      // An error happened.
      });

  
}

function forgotPass(){
  var firebaseRef = database.ref("oasis/" + getCodeWater);
    firebaseRef.on("value", function(snapshot){
    var data = snapshot.val();

        var emailAddress = data.email;
        var auth = firebase.auth();
    
        
        
        auth.sendPasswordResetEmail(emailAddress)
        .then(function() {  
          const button = document.querySelector("button"),
          toast = document.querySelector(".toast")
          closeIcon = document.querySelector(".close"),
          progress = document.querySelector(".progress");
          document.getElementById("firstMessage").innerHTML = "Success"
          document.getElementById("secondMessage").innerHTML = "Check your Email"
          document.getElementById("iconToast").style.backgroundColor = "#4070f4"; 
          document.getElementById("iconToast").className = "fas fa-solid fa-check check";
    
          let timer1, timer2;
    
          toast.style.display = "block";
            toast.classList.add("active");
            progress.classList.add("active");
    
            timer1 = setTimeout(() => {
                toast.classList.remove("active");
            }, 5000); //1s = 1000 milliseconds
    
            timer2 = setTimeout(() => {
              progress.classList.remove("active");
            }, 5300);
          
          closeIcon.addEventListener("click", () => {
            toast.classList.remove("active");
            
            setTimeout(() => {
              progress.classList.remove("active");
            }, 300);
    
            clearTimeout(timer1);
            clearTimeout(timer2);
          });
        })
        .catch(function(error) {
        // An error happened.
        });

    });
    
}

function searchNow() {
  const searchBox = document.getElementById("searchItem").value.toUpperCase();
  const storeItems = document.getElementById('productList')
  const product = document.querySelectorAll('.productSearch')
  const pname = storeItems.getElementsByTagName('h2')
  var match;


  for(var i = 0; i < pname.length; i++){
     match = product[i].getElementsByTagName('h2')[0];
     
    if(match){
      let textValue = match.textContent || match.innerHTML;
      if(textValue.toUpperCase().indexOf(searchBox) > -1){
        product[i].style.display = "";
        
      }else{
        product[i].style.display = "none";
      }
    } 
  }
}


// window.onclick = e => {
//   if(e.target.classList.contains("productSearch") || e.target.classList.contains("pDetails")){
//     console.log(e.target.getAttribute('src'));
//     document.getElementById("subok").innerText = e.target.innerText;
//   }else{

//   }
  
// } 

document.addEventListener('click', function(e) {
  e = e || window.event;
  if(e.target.classList.contains("productSearch") || e.target.classList.contains("pDetails") ){
    var target = e.target || e.srcElement,
      text = target.textContent || target.innerText || target.src; 
      console.log(text)  
  }else{

  }
  
}, false);
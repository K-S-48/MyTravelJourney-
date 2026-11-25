 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
    import { getFirestore, collection, doc, Timestamp, addDoc, deleteDoc, onSnapshot, query, orderBy } 
    from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";      
  
    // Your web app's Firebase configuration
    const firebaseConfig = {

    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    //Firestoreを使う
    const db = getFirestore(app);
    const ref = collection(db, "chat");


$("#addbutton").on("click", function(){
    const country =$("#country").val();
    // localStorage.setItem("country", country);
    // console.log(localStorage.getItem("country"));

    const memo =$("#memo").val();
    // localStorage.setItem("memo", memo);
    // console.log(localStorage.getItem("memo"));

    const date =$("#date").val();
    // localStorage.setItem("date", date);
    // console.log(localStorage.getItem("date"));

    if(country !=="" && memo !=="" && date !==""){
     const log = { country: country, memo: memo, date: date };
     // console.log(log);

     const jsonString = localStorage.getItem("logs");
     const logs = JSON.parse(jsonString) || [];
     console.log(logs);

     logs.push(log);

     localStorage.setItem("logs", JSON.stringify(logs));
     $("#history").append(
        '<div class="item">'+
        '<div class="item-head">'+ 
        '<span class="item-country">' + 
        country + '</span>' + 
        '<span class="item-date">'+ 
        date +
        '</span>' + 
        '</div>'+
        '<p class="item-memo">'
        + memo 
        + '</p>'
        + '</div>'
    );

    $("#country").val("");
    $("#memo").val("");
    $("#date").val("");


    }else{
        alert("国、訪れた日、メモのすべて記入してください。");
    }
});
    const jsonString = localStorage.getItem("logs");
    const logs = JSON.parse(jsonString) || [];

for(let i = 0; i<logs.length; i++){
    
   console.log(logs[i].country);
    $("#history").append(
      '<div class="item">' +
        '<div class="item-head">' +
        '<span class="item-country">' +
        logs[i].country +
        '</span>' +
        '<span class="item-date">' +
        logs[i].date +
        '</span>' +
        '</div>' +
        '<p class="item-memo">'
        +logs[i].memo + "</p>" + "</div>"
    );

}

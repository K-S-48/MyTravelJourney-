 import { initializeApp } from "https://www.gstatic.com/firebasejs/13.4.0/firebase-app.js";
    import { getFirestore, collection, doc, Timestamp, addDoc, deleteDoc, onSnapshot, query, orderBy } 
    from "https://www.gstatic.com/firebasejs/13.4.0/firebase-firestore.js";      
  
    // Your web app's Firebase configuration
    const firebaseConfig = {

    apiKey: 
  };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    //Firestoreを使う
    const db = getFirestore(app);
    // const ref = collection(db, "chat");
    const historyref = collection(db, "logs")


$("#addbutton").on("click", async function(){
    const country =$("#country").val();
    // awaitはasyncがついた関数の中でしか使えないため

    const memo =$("#memo").val();

    const date =$("#date").val();

    if(country !=="" && memo !=="" && date !==""){
     const log = { country: country, memo: memo, date: date };
     
    await addDoc(historyref, log);/*Jsは待たずに次に進む性質がある。addDocは読み込みに時間がかかるため、処理が終わるまで待つためにawaitを使用。 */

    //  const jsonString = localStorage.getItem("logs");
    //  const logs = JSON.parse(jsonString) || [];
    //  console.log(logs);
    //  logs.push(log); Firestoreは1件ずつ保存→配列いらない

    //  localStorage.setItem("logs", JSON.stringify(logs));
    //  $("#history").append(
    //     '<div class="item">'+
    //     '<div class="item-head">'+ 
    //     '<span class="item-country">' + 
    //     country + '</span>' + 
    //     '<span class="item-date">'+ 
    //     date +
    //     '</span>' + 
    //     '</div>'+
    //     '<p class="item-memo">'
    //     + memo 
    //     + '</p>'
    //     + '</div>'
    // );

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

import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings ={
  databaseURL: "https://we-are-the-champions-730f6-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "list")

const btn = document.getElementById("btn")
const endorsements = document.getElementById("endorsements")
const reviews= document.getElementById("reviews")

btn.addEventListener("click",()=>{
    if(endorsements.value){
    push(endorsementsInDB, endorsements.value)
    reviews.innerHTML += `<section class = "comments"><p>${endorsements.value}</p></section>`
    endorsements.value=''
}


})

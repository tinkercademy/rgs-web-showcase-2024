import {
  getDatabase, ref, set, onValue, child 
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

// Initialize Realtime Database and get a reference to the service
const db = getDatabase();

function writeCounter(counterID, counterValue) {
  set(ref(db, "counters/" + counterID), {
    v: counterValue,
  });
}

const countersRef = ref(db, 'counters/');
onValue(countersRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
  const keys = Object.keys(data);

  for(let i=0; i<keys.length; i++){
    let counterID = "counter" + (i+1);
    let key = keys[i]
    let counterValue = data[key].v;
    document.getElementById(counterID).innerHTML = counterValue;

    localStorage.setItem(counterID, counterValue);
  }
});

function updateCounter(id){
  let counterID = "counter" + id;

  let counterValue = parseInt(localStorage.getItem(counterID)) + 1;

  writeCounter(counterID, counterValue)
}

window.updateCounter = updateCounter
window.writeCounter = writeCounter
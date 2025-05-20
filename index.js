//You are building a reminder feature for a task management app.
//  Write an async function that sends a reminder (simulated with console.log) after a delay using setTimeout. 
// The function should return a Promise that resolves after 3 seconds with the message "Reminder sent to user!",
//  and you should await it to log the message.



async function  sendReminder () {
    return new Promise ((resolve)=>{
    setTimeout(()=>{
        console.log("Reminder: You have two tasks due today!")
        resolve("Reminder sent to user!")
    },3000);
    });
    
};

(async () => {
  const message = await sendReminder();
  console.log(message);
})();


//In a startup's DevOps dashboard,
//  implement a setInterval function that checks server status every 5 seconds by calling an async function checkServer()
//  that returns a Promise resolving to "Server is running" or rejecting with "Server down". Use .then() and 
// .catch() to handle the result and stop the interval after 30 seconds using clearInterval.

async function checkServer(){
    return new Promise((resolve,reject)=>{
         Math.random ()>0.2? resolve("Server is running"): reject("Server  down ")

    });
};

let interval = setInterval(()=>{
    checkServer()
    .then(status=> console.log(status))
    .catch(error=>console.log(error))
},5000);

setTimeout(() => {
    clearInterval(interval)
}, 30000);



//You're building a system to show multiple notifications to a user. 
// Create an async function showNotifications that takes an array of messages and shows each message
//  1 second apart using await and setTimeout wrapped in a Promise. 
// After all messages are shown, log "All notifications sent".
async function showNotifications (messages){
   for (message in messages){
    await new Promise((resolve) => setTimeout(resolve,1000));
    console.log("Notification:",messages[message])
   }
   console.log("All notifications sent")
};

showNotifications(["Three new voiceamails", "rent is due soon","coffee date with the girls"]);



//In your startup’s API integration, write an async function fetchDataWithRetry() that tries to fetch data from a mock API (use Promise.reject() for failure), 
// retries up to 3 times with a 2-second delay between attempts using setTimeout, and resolves with "Data fetched" or logs "Failed after 3 attempts" if all fail.




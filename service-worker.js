let item=""
ask=false;
if(item == ""){
    document.getElementById("a").innerHTML=0
}
function check(id){
    if(ask == true){
        item=""
        document.getElementById("a").innerHTML=item
        ask=false;
    }
    let b=document.getElementById(id).innerHTML
    item+=b
    document.getElementById("a").innerHTML=item
}

function equal(){
    document.getElementById("a").innerHTML=eval(item)
    ask=true;
}

function cut(){
    item=item.slice(0, item.length-1)
    document.getElementById("a").innerHTML=item
}

function clean(){
    item=""
    document.getElementById("a").innerHTML=item
}
window.addEventListener("beforeinstallprompt", (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = "block";

  addBtn.addEventListener("click", (e) => {
    // hide our user interface that shows our A2HS button
    addBtn.style.display = "none";
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt = null;
    });
  });
});

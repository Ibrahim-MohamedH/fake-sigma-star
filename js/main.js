function darkMode() {
  document.getElementById("main").style.backgroundColor = "rgb(28, 28, 28)";
  document.getElementById("our-services").style.backgroundColor = "rgb(15, 15, 15)";
  for (let i = 1; i < 18; i++){
    let bids = "bdl" + i
    document.getElementById(bids).style.backgroundColor = "rgb(28, 28, 28)";
  }
  var special = ["cdl46", "cdl47", "cdl48", "cdl49", "cdl50"];
  for (let i = 0; i < special.length; i++){
    document.getElementById(special[i]).style.backgroundColor = "rgb(28, 28, 28)";
  }
  var special2 = ["bdl15", "bdl16", "bdl17"]
  for (let i = 0; i < special2.length; i++){
    document.getElementById(special2[i]).style.color = "white";
  }
  for (let i = 1; i < 8; i++){
    let b2ids ="b2dl" + i
    document.getElementById(b2ids).style.backgroundColor = "rgb(15, 15, 15)";
  }
  for (let i = 1; i < 53; i++) {
    let cid = "cdl" + i
    document.getElementById(cid).style.color = "white";
  }
  document.getElementById("darkMode").style.display = "none";
  document.getElementById("lightMode").style.display = "inline-block";
}

function lightMode() {
  document.getElementById("main").style.backgroundColor = "";
  document.getElementById("our-services").style.backgroundColor = "";
  for (let i = 1; i < 18; i++){
    let bids = "bdl" + i
    document.getElementById(bids).style.backgroundColor = "";
  }
  var special = ["cdl46", "cdl47", "cdl48", "cdl49", "cdl50"];
  for (let i = 0; i < special.length; i++){
    document.getElementById(special[i]).style.backgroundColor = "";
  }
  var special2 = ["bdl15", "bdl16", "bdl17"]
  for (let i = 0; i < special2.length; i++){
    document.getElementById(special2[i]).style.color = "";
  }
  for (let i = 1; i < 8; i++){
    let b2ids ="b2dl" + i
    document.getElementById(b2ids).style.backgroundColor = "";
  }
  for (let i = 1; i < 53; i++) {
    let cid = "cdl" + i
    document.getElementById(cid).style.color = "";
  }
  document.getElementById("darkMode").style.display = "inline-block";
  document.getElementById("lightMode").style.display = "none";
}
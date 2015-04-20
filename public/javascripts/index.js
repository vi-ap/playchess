//function allowDrop(ev) {
//    ev.preventDefault();
//}

//function drag(ev) {
//    ev.dataTransfer.setData("text", ev.target.id);
//}

//function drop(ev) {
//    ev.preventDefault();
//    ev.target.appendChild(document.getElementById(ev.dataTransfer.getData("text")));
    
//    if (document.getElementById("SoundOption").checked)
//    {
//        var snd = new Audio("/audio/horse.mp3"); // buffers automatically when created
//        snd.play();
//    }
//}

$('.chess-piece').draggable();

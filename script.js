alert("My Portfolio Calendar")
document.getElementById("playButton").addEventListener("click", function() {
    var styledText = '<p style="color: white; background-color: #180d0c; font-size: 8px;">Happy Birthday</p>';
    playButton.innerHTML =styledText;
    var video = document.getElementById("myVideo");
    video.play();
    var audio = document.getElementById("music");
    audio.play();
    
    // Set a timeout to stop the song after 3 seconds
    setTimeout(function() {
        audio.pause();
    }, 400000); // 3000 milliseconds = 3 seconds
});
document.getElementById("armdbtn").addEventListener("click", function() {
    var styledText = '<p style="color: white; background-color: #180d0c; font-size: 8px;">Armed Forces Day</p>';
    armdbtn.innerHTML =styledText;
    var audio = document.getElementById("musical");
    audio.play();
    
    // Set a timeout to stop the song after 3 seconds
    setTimeout(function() {
        audio.pause();
    }, 400000); // 3000 milliseconds = 3 seconds
});
document.getElementById("playBtn").addEventListener("click", function() {
    let styledtexx = '<p style="color: white; background-color: #180d0c; font-size: 8px;">A King is Born</p>';
    playBtn.innerHTML =styledtexx;
    var audio = document.getElementById("musica");
    audio.play();
    
    // Set a timeout to stop the song after 3 seconds
    setTimeout(function() {
        audio.pause();
    }, 40000); // 3000 milliseconds = 3 seconds
});
document.getElementById("playbt").addEventListener("click", function() {
    let styledtex = '<p style="color: white; background-color: #180d0c; font-size: 8px;">Happy Boxing Day</p>';
    playbt.innerHTML =styledtex;
    var audio = document.getElementById("musics");
    audio.play();
    
    // Set a timeout to stop the song after 3 seconds
    setTimeout(function() {
        audio.pause();
    }, 400000); // 3000 milliseconds = 3 seconds
});
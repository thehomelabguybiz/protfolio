document.getElementById('testButton').addEventListener('click', function() {
    const status = document.getElementById('statusMessage');
    const now = new Date().toLocaleTimeString();
    
    status.innerText = "✅ JS Loaded successfully! Last click: " + now;
    
    console.log("Button clicked at " + now);
    
    // Fun SRE effect: toggle a border color
    document.querySelector('.container').style.borderColor = '#9dce6b';
});

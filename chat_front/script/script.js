function alerta(){
    let texto = document.getElementById("usermsg").value;

    var div = document.createElement("div");
    div.className = "chat";
    div.innerHTML = `<p >voce disse:<\p>
    <p>${texto}<\p>`;
    const chatbox = document.querySelector("#chatbox");
    chatbox.appendChild(div);
    
    document.getElementById("usermsg").value = "";
}


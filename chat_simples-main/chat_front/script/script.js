function alerta(){
    let texto = document.getElementById("usermsg").value;

    var div = document.createElement("div");
    div.className = "chat";
    div.innerHTML = `
    <div class="balao">
    <p >voce disse:<\p>
    <p>${texto}<\p>
    <\div>`;
    const chatbox = document.querySelector("#chatbox");
    chatbox.appendChild(div);
    
    document.getElementById("usermsg").value = "";
}


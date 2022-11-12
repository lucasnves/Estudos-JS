let inputs = document.getElementsByClassName("input-form");
    for(let input of inputs) {
        input.addEventListener("blur", function(){
            if(input.value.trim() != ""){
                input.classList.add("has-val");
            } else {
                input.classList.remove("has-val");
            }
        });
    }

let form = document.getElementById('login-form');
form.addEventListener("submit", function(event){
    let inputs = document.getElementsByClassName('input-form');
    for(let input of inputs) {
        if(input.value.trim() == ""){
            input.parentElement.classList.add("wrap-input-invalid");
        } else {
            location.href = "copy.html"
        }
    }
event.preventDefault();
});

function copiarTexto() {
    let textoCopiado = document.getElementById("input-url");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(textoCopiado.value);
    //document.execCommand("copy");
    alert(`O texto copiado é ${textoCopiado.value}`);
}

function encurtarLink() {
    let url = document.getElementById("input-url").value;
    if(!url) {
        alert("é preciso inserir uma URL para encurtar");
        return
    }
    let headers = {
        "Content-Type": "application/json",
        "apiKey": "eeadeebc6e9e41929a3ed6b574325c0d"
    }
    let linkRequest = {
        destination: url,
        domain: { fullName: "rebrand.ly" }
    }

    fetch("https://api.rebrandly.com/v1/links", {
        method: "POST",
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            let inputUrl = document.getElementById("input-url");
            inputUrl.value = json.shortUrl;
        });
}
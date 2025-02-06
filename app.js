fetch("https://icanhazdadjoke.com", {
    headers: {
        "Accept": "application/json"
    }
})
    .then(response => response.json())
    .then(data => {
        let root = document.querySelector("#root")

        root.innerHTML = `
            <h1>${data.joke}</h1>
        `
    })

function loadVault() {
    document.getElementById("contentArea").innerHTML = `
        <h2>SECURE VAULT</h2>
        <input type="password" id="vaultInput" placeholder="Enter Master Key">
        <button onclick="checkPassword()">Unlock</button>
        <p id="vaultMessage"></p>
    `;
}

function checkPassword() {
    let input = document.getElementById("vaultInput").value;
    let correctPassword = "MAYA01506HYPERCAPNIA4F2A";

    if (input === correctPassword) {
        document.getElementById("vaultMessage").innerHTML =
            "<span style='color:lime'>ACCESS GRANTED — Chloe wins. You cracked the code!</span>";
    } else {
        document.getElementById("vaultMessage").innerHTML =
            "<span style='color:red'>ACCESS DENIED.</span>";
    }
}
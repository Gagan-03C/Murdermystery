let cluesSolved = 0;

const sections = {

    news: `
        <h2>Campus Newspaper</h2>
        <p>Code-Red Hackathon ended in tragedy at 3:15 AM.</p>
        <p>Victim: Arjun. Location: Server Room B.02</p>
    `,

    notes: `
        <h2>Detective Notes</h2>
        <p>No forced entry. Fire suppression triggered manually.</p>
        <p>Room unusually cold. Smell of ozone present.</p>
    `,

    autopsy: `
        <h2>Autopsy Report</h2>
        <p>Cause of Death: Severe Hypercapnia due to CO₂ intoxication.</p>
        <p>Rapid oxygen displacement. No physical struggle.</p>
    `,

    logs: `
        <h2>Access Logs</h2>
        <pre>
02:30:11 ARJUN_99 Entry
02:45:00 MAYA_01 Entry
02:45:05 MAYA_01 Exit
        </pre>
        <p>Maya's alibi contradicts this log.</p>
    `,

    transcripts: `
        <h2>Interrogation - Maya</h2>
        <p>"I was asleep in the nap room."</p>
        <p>Packet logs show override from nap room network.</p>
    `
};

function loadSection(section) {
    document.getElementById("contentArea").innerHTML = sections[section];
    cluesSolved++;
}

function loadVault() {
    document.getElementById("contentArea").innerHTML = `
        <h2>SECURE VAULT</h2>
        <p>Combine the elements of the crime.</p>
        <input type="password" id="vaultInput" placeholder="Enter Master Key">
        <button onclick="checkPassword()">Unlock</button>
        <p id="vaultMessage"></p>
    `;
}

function checkPassword() {

    let input = document.getElementById("vaultInput").value;
    let correctPassword = "MAYA01506HYPERCAPNIA4F2A";

    if(cluesSolved < 4){
        document.getElementById("vaultMessage").innerHTML =
            "<span style='color:orange'>ACCESS DENIED — INCOMPLETE INVESTIGATION</span>";
        return;
    }

    if(input === correctPassword){
        unlockAnimation();
    } else {
        document.getElementById("vaultMessage").innerHTML =
            "<span style='color:red'>ACCESS DENIED</span>";
    }
}

function unlockAnimation(){
    document.body.style.background = "black";
    document.getElementById("contentArea").innerHTML =
        "<h1 style='color:lime'>ACCESS GRANTED</h1>" +
        "<h2>Maya executed the remote override.</h2>" +
        "<h3>Winner: Chloe</h3>" +
        "<h2>Congratulations Detective. You cracked the code.</h2>";
}

function handleCommand(event) {

    if(event.key === "Enter") {

        let command = document.getElementById("terminalInput").value.toUpperCase();
        document.getElementById("terminalInput").value = "";

        switch(command) {

            case "HELP":
                document.getElementById("contentArea").innerHTML =
                    "<h2>Available Commands</h2> NEWS, NOTES, AUTOPSY, LOGS, INTERROGATION, OPEN_VAULT";
                break;

            case "NEWS":
                loadSection("news");
                break;

            case "NOTES":
                loadSection("notes");
                break;

            case "AUTOPSY":
                loadSection("autopsy");
                break;

            case "LOGS":
                loadSection("logs");
                break;

            case "INTERROGATION":
                loadSection("transcripts");
                break;

            case "OPEN_VAULT":
                loadVault();
                break;

            default:
                document.getElementById("contentArea").innerHTML =
                    "<h2>ERROR</h2><p>Unknown Command</p>";
        }
    }
}
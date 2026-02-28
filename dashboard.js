function loadSection(section) {
    document.getElementById("contentArea").innerHTML = sections[section];
}
function handleCommand(event) {

    if(event.key === "Enter") {

        let command = document.getElementById("terminalInput").value.toUpperCase();
        document.getElementById("terminalInput").value = "";

        switch(command) {

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

            case "HELP":
                document.getElementById("contentArea").innerHTML =
                    "<h2>Available Commands</h2> NEWS, NOTES, AUTOPSY, LOGS, INTERROGATION, OPEN_VAULT";
                break;

            default:
                document.getElementById("contentArea").innerHTML =
                    "<h2>ERROR</h2><p>Unknown Command</p>";
        }
    }
}
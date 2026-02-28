function renderEvidence(key) {
  const item = evidence[key];
  if (!item) {
    return;
  }

  document.getElementById('contentArea').innerHTML = `
    <h2>${item.title}</h2>
    ${item.body}
  `;
}

function startTimer(totalSeconds) {
  const timerNode = document.getElementById('timer');
  let remaining = totalSeconds;
  const intervalId = setInterval(() => {
    const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
    const seconds = (remaining % 60).toString().padStart(2, '0');
    timerNode.textContent = `${minutes}:${seconds}`;
    if (remaining === 0) {
      clearInterval(intervalId);
      printTerminal('Time is up. Organizer may use ADMIN_OVERRIDE if reset is required.');
      document.getElementById('terminalInput').disabled = true;
    }
    remaining -= 1;
  }, 1000);
}

function bindUI() {
  document.querySelectorAll('[data-evidence]').forEach((button) => {
    button.addEventListener('click', () => renderEvidence(button.dataset.evidence));
  });
  document.getElementById('vaultBtn').addEventListener('click', renderVault);
  const input = document.getElementById('terminalInput');
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const value = input.value;
      printTerminal(`> ${value}`);
      handleTerminalCommand(value);
      input.value = '';
    }
  });
}

bindUI();
updateProgress();
printTerminal('Session started. Type HELP to begin investigation workflow.');
startTimer(90 * 60); // remove the error
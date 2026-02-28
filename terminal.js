function printTerminal(message) {
  const output = document.getElementById('terminalOutput');
  output.innerHTML += `<div>${message}</div>`;
  output.scrollTop = output.scrollHeight;
}

function updateProgress() {
  document.getElementById('progress').textContent = `Clues Solved: ${gameState.cluesSolvedCount}/8`;
  if (allCluesSolved()) {
    document.getElementById('vaultBtn').disabled = false;
    printTerminal('All clues solved. FINAL VAULT unlocked.');
  }
}

function handleTerminalCommand(rawInput) {
  const input = rawInput.trim().toUpperCase();

  if (!input) {
    return;
  }

  if (input === 'HELP') {
    printTerminal('Commands: HELP, VIEW <ITEM>, SOLVE <KEY>, CODE <VALUE>, TIMELINE <ORDER>, STATUS, OPEN_VAULT, ADMIN_OVERRIDE');
    return;
  }

  if (input === 'STATUS') {
    printTerminal(`Progress ${gameState.cluesSolvedCount}/8 | Vault attempts ${gameState.vaultAttempts}/3`);
    return;
  }

  if (input === 'OPEN_VAULT') {
    renderVault();
    printTerminal('Opening vault interface.');
    return;
  }

  if (input === gameState.adminCode) {
    adminReset();
    printTerminal('Admin override accepted. Vault attempts reset.');
    return;
  }

  if (input.startsWith('VIEW ')) {
    const key = input.replace('VIEW ', '').toLowerCase();
    if (evidence[key]) {
      renderEvidence(key);
      printTerminal(`Loaded evidence: ${key}`);
    } else {
      printTerminal('Unknown evidence key.');
    }
    return;
  }

  if (input.startsWith('SOLVE ') || input.startsWith('CODE ') || input.startsWith('TIMELINE ')) {
    evaluateClue(input);
    return;
  }

  printTerminal('Unknown command. Type HELP.');
}

function evaluateClue(input) {
  if (!isClueSolved('clue1') && input === 'SOLVE MAYA_01_RFID') {
    solveClue('clue1');
    printTerminal('Clue 1 solved: RFID identity confirmed.');
    return updateProgress();
  }

  if (isClueSolved('clue1') && !isClueSolved('clue2') && input === 'CODE 506') {
    solveClue('clue2');
    printTerminal('Clue 2 solved: Numeric lock decoded.');
    return updateProgress();
  }

  if (isClueSolved('clue2') && !isClueSolved('clue3') && input === 'SOLVE NAPROOM_OVERRIDE') {
    solveClue('clue3');
    printTerminal('Clue 3 solved: Remote route origin proven.');
    return updateProgress();
  }

  if (isClueSolved('clue3') && !isClueSolved('clue4') && input === 'CODE 4F2A') {
    solveClue('clue4');
    printTerminal('Clue 4 solved: Valve signature matched.');
    return updateProgress();
  }

  if (isClueSolved('clue4') && !isClueSolved('clue5') && input === 'SOLVE DEVICE_CO2_VALVE') {
    solveClue('clue5');
    printTerminal('Clue 5 solved: Device used in event confirmed.');
    return updateProgress();
  }

  if (isClueSolved('clue5') && !isClueSolved('clue6') && input === 'SOLVE OZONE_KEY') {
    solveClue('clue6');
    printTerminal('Clue 6 solved: Decryption key recovered.');
    return updateProgress();
  }

  if (isClueSolved('clue6') && !isClueSolved('clue7') && input === 'TIMELINE 2-1-3-4') {
    solveClue('clue7');
    printTerminal('Clue 7 solved: Timeline sequence validated.');
    return updateProgress();
  }

  if (isClueSolved('clue7') && !isClueSolved('clue8') && input === 'CODE HYPERCAPNIA') {
    solveClue('clue8');
    printTerminal('Clue 8 solved: Cause marker accepted.');
    return updateProgress();
  }

  printTerminal('Incorrect clue input or clue is locked.');
}
function renderVault() {
  const area = document.getElementById('contentArea');

  if (!allCluesSolved()) {
    area.innerHTML = '<h2>Final Vault</h2><p>Vault is locked. Solve all 8 clues first.</p>';
    return;
  }

  area.innerHTML = `
    <h2>Final Vault</h2>
    <p>Enter master key to reveal ending screen.</p>
    <div class="vault-row">
      <input id="vaultInput" type="password" placeholder="Master key">
      <button id="toggleVault" type="button">Show</button>
      <button id="submitVault" type="button">Unlock</button>
    </div>
    <p id="vaultStatus"></p>
  `;

  document.getElementById('toggleVault').addEventListener('click', () => {
    const input = document.getElementById('vaultInput');
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    document.getElementById('toggleVault').textContent = isHidden ? 'Hide' : 'Show';
  });

  document.getElementById('submitVault').addEventListener('click', validateVault);
}
function validateVault() {
  const status = document.getElementById('vaultStatus');

  if (gameState.vaultLocked) {
    status.textContent = 'Vault locked after 3 failed attempts. Organizer reset required.';
    return;
  }

  const input = document.getElementById('vaultInput').value.trim().toUpperCase();

  if (input === gameState.masterKey) {
    showEnding();
    return;
  }

  gameState.vaultAttempts += 1;
  if (gameState.vaultAttempts >= 3) {
    gameState.vaultLocked = true;
    status.textContent = 'Vault permanently locked (3/3 attempts).';
  } else {
    status.textContent = `Incorrect key. Attempts: ${gameState.vaultAttempts}/3`;
  }
}

function showEnding() {
  document.getElementById('contentArea').innerHTML = `
    <div class="ending">
      <h2>ACCESS GRANTED</h2>
      <p>Maya executed the remote override and weaponized the suppression stack.</p>
      <h3>Case closed. Congratulations, detective team.</h3>
    </div>
  `;
}

function adminReset() {
  gameState.vaultAttempts = 0;
  gameState.vaultLocked = false;
}
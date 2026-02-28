const gameState = {
  solved: {
    clue1: false,
    clue2: false,
    clue3: false,
    clue4: false,
    clue5: false,
    clue6: false,
    clue7: false,
    clue8: false
  },
  cluesSolvedCount: 0,
  vaultAttempts: 0,
  vaultLocked: false,
  masterKey: 'MAYA01506HYPERCAPNIA4F2A',
  adminCode: 'ADMIN_OVERRIDE'
};

function solveClue(clueKey) {
  if (!gameState.solved[clueKey]) {
    gameState.solved[clueKey] = true;
    gameState.cluesSolvedCount += 1;
  }
}

function isClueSolved(clueKey) {
  return Boolean(gameState.solved[clueKey]);
}

function allCluesSolved() {
  return gameState.cluesSolvedCount === 8;
}
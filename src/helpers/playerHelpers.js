export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
}

export const addWinsToPlayers = (playerDataArray, matchData) => {
  return playerDataArray.map(player => {
    const currentWins = matchData.reduce((accumalator, match) => {
      if (match.winner === player.gamerTag) {
        return accumalator += 1;
      }
      return accumalator;
    }, 0);

    player.wins = currentWins;

    return player;
  })
}

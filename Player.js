class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(gamestate.players[gamestate.in_action].stack);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

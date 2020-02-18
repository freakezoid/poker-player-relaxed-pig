class Player {
  static get VERSION() {
    return '0.1';
  }

  static betRequest(gameState, bet) {
    bet(gamestate.current_buy_in - gamestate.players[gamestate.in_action][bet]);
  }

  static showdown(gameState) {
  }
}

module.exports = Player;

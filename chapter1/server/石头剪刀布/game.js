module.exports = function(playerAction) {

  var random = Math.random() * 3;

  if (random < 1) {
    var computerAction = 'rock';
  } else if (random > 2) {
    var computerAction = 'scissor';
  } else {
    var computerAction = 'paper';
  }
  if (computerAction === playerAction) {
    return 0;
  } else if(
    (playerAction === 'rock' && computerAction === 'scissor') ||
    (playerAction === 'scissor' && computerAction === 'paper') ||
    (playerAction === 'paper' && computerAction === 'rock')
  ) {
    return 1;
  } else {
    return -1;
  }

}
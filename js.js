function calculateDamage() {
    const player1Attack = parseInt(document.getElementById('player1-attack').value);
    const player1Resistance = parseInt(document.getElementById('player1-resistance').value);
    const player1MagicAttack = parseInt(document.getElementById('player1-magic-attack').value);
    const player1Mana = parseInt(document.getElementById('player1-mana').value);
  
    const player2Resistance = parseInt(document.getElementById('player2-resistance').value);
  
    const physicalDamage = player1Attack - player2Resistance / 2;
    const magicDamage = (player1MagicAttack + player1Mana) - player2Resistance;
  
    const result = document.getElementById('result');
    result.innerHTML = `Dano Físico: ${physicalDamage}<br>Dano Mágico: ${magicDamage}`;
  }
  
// render all players
const renderAllPlayers = (playerList) => {
  if (!playerList || playerList.length === 0) {
    playerContainer.innerHTML = "<h3>No recipes found</h3>";
    return;
  }

  playerContainer.innerHTML = "";

  playerList.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.classList.add("players");
    playerElement.innerHTML = `
      <h4>${player.name}</h4>
      <p> ${player.breed}</p>
      <p> ${player.imageUrl}</p>
      <p> ${player.teamId}</p>
      <button class ="delete-button" data-id="${player.id}">Remove</button>
      <button class ="detail-button" data-id="${player.id}">See Details/button>
      `;
  });

  playerContainer.appendChild(playerElement);

  let deleteButton = playerElement.querySelector(".delete-button");
  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    removePlayer(player.id);
  });

  let detailButton = playerElement.querySelector(".detail-button");
  detailButton.addEventListener("click", (event) => {
    event.preventDefault();
    renderSinglePlayer(player.id);
  });
};
/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

init();

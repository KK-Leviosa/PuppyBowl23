// I made a DOM Form in the JS although we also have a HTML form -- ERIC
/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */

//    create new player form:

const createNewPlayerForm = () => {
  const formHtml = `
      <form>
      <label for="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Name">
      <label for="breed">Breed</label>
      <input type="text" id="breed" name="breed" placeholder="Breed">
      <label for="image_url">Image URL</label>
      <input type="text" id="image_url" name="image_url" 
      placeholder="Image URL">
      <button type="submit">Create</button>
      </form>    
      `;

  newPlayerFormContainer.innerHTML = formHtml;

  const form = newPlayerFormContainer.querySelector("form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log(form);

    let playerData = {
      name: form.name.value,
      breed: form.breed.value,
      imageUrl: form.imageUrl.value,
    };

    await addNewPlayer(playerData.name, playerData.breed, playerData.imageUrl);

    const players = await fetchAllPlayers();
    renderAllPlayers(players);

    form.name.value = "";
    form.breed.value = "";
    form.imageUrl.value = "";
  });
};

const renderNewPlayerFormContainer = () => {
  try {
  } catch (error) {
    console.error("Uh oh, trouble rendering the new player form!", error);
  }
};

const init = async () => {
  const players = await fetchAllPlayers();
  renderAllPlayers(players);

  createNewPlayerForm();
};

export async function fetchPlayers() {
  const response = await fetch(
    "https://arsenal-players-api.herokuapp.com/players"
  );
  const data = await response.json();
  return data;
}

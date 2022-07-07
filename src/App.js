import { useQuery } from "react-query";
import { fetchPlayers } from "./api";
import "./styles.css";

export default function App() {
  const { data, status } = useQuery("players", fetchPlayers);

  if (status === "loading") {
    return <p>Loading</p>;
  }
  if (status === "error") {
    return <p>Something went wrong, try again later </p>;
  }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data.map((player) => (
        <div key={player.id}>
          {player.first_name}, {player.last_name}
          <b style={player.shirt_number && { color: "red" }}>
            {" "}
            {player.shirt_number ?? "n/a"}
          </b>
        </div>
      ))}
    </div>
  );
}

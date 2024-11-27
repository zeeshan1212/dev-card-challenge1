import { MantineProvider } from "@mantine/core";
import "./App.css";
import DevCard from "./DevCard";

function App() {
  return (
    <MantineProvider>
      <div style={{ padding: "2rem", background: "black", height: "100vh" }}>
        <DevCard />
      </div>
    </MantineProvider>
  );
}

export default App;

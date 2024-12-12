import Title from "./components/Title";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ width: "80%" }}>
        <Toaster />
        <Title />
        <Form />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;

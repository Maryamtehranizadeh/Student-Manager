import Title from "./components/Title";
import Manager from "./components/Manager";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Toaster />
      <Manager />
    </div>
  );
}

export default App;

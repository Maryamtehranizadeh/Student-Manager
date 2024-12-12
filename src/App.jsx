import Title from "./components/Title";
import Form from "./components/Form";
import { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Toaster />
      <Title />
      <Form />
    </div>
  );
}

export default App;

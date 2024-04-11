import { Toaster } from "react-hot-toast";
import Main from "./pages/Main";

const App = () => {
  return (
    <div className="App">
      <Toaster position="top-right" reverseOrder={false} />
      <Main />
    </div>
  );
};

export default App;

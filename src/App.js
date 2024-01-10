import "./App.css";
import MyEvent from "./components/Event";
import MyForm from "./components/Form";
import UnControlledForm from "./components/Form/unControlledForm";
import MyTimer from "./components/Timer";

function App() {
  return (
    <duv>
      <MyTimer />

      <MyEvent />

      <MyForm />

      <UnControlledForm />
    </duv>
  );
}

export default App;

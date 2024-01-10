import "./App.css";
import MyEvent from "./components/Event";
import MyForm from "./components/Form";
import ControlledForm from "./components/Form/controlledForm";
import UnControlledForm from "./components/Form/unControlledForm";
import MyTimer from "./components/Timer";

function App() {
  return (
    <div>
      <MyTimer />
      <MyEvent />
      <MyForm />
      <UnControlledForm />
      <ControlledForm />
    </div>
  );
}

export default App;

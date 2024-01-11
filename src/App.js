import "./App.css";
import MyEvent from "./components/Event";
import MyForm from "./components/Form";
import ControlledForm from "./components/Form/controlledForm";
import UnControlledForm from "./components/Form/unControlledForm";
import SignUpForm from "./components/Register-Form";
import SplitForm from "./components/Split-Form";
import MyTimer from "./components/Timer";

function App() {
  return (
    <div>
      <SignUpForm />
      <MyTimer />
      <MyEvent />
      <MyForm />
      <UnControlledForm />
      <ControlledForm />
      <SplitForm />
    </div>
  );
}

export default App;

import styles from "./App.module.css";
import CalculationForm from "./pages/CalculationForm/CalculationForm";

function App() {
  return (
    <>
      <h1 className={styles.Title}>Calculadora de densidade corporal</h1>
      <CalculationForm />
    </>
  );
}

export default App;

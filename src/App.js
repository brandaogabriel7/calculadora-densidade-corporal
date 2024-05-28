import CalculationForm from "./components/CalculationForm/CalculationForm";
import "./index.css";
import { useState } from "react";
import ResultsViewModal from "./components/ResultsViewModal/ResultsViewModal";
import calculate from "./services/calculator";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});

  const handleFormData = (formData) => {
    setResults(calculate(formData));
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <>
      <h1>Calculadora de densidade corporal</h1>
      <CalculationForm handleFormData={handleFormData} />
      <ResultsViewModal
        results={results}
        showResults={showResults}
        handleCloseResults={handleCloseResults}
      />
    </>
  );
}

export default App;

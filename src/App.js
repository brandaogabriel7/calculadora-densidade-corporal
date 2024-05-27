import CalculationForm from "./components/CalculationForm/CalculationForm";
import "./index.css";
import { useState } from "react";
import ResultsViewModal from "./components/ResultsViewModal/ResultsViewModal";

function App() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});

  const handleResults = (results) => {
    setResults(results);
    setShowResults(true);
  };

  const handleCloseResults = () => {
    setShowResults(false);
  };

  return (
    <>
      <h1>Calculadora de densidade corporal</h1>
      <CalculationForm handleResults={handleResults} />
      <ResultsViewModal
        results={results}
        showResults={showResults}
        handleCloseResults={handleCloseResults}
      />
    </>
  );
}

export default App;

import { useEffect } from "react";

const ResultsView = ({ results, showResults, handleCloseResults }) => {
  useEffect(() => {
    console.log(results, showResults);
    setTimeout(() => {
      handleCloseResults();
    }, 2000);
  }, [results, showResults, handleCloseResults]);
  return <></>;
};

export default ResultsView;

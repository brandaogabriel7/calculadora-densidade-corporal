import { Box, Modal, Typography } from "@mui/material";

const ResultsView = ({ results, showResults, handleCloseResults }) => {
  console.log(results, showResults, handleCloseResults);
  const resultsDisplay = { ...results };
  resultsDisplay.birthDate = new Date(results?.birthDate?.$d);
  return (
    <Modal open={showResults} onClose={handleCloseResults}>
      <Box
        sx={{
          backgroundColor: "white",
          margin: "2em auto",
          width: "50%",
          padding: "20px",
        }}
      >
        <Typography variant="h2">Resultados</Typography>
        <p>
          Densidade corporal: <br />
          Percentual de gordura: <br />
          Massa gorda: <br />
          Massa isenta de gordura:
        </p>
      </Box>
    </Modal>
  );
};

export default ResultsView;

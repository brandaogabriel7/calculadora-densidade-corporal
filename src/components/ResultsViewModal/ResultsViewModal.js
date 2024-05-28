import { Box, Modal, Typography } from "@mui/material";

const ResultsView = ({ results, showResults, handleCloseResults }) => {
  const { bodyDensity, fatPercentage, fatMass, fatFreeMass } = results;
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
          Densidade corporal: {bodyDensity.toFixed(3)}
          <br />
          Percentual de gordura: {fatPercentage.toFixed(3)}
          <br />
          Massa gorda: {fatMass.toFixed(3)}
          <br />
          Massa isenta de gordura: {fatFreeMass.toFixed(3)}
        </p>
      </Box>
    </Modal>
  );
};

export default ResultsView;

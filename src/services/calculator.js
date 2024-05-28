const coefficients = {
  Masculino: {
    coefficient1: 1.112,
    coefficient2: 0.00043499,
    coefficient3: 0.00000055,
    coefficient4: 0.00028826,
    coefficient5: 4.95,
    coefficient6: 4.5,
  },
};

const calculate = (formData) => {
  const age = new Date().getFullYear() - formData.birthDate.$d.getFullYear();
  const skinFoldsSum = Object.values(formData.skinFolds).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const {
    coefficient1,
    coefficient2,
    coefficient3,
    coefficient4,
    coefficient5,
    coefficient6,
  } = coefficients[formData.sex];
  const bodyDensity =
    coefficient1 -
    coefficient2 * skinFoldsSum +
    coefficient3 * Math.pow(skinFoldsSum, 2) -
    coefficient4 * age;

  const fatPercentage = (coefficient5 / bodyDensity - coefficient6) * 100;

  const fatMass = formData.bodyMass * (fatPercentage / 100);

  const fatFreeMass = formData.bodyMass - fatMass;

  return {
    bodyDensity,
    fatPercentage,
    fatMass,
    fatFreeMass,
  };
};

export default calculate;

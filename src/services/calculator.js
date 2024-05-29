const coefficients = {
  Masculino: [1.112, 0.00043499, 0.00000055, 0.00028826],
  Feminino: [1.097, 0.00046971, 0.00000056, 0.00012828],
};

const calculate = (formData) => {
  const age = new Date().getFullYear() - formData.birthDate.$d.getFullYear();
  const skinFoldsSum = Object.values(formData.skinFolds).reduce(
    (acc, curr) => acc + curr,
    0
  );
  const [coefficient1, coefficient2, coefficient3, coefficient4] =
    coefficients[formData.sex];

  const bodyDensity =
    coefficient1 -
    coefficient2 * skinFoldsSum +
    coefficient3 * Math.pow(skinFoldsSum, 2) -
    coefficient4 * age;

  const fatPercentage = (4.95 / bodyDensity - 4.5) * 100;

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

import calculate from "./calculator";

it.each([
  [
    {
      sex: "Masculino",
      birthDate: { $d: new Date("1986-09-15") },
      bodyMass: 78,
      height: 1.79,
      skinFolds: {
        tricipital: 9.5,
        suprailiaca: 14.2,
        coxa: 18.2,
        abdominal: 16.1,
        peito: 5,
        subescapular: 15.4,
        axilarMedia: 9.2,
      },
    },
    {
      bodyDensity: 1.06716157,
      fatPercentage: 13.85,
      fatMass: 10.79,
      fatFreeMass: 67.21,
    },
  ],
])("should calculate for male", (formData, expectedResults) => {
  const results = calculate(formData);

  expect(results.bodyDensity).toBeCloseTo(expectedResults.bodyDensity, 1);
  expect(results.fatPercentage).toBeCloseTo(expectedResults.fatPercentage, 1);
  expect(results.fatMass).toBeCloseTo(expectedResults.fatMass, 1);
  expect(results.fatFreeMass).toBeCloseTo(expectedResults.fatFreeMass, 1);
});

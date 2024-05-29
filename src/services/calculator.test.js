import { FEMALE, MALE } from "../sex";
import calculate from "./calculator";

it.each([
  [
    {
      sex: MALE,
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
  [
    {
      sex: MALE,
      birthDate: { $d: new Date("2003-04-20") },
      bodyMass: 65,
      height: 1.69,
      skinFolds: {
        tricipital: 2,
        suprailiaca: 3.7,
        coxa: 8.2,
        abdominal: 6.1,
        peito: 5,
        subescapular: 10.4,
        axilarMedia: 7.1,
      },
    },
    {
      bodyDensity: 1.09,
      fatPercentage: 4.77,
      fatMass: 3.1,
      fatFreeMass: 61.9,
    },
  ],
  [
    {
      sex: FEMALE,
      birthDate: { $d: new Date("2000-04-20") },
      bodyMass: 70,
      height: 1.69,
      skinFolds: {
        tricipital: 2,
        suprailiaca: 3.7,
        coxa: 8.2,
        abdominal: 6.1,
        peito: 5,
        subescapular: 10.4,
        axilarMedia: 7.1,
      },
    },
    {
      bodyDensity: 1.07,
      fatPercentage: 10.48,
      fatMass: 7.3,
      fatFreeMass: 62.7,
    },
  ],
  [
    {
      sex: FEMALE,
      birthDate: { $d: new Date("1989-01-12") },
      bodyMass: 80,
      height: 1.7,
      skinFolds: {
        tricipital: 3.44,
        suprailiaca: 3.7,
        coxa: 8.51,
        abdominal: 6.35,
        peito: 7.43,
        subescapular: 11.01,
        axilarMedia: 7.1,
      },
    },
    {
      bodyDensity: 1.07,
      fatPercentage: 11.99,
      fatMass: 9.6,
      fatFreeMass: 70.4,
    },
  ],
])("should calculate %j", (formData, expectedResults) => {
  const results = calculate(formData);

  expect(results.bodyDensity).toBeCloseTo(expectedResults.bodyDensity, 1);
  expect(results.fatPercentage).toBeCloseTo(expectedResults.fatPercentage, 1);
  expect(results.fatMass).toBeCloseTo(expectedResults.fatMass, 1);
  expect(results.fatFreeMass).toBeCloseTo(expectedResults.fatFreeMass, 1);
});

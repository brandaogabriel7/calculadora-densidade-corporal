import { date, number, object, string } from "yup";

const schema = object({
  sex: string().oneOf(["Masculino", "Feminino"]).required(),
  birthDate: date().required(),
  bodyMass: number().min(20).max(500).required(),
  height: number().min(1).max(3).required(),
});

export default schema;

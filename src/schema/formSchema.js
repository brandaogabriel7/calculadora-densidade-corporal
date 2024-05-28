/* eslint-disable no-template-curly-in-string */
import { date, number, object, string } from "yup";
import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "Campo obrigatório",
  },
  number: {
    min: "Valor mínimo: ${min}",
    max: "Valor máximo: ${max}",
  },
});

const schema = object({
  sex: string().oneOf(["Masculino", "Feminino"]).required(),
  birthDate: date().required(),
  bodyMass: number().min(20).max(500).required(),
  height: number().min(1).max(3).required(),
  skinFolds: object({
    tricipital: number().min(0).max(50).required(),
    suprailiaca: number().min(0).max(50).required(),
    coxa: number().min(0).max(50).required(),
    abdominal: number().min(0).max(50).required(),
    peito: number().min(0).max(50).required(),
    subescapular: number().min(0).max(50).required(),
    axilarMedia: number().min(0).max(50).required(),
  }).required(),
});

export default schema;

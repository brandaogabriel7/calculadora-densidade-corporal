/* eslint-disable no-template-curly-in-string */
import { date, number, object, string } from "yup";
import { setLocale } from "yup";
import { FEMALE, MALE } from "../sex";

const MIN_SKIN_FOLDS = 0;
const MAX_SKIN_FOLDS = 100;

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
  sex: string().oneOf([MALE, FEMALE]).required(),
  birthDate: date().required(),
  bodyMass: number().min(10).max(1000).required(),
  height: number().min(0.5).max(3).required(),
  skinFolds: object({
    tricipital: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
    suprailiaca: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
    coxa: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
    abdominal: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
    peito: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
    subescapular: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
    axilarMedia: number().min(MIN_SKIN_FOLDS).max(MAX_SKIN_FOLDS).required(),
  }).required(),
});

export default schema;

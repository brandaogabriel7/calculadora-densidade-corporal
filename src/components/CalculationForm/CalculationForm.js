import { useFormik } from "formik";
import schema from "../../schema/formSchema";
import {
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import NumberInput from "../NumberInput/NumberInput";
import styles from "./CalculationForm.module.css";
import { useEffect } from "react";

const initialValues = {
  sex: null,
  birthDate: null,
  bodyMass: "",
  height: "",
  skinFolds: {
    tricipital: "",
    suprailiaca: "",
    coxa: "",
    abdominal: "",
    peito: "",
    subescapular: "",
    axilarMedia: "",
  },
};

const CalculationForm = ({ handleResults }) => {
  const formik = useFormik({
    validationSchema: schema,
    onSubmit: handleResults,
    initialValues,
  });

  useEffect(() => {
    console.log(formik.errors);
  }, [formik.errors]);
  return (
    <form className={styles.Form} onSubmit={formik.handleSubmit}>
      <h2>Preencha o formulário para realizar os cálculos</h2>
      <Stack spacing={2}>
        <FormControl>
          <FormLabel id="sex-radio-group">Sexo</FormLabel>
          <RadioGroup
            {...formik.getFieldProps("sex")}
            aria-labelledby="sex-radio-group"
            name="sex"
            row
          >
            <FormControlLabel
              value="Feminino"
              control={<Radio />}
              label="Feminino"
            />
            <FormControlLabel
              value="Masculino"
              control={<Radio />}
              label="Masculino"
            />
          </RadioGroup>
          {formik.touched.sex && formik.errors.sex ? (
            <FormHelperText error>{formik.errors.sex}</FormHelperText>
          ) : null}
        </FormControl>
        <Stack spacing={2} direction="row">
          <FormControl>
            <DatePicker
              label="Data de nascimento"
              name="birthDate"
              format="DD/MM/YYYY"
              value={formik.values.birthDate}
              onChange={(value) => formik.setFieldValue("birthDate", value)}
              disableFuture
            />
            {formik.touched.birthDate && formik.errors.birthDate ? (
              <FormHelperText error>{formik.errors.birthDate}</FormHelperText>
            ) : null}
          </FormControl>
          <NumberInput
            name="bodyMass"
            label="Massa corporal"
            unit="kg"
            formik={formik}
          />
          <NumberInput name="height" label="Altura" unit="m" formik={formik} />
        </Stack>

        <Divider />
        <Typography variant="h6" component="h3">
          Dobras cutâneas
        </Typography>
        <Stack spacing={2}>
          <NumberInput
            name="skinFolds.tricipital"
            label="Tricipital"
            unit="mm"
            formik={formik}
          />
          <NumberInput
            name="skinFolds.suprailiaca"
            label="Suprailíaca"
            unit="mm"
            formik={formik}
          />
          <NumberInput
            name="skinFolds.coxa"
            label="Coxa"
            unit="mm"
            formik={formik}
          />
          <NumberInput
            name="skinFolds.abdominal"
            label="Abdominal"
            unit="mm"
            formik={formik}
          />
          <NumberInput
            name="skinFolds.peito"
            label="Peito"
            unit="mm"
            formik={formik}
          />
          <NumberInput
            name="skinFolds.subescapular"
            label="Subescapular"
            unit="mm"
            formik={formik}
          />
          <NumberInput
            name="skinFolds.axilarMedia"
            label="Axilar média"
            unit="mm"
            formik={formik}
          />
        </Stack>
        <Button type="submit" variant="contained">
          Calcular
        </Button>
      </Stack>
    </form>
  );
};

export default CalculationForm;

import { Form, Field, Formik } from "formik";
import styles from "./CalculationForm.module.css";
import schema from "../../schema/formSchema";

const CalculationForm = () => (
  <Formik
    initialValues={{
      birthDate: "",
      bodyMass: "",
      height: "",
      skinFolds: {
        tricipital: 0,
        suprailiaca: 0,
        coxa: 0,
        abdominal: 0,
        peito: 0,
        subescapular: 0,
        axilarMedia: 0,
      },
    }}
    validationSchema={schema}
  >
    {({ errors, touched }) => (
      <Form className={styles.Form}>
        <fieldset>
          <legend>Sexo:</legend>
          <label>
            <Field type="radio" name="sex" value="Masculino" />
            Masculino
          </label>
          <label>
            <Field type="radio" name="sex" value="Feminino" />
            Feminino
          </label>
        </fieldset>
        <label htmlFor="birthDate">Data de nascimento:</label>
        <Field type="date" name="birthDate" />
        <label htmlFor="bodyMass">Massa corporal (kg):</label>
        <Field type="number" name="bodyMass" />
        <label htmlFor="height">Altura (m):</label>
        <Field type="number" name="height" />
        <fieldset>
          <legend>Dobras cutâneas (mm)</legend>
          <label htmlFor="skinFolds.tricipital">Tricipital</label>
          <Field type="number" name="skinFolds.tricipital" />
          <label htmlFor="skinFolds.suprailiaca">Suprailíaca</label>
          <Field type="number" name="skinFolds.suprailiaca" />
          <label htmlFor="skinFolds.coxa">Coxa</label>
          <Field type="number" name="skinFolds.coxa" />
          <label htmlFor="skinFolds.abdominal">Abdominal</label>
          <Field type="number" name="skinFolds.abdominal" />
          <label htmlFor="skinFolds.peito">Peito</label>
          <Field type="number" name="skinFolds.peito" />
          <label htmlFor="skinFolds.subescapular">Subescapular</label>
          <Field type="number" name="skinFolds.subescapular" />
          <label htmlFor="skinFolds.axilarMedia">Axilar média</label>
          <Field type="number" name="skinFolds.axilarMedia" />
        </fieldset>
        <button type="submit">Calcular</button>
      </Form>
    )}
  </Formik>
);

export default CalculationForm;

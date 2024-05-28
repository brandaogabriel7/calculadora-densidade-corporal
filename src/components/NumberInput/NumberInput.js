import {
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";

const NumberInput = ({ name, label, unit, formik }) => (
  <FormControl
    variant="outlined"
    error={formik.touched[name] && Boolean(formik.errors[name])}
  >
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <OutlinedInput
      id={name}
      endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
      aria-describedby={`${name}-helper-text`}
      inputProps={{
        "aria-label": name,
        name: name,
        type: "number",
        ...formik.getFieldProps(name),
      }}
    />
    {formik.touched[name] && formik.errors[name] ? (
      <FormHelperText error>{formik.errors[name]}</FormHelperText>
    ) : null}
  </FormControl>
);

export default NumberInput;

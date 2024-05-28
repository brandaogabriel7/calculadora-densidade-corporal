import {
  FormControl,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  FormHelperText,
} from "@mui/material";
import { camelCase } from "../../utils/stringUtils";
import { get } from "lodash";

const NumberInput = ({ name, label, unit, formik }) => (
  <FormControl
    variant="outlined"
    error={formik.touched[name] && Boolean(formik.errors[name])}
  >
    <InputLabel htmlFor={name}>{label}</InputLabel>
    <OutlinedInput
      endAdornment={<InputAdornment position="end">{unit}</InputAdornment>}
      aria-describedby={`${camelCase(name)}-helper-text`}
      inputProps={{
        "aria-label": camelCase(name),
        name: name,
        type: "number",
        ...formik.getFieldProps(name),
      }}
    />
    {get(formik.touched, name) && get(formik.errors, name) ? (
      <FormHelperText error>{get(formik.errors, name)}</FormHelperText>
    ) : null}
  </FormControl>
);

export default NumberInput;

import { useState } from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";

import { useFormik } from "formik";
import { formSchema } from "../../validations/formSchema";



const PostForm = ({isLoading, postFunc}:any) => {
  const theme: any = useTheme();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema:formSchema,
    onSubmit: (data)=>postFunc(data)
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          fullWidth
          error={formik.touched.email && Boolean(formik.errors.email)}
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor="outlined-adornment-email-login">
            Email Address
          </InputLabel>
          <OutlinedInput
            type="email"
            onChange={formik.handleChange}
            name="email"
            label="Email Address"
            onBlur={formik.handleBlur}
            inputProps={{}}
          />
          {formik.touched.email && formik.errors.email && (
            <FormHelperText error id="standard-weight-helper-text-email-login">
              {formik.errors.email}
            </FormHelperText>
          )}
        </FormControl>
      

        <Box sx={{ mt: 2 }}>

            <Button
              disableElevation
              disabled={isLoading}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              color="secondary"
            >
              submit
            </Button>
        </Box>
      </form>
    </>
  );
};

export default PostForm;

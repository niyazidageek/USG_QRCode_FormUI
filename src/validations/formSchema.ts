import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    email: Yup.string()
    .email("E-poçt düzgün deyil!")
    .max(500, "E-poçt uzundu - 500 simvoldan çox olmamalidir!")
    .required("Melumati daxil edin!"),
  });
  
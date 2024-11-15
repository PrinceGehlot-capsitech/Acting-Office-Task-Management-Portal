import React, { useState } from "react";
import {

  Label,
  PrimaryButton,
  Stack,
  TextField,
} from "@fluentui/react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
interface ValuesType {
  email: string;
  password: string;
}



const LoginForm: React.FC = () => {
  const initialValues: ValuesType = {
    email: "",
    password: "",
  };

  const [loginError, setLoginError] = useState("");

  const handleLogin = async (values: ValuesType) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:5031/api/SignIn/authenticate",
        values
      );
      if(response){
        navigate("/")
      }
     
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        if (err.response.status === 401) {
          values.password = "";
          setLoginError("Invalid email or password");
        } else {
          console.error("Error submitting form:", err);
          setLoginError("An error occurred while logging in");
        }
      } else {
        console.error("Error submitting form:", err);
        setLoginError("An error occurred while logging in");
      }
    }
  };

  const navigate = useNavigate()
  return (
    <>
      <Stack styles={{ root: { alignItems: "center" } }}>
        <h2>LOGIN</h2>
      </Stack>
      <Stack styles={{ root: { width: "80%" } }}>
        <Formik initialValues={initialValues} onSubmit={handleLogin}>
          {({ values, handleChange }) => (
            <Form>
              {loginError && (
                <Stack
                  styles={{
                    root: { color: "red", textAlign: "center", marginTop: 10 },
                  }}
                >
                  <p>{loginError}</p>
                </Stack>
              )}

              <Stack
                styles={{
                  root: {
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 30,
                  },
                }}
              >
                <Stack.Item>
                  <Label>Email</Label>
                  <Field
                    as={TextField}
                    value={values.email}
                    onChange={handleChange}
                    name="email"
                    styles={{ fieldGroup: { borderRadius: 6 } }}
                  />
                  <ErrorMessage name="email" component="div" />
                </Stack.Item>
                <Stack.Item>
                  <Label>Password</Label>
                  <Field
                    as={TextField}
                    value={values.password}
                    onChange={handleChange}
                    name="password"
                    type="password"
                    styles={{ fieldGroup: { borderRadius: 6 } }}
                  />
                  <ErrorMessage name="password" component="div" />
                </Stack.Item>
              </Stack>

              <Stack horizontal horizontalAlign="center">
                <Stack.Item styles={{ root: { width: "45%" } }}>
                  <PrimaryButton
                    type="submit"
                    styles={{ root: { width: "100%", borderRadius: 10 } }}
                    onClick={( ) =>{
                        handleLogin(values);

                    }
                     
                    }
                  >
                    Login
                  </PrimaryButton>
                </Stack.Item>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>

    </>
  );
};

export default LoginForm;

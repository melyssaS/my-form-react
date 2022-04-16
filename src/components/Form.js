import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "./TextField";
import { Select } from "./Select";

export const Forms = () => {
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    middleName: Yup.string().max(15, "Must be 15 characters or less"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    secondLastName: Yup.string().max(20, "Must be 20 characters or less"),
    documentType: Yup.string().required("Required"),
    documentNumber: Yup.number()
      .required()
      .positive()
      .integer()
      .required("Required"),
    birthDate: Yup.date().required("Required"),
    departmentOfBirth: Yup.string().required("Required"),
    cityOfBirth: Yup.string().required("Required"),
    mobilePhone: Yup.number()
      .required()
      .positive()
      .integer()
      .required("Required"),
    gender: Yup.string().required("Required"),
    address:Yup.string().required("Required"),
  });
  return (
    <Formik
      initialValues={{
        firstName: "",
        middleName: "",
        lastName: "",
        secondLastName: "",
        documentType: "",
        documentNumber: "",
        birthDate: "",
        departmentOfBirth: "",
        cityOfBirth: "",
        mobilePhone: "",
        gender: "",
        address:""
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div className="flex flex-col items-center">
          <h1 className="font-VarelaRound text-first-color text-3xl m-2">
            Complete la siguiente información
          </h1>
          <h3 className="font-OpenSans text-xl text-gray-900 font-bold  mb-2">
            Información Personal
          </h3>
          <Form className="grid gap-4 grid-cols-4  border w-3/4 h-fit p-6 shadow-xl  border-solid border-inherit rounded-lg">
            <TextField
              styles="lg:col-span-2 col-span-4"
              label="Primer nombre"
              name="firstName"
              type="text"
            />
            <TextField
              styles="lg:col-span-2 col-span-4"
              label="Segundo nombre"
              name="middleName"
              type="text"
            />
            <TextField
              styles="lg:col-span-2 col-span-4"
              label="Primer apellido"
              name="lastName"
              type="text"
            />
            <TextField
              styles="lg:col-span-2 col-span-4"
              label="Segundo apellido"
              name="secondLastName"
              type="text"
            />
            <TextField
              styles="lg:col-span-1 col-span-2"
              label="Fecha de nacimiento"
              name="birthDate"
              type="date"
            />
            <TextField
              styles="lg:col-span-1 col-span-2"
              label="Genero"
              name="gender"
              type="text"
            />
            <TextField
              styles="lg:col-span-1 col-span-2"
              label="Tipo de documento"
              name="documentType"
              type="text"
            />
            <TextField
              styles="lg:col-span-1 col-span-2"
              label="Número de documento"
              name="documentNumber"
              type="text"
            />
            <TextField
              styles="lg:col-span-1 col-span-2"
              label="Número de celular"
              name="mobilePhone"
              type="text"
            />
            <TextField
              styles="lg:col-span-1 col-span-2"
              label="Dirección"
              name="address"
              type="text"
            />
            <div className="grid grid-cols-2 col-span-2 gap-1">
              <label className="col-span-2 font-VarelaRound text-sm text-center text-first-color">
                Ciudad y pais de nacimiento
              </label>
              <Select
                styles="col-span"
                name="country"
                options={["Hola", "muno"]}
              />
              <Select name="city" options={["Hola", "muno"]} />
            </div>
            <button
              className="bg-first-color text-white font-medium text-OpenSans rounded-md p-2 min-w-full col-span-4"
              type="submit"
            >
              Registrar
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

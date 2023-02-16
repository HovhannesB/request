import { SubmissionErrors } from "final-form";
import React, { ReactNode } from "react";
import { Form as FinalForm } from "react-final-form";

interface FormProps<T> {
  initialValues?: T;
  onSubmit: (data: T) => void | SubmissionErrors | Promise<SubmissionErrors>;
  children: ReactNode;
}

const Form = <T,>({ onSubmit, children, initialValues }: FormProps<T>) => {
  return (
    <FinalForm
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>{children}</form>
      )}
    />
  );
};

export default Form;

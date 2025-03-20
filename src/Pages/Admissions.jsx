import React from "react";
import AdmissionForm from "../Components/AdmissionForm";
import Programs from "../Components/Programs";

export const Admissions = () => {
  return (
    <div className="container mx-auto my-0">
      <div className="relative bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Admissions</h1>
      </div>
      <div className="flex justify-end p-10">
        <AdmissionForm />
      </div>

      <Programs />
    </div>
  );
};

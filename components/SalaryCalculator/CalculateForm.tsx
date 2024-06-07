"use client";
import { useState } from "react";
import EarningsModal from "../Modals/EarningsModal";
import DeductionModal from "../Modals/DeductionModal";

function CalculateForm() {
  const [showModalEarnings, setShowModalEarnings] = useState(false);
  const [showModalDeductions, setShowModalDeductions] = useState(false);

  return (
    <div className="w-7/12">
      <div className=" p-8 bg-gray-50  rounded-lg border">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Calculate Your Salary</h1>
          <button className="text-blue-600 hover:text-blue-800 flex items-center">
            {/* <img src={ResetImage} alt="Reset" className="w-5 h-5 mr-1" /> */}
            Reset
          </button>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="basicSalary"
          >
            Basic Salary
          </label>
          <input
            type="number"
            id="basicSalary"
            value=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Earnings</h2>
          <p className="text-gray-600 mb-2">
            Allowance, Fixed Allowance, Bonus and etc.
          </p>
          <button
            onClick={() => setShowModalEarnings(true)}
            className="text-blue-600 hover:text-blue-800 flex items-center mb-4"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Allowance
          </button>
        </div>
        <hr />
        <div className="my-4">
          <h2 className="text-xl font-bold mb-2">Deductions</h2>
          <p className="text-gray-600 mb-2">
            Salary Advances, Loan Deductions and all.
          </p>
          <button
            onClick={() => setShowModalDeductions(true)}
            className="text-blue-600 hover:text-blue-800 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New Deduction
          </button>
        </div>
      </div>
      <EarningsModal
        isVisible={showModalEarnings}
        onClose={() => setShowModalEarnings(false)}
      ></EarningsModal>
      <DeductionModal
        isVisible={showModalDeductions}
        onClose={() => setShowModalDeductions(false)}
      >
      </DeductionModal>
    </div>
  );
}

export default CalculateForm;

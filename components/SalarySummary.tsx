import React from "react";

function SalarySummary({ basicSalary }) {
  return (
    <div className="w-4/12">
      <div className="   p-8 bg-white  rounded-lg border">
        <h1 className="text-2xl font-bold mb-4">Your salary</h1>
        <div className="mb-4">
          <div className="flex justify-between">
            <span className="font-semibold">Items</span>
            <span className="font-semibold">Amount</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Basic Salary</span>
            <span>{basicSalary}</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Gross Earning</span>
            <span>500</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Gross Deduction</span>
            <span>500</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Employee EPF (8%)</span>
            <span>- 500</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>APIT</span>
            <span>- 500</span>
          </div>
          <div className="flex justify-between mt-4 bg-gray-100 p-2 rounded">
            <span className="font-semibold">Net Salary (Take Home)</span>
            <span className="font-semibold">500</span>
          </div>
        </div>
        <div className="mt-6">
          <span className="font-semibold">Contribution from the Employer</span>
          <div className="flex justify-between mt-2">
            <span>Employer EPF (12%)</span>
            <span>500</span>
          </div>
          <div className="flex justify-between mt-2">
            <span>Employer ETF (3%)</span>
            <span>500</span>
          </div>
          <div className="flex justify-between mt-4 bg-gray-100 p-2 rounded">
            <span className="font-semibold">CTC (Cost to Company)</span>
            <span className="font-semibold">500</span>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default SalarySummary;

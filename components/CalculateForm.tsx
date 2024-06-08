"use client";
import React, { useState } from "react";
import EarningsModal from "./Modals/EarningsModal";
import DeductionModal from "./Modals/DeductionModal";
import { IPost } from "@/types/posts";
import Modal from "./Modal";
import { addPost } from "@/api";

interface CalculateFormProps {
  posts: IPost[];
}

const CalculateForm: React.FC<CalculateFormProps> = ({ posts }) => {
  // const [basicSalary, setBasicSalary] = useState('');
  const [showModalEarnings, setShowModalEarnings] = useState(false);
  const [showModalDeductions, setShowModalDeductions] = useState(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newPostName, setNewPostName] = useState('');
  const [newPostAmount, setNewPostAmount] = useState('');

  const handleSubmitNewPost = async (e) => {
    e.preventDefault();
    // console.log(newPostName);
    // console.log(newPostAmount);
    await addPost({
    id: "3",
    name: newPostName,
    amount: newPostAmount
    })
    setNewPostName('');
    setNewPostAmount('');
  };

  return (
    <div className="w-7/12">
      <div className=" p-8 bg-gray-50  rounded-lg border">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Calculate Your Salary</h1>
          <button className="text-blue-600 hover:text-blue-800 flex items-center gap-2">
            {/* <img src={ResetImage} alt="Reset" className="w-5 h-5 mr-1" /> */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-5 "
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
            </div>
            <span>Reset</span>
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
            // value={basicSalary}
            className="shadow appearance-none border rounded w-11/12 md:w-6/12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // onChange={onBasicSalaryChange}
          />
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Earnings</h2>
          <p className="text-gray-600 mb-2">
            Allowance, Fixed Allowance, Bonus and etc.
          </p>
          <div className="flex gap-2 my-2">
            <span>Travel:</span> <span>10,000</span> <span>EPF/ETF</span>{" "}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 fill-gray-300 bg-slate-200 rounded-full py-1 font-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 fill-gray-500 bg-slate-200 rounded-full py-1 font-black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
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

          {/* data */}
          {posts.map((post) => (
            <div key={post.id} className="flex gap-2 my-2">
              <span>{post.name}:</span> <span>{post.amount}</span>{" "}
              <span>EPF/ETF</span>{" "}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6  fill-gray-300 bg-slate-200 rounded-full py-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6 fill-gray-500 bg-slate-200 rounded-full py-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>
            </div>
          ))}

          {/* end data */}

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

          {/* testing */}
          <button
            onClick={() => setModalOpen(true)}
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
          {/* testing */}
        </div>
      </div>
      <EarningsModal
        isVisible={showModalEarnings}
        onClose={() => setShowModalEarnings(false)}
      ></EarningsModal>
      <DeductionModal
        isVisible={showModalDeductions}
        onClose={() => setShowModalDeductions(false)}
      ></DeductionModal>
      <Modal isVisible={modalOpen} onClose={() => setModalOpen(false)}>
        <form
        onSubmit={handleSubmitNewPost}
         className="bg-white p-4 rounded shadow-md w-96">
          <div className="flex justify-between">
            <h3 className="text-lg font-semibold mb-4">Add New Deduction</h3>
          </div>
          <hr />
          <div className="my-4">
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              value={newPostName}
              placeholder="eg: Travel"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              onChange={(e) => setNewPostName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              placeholder="eg: 10,000"
              value={newPostAmount}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
              onChange={(e) => setNewPostAmount(e.target.value)}

            />
          </div>
          {/* <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              // checked=""
              className="mr-2 size-4"
            />
            <label className="text-sm font-medium text-gray-700">
              Include in EPF/ETF
            </label>
          </div> */}
          <div className="flex justify-end">
            <button className="mr-2 p-2  text-blue-700 rounded-md">
              Cancel
            </button>
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-md">
              Add
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CalculateForm;

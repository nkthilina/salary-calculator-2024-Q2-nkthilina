import React from "react";

function EarningsModal({ isVisible, onClose }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" id="wrapper" onClick={handleClose}>
      <div className="bg-white p-4 rounded shadow-md w-96">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold mb-4">Add New Allowance</h3>
          <button className="text-lg mb-4" onClick={() => onClose()}>
            X
          </button>
        </div>
        <hr />
        <div className="my-4">
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="eg: Travel"
            value=""
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            placeholder="eg: 10,000"
            value=""
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            // checked=""
            className="mr-2 size-4"
          />
          <label className="text-sm font-medium text-gray-700">
            Include in EPF/ETF
          </label>
        </div>
        <div className="flex justify-end">
          <button className="mr-2 p-2  text-blue-700 rounded-md" onClick={() => onClose()}>Cancel</button>
          <button className="p-2 bg-blue-500 text-white rounded-md">Add</button>
        </div>
      </div>
    </div>
  );
}

export default EarningsModal;

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  return (
    <div
      className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div>
        {/* <div>
          <button onClick={() => onClose()} className="text-lg left-0">
            X
          </button>
        </div> */}
        {children}
      </div>
    </div>
  );
}

export default Modal;

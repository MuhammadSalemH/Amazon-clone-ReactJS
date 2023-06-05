import ReactDOM from "react-dom";

const Backdrop = ({ onClick, index }) => {
  return (
    <div
      className={`fixed inset-0 bg-black/60 cursor-pointer z-${index} duration-300`}
      onClick={onClick}
    />
  );
};

const Overlay = ({ onClick, index }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClick} index={index} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Overlay;

import "./spiner-style.css";

const Loading = ({ hasParent }) => {
  return (
    <>
      {hasParent ? (
        <div className="parent-loading">
          <div className="loader" />
        </div>
      ) : (
        <div className="loader" />
      )}
    </>
  );
};

export default Loading;

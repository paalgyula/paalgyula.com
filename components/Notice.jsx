export const Notice = ({ type, children }) => {
  switch (type) {
    case "warning":
      return (
        <div className="alert alert-warning" role="alert">
          <h4 className="alert-heading">Warning!</h4>
          <p className="mb-0">{children}</p>
        </div>
      );
    default:
      return (
        <div className="alert alert-info" role="alert">
          <h4 className="alert-heading">Notice!</h4>
          <p className="mb-0">{children}</p>
        </div>
      );
  }
};

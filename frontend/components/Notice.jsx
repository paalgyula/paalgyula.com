export const Notice = ({ type, children }) => {
  switch (type) {
    case "warning":
      return (
        <div className="notice alert alert-warning" role="warning">
          <i className="fa fa-exclamation-triangle" ariaHidden="true"></i>
          <p className="mb-0">{children}</p>
        </div>
      );
    default:
      return (
        <div className="notice alert alert-info" role="info">
          <i className="fa fa-info-circle" ariaHidden="true"></i>

          <span className="mb-0">{children}</span>
        </div>
      );
  }
};

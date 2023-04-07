import { FC, PropsWithChildren } from "react";

type Props = {
  type: string
}

export const Notice: FC<PropsWithChildren<Props>> = ({ type, children }) => {
  switch (type) {
    case "warning":
      return (
        <div className="notice alert alert-warning" role="warning">
          <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
          <p className="mb-0">{children}</p>
        </div>
      );
    default:
      return (
        <div className="notice alert alert-info" role="info">
          <i className="fa fa-info-circle" aria-hidden="true"></i>

          <span className="mb-0">{children}</span>
        </div>
      );
  }
};

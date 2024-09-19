import css from "./LoadMoreBtn.module.css";
import { LoadMoreBtnProps } from "../App/App.types";

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button className={css.button} onClick={onClick} disabled={disabled}>
      Load more
      {children}
    </button>
  );
};

export default LoadMoreBtn;

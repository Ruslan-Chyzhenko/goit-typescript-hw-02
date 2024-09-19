import css from "./Grid.module.css";

type GridProps = React.PropsWithChildren<{}>;

export const Grid: React.FC<GridProps> = ({ children }) => {
  return <ul className={css.list}>{children}</ul>;
};

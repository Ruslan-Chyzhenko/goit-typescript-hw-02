import css from "./GridItem.module.css";

interface GridItemProps {
  children?: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ children }) => {
  return <li className={css.item}>{children}</li>;
};

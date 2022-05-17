import React from "react";

type Function = (item: string) => void;

interface ListProps {
  items: string[];
  onHandleClick?: Function;
}

const List: React.FunctionComponent<ListProps> = ({ items, onHandleClick }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx} onClick={(): void | undefined => onHandleClick?.(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;

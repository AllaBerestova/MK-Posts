import * as SC from "./styles";

export const Sort = ({ onSort }) => {
  const onChangeSort = (e) => {
    const value = e.target.value;
    onSort(value);
  };

  return (
    <SC.SortSelect onChange={onChangeSort}>
      <option value="Без сортировки">Без сортировки</option>
      <option value="От А до Я">От А до Я</option>
      <option value="От Я до А">От Я до А</option>
    </SC.SortSelect>
  );
};

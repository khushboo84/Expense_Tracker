import Categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = (props: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => props.onSelectCategory(event.target.value)}
    >
      <option value={""}>All Categories</option>
      {Categories.map((categories) => (
        <option key={categories} value={categories}>
          {categories}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;

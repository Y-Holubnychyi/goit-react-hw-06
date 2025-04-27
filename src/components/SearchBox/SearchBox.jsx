import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter, setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const selectNameFilter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.searchWrapper}>
      <h3>Find contacts by name</h3>
      <input
        className={s.searchInput}
        value={selectNameFilter}
        type="text"
        onChange={(event) => {
          const changeFilter = setFilter(event.target.value);
          dispatch(changeFilter);
        }}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default SearchBox;

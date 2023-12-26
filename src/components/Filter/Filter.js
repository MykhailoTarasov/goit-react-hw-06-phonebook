import { getFilter } from "redux/selectors";
import { FilterContainer, FilterInput, FilterTitle } from "./FIlter.Styled";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from "redux/filterSlice";



const Filter = () => {
const dispatch = useDispatch();
const filter = useSelector(getFilter);

const onChangeFilter = evt => {
  dispatch(setFilter(evt.target.value))
}

  return (
    <FilterContainer>
    <FilterTitle>Find contact by name</FilterTitle>
    <FilterInput
      type="text"
      value={filter}
      placeholder="Find by name"
      onChange={evt => {
        onChangeFilter(evt.target.value);
      }}
    />
  </FilterContainer>
  )
}



export default Filter;
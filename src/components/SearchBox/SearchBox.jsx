import css from './SearchBox.module.css';
import { Formik, Form, Field } from 'formik';

import { useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleClear = () => {
    document.querySelector('input[name="username"]').value = '';
    dispatch(contactFilter(''));
  };
  const handleSubmit = e => {
    const filterAction = contactFilter(e.target.value);
    dispatch(filterAction);
  };

  return (
    <div className={css.container}>
      <label className={css.text} htmlFor="username">
        Find contact by name
      </label>
      <input
        className={css.input}
        type="text"
        name="username"
        onChange={handleSubmit}
      />

      <button type="button" className={css.clearButton} onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};
export default SearchBox;

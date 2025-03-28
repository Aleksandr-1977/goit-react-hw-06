import css from './SearchBox.module.css';
import { Formik, Form, Field } from 'formik';

import { useDispatch } from 'react-redux';
import { contactFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  // const handleClear = () => {
  //   contactFilter('');
  // };
  const handleSubmit = e => {
    const filterAction = contactFilter(e.target.value);
    dispatch(filterAction);
  };

  return (
    <>
      <Formik>
        <Form className={css.container}>
          <label className={css.text} htmlFor="username">
            Find contact by name
          </label>
          <Field
            className={css.input}
            type="text"
            name="username"
            onChange={handleSubmit}
          ></Field>

          {/* <button
            type="button"
            className={css.clearButton}
            onClick={handleClear}
          >
            Clear
          </button> */}
        </Form>
      </Formik>
    </>
  );
};
export default SearchBox;

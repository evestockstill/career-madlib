import React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.css';

const Form = ({ onSubmit, onChange, inputs, onReset }) => (
  <>
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.container}>
        <input value={inputs['0']} type="text" onChange={onChange} name="0" placeholder="adjective" />
        <input value={inputs['1']} type="text" onChange={onChange} name="1" placeholder="noun" />
        <input value={inputs['2']} type="text" onChange={onChange} name="2" placeholder="verb, past tense" />
        <input value={inputs['3']} type="text" onChange={onChange} name="3" placeholder="adverb" />
        <input value={inputs['4']} type="text" onChange={onChange} name="4" placeholder="adjective" />
        <input value={inputs['5']} type="text" onChange={onChange} name="5" placeholder="noun" />
        <input value={inputs['6']} type="text" onChange={onChange} name="6" placeholder="noun" />
        <input value={inputs['7']} type="text" onChange={onChange} name="7" placeholder="adjective" />
        <input value={inputs['8']} type="text" onChange={onChange} name="8" placeholder="verb" />
        <input value={inputs['9']} type="text" onChange={onChange} name="9" placeholder="adverb" />
        <input value={inputs['10']} type="text" onChange={onChange} name="10" placeholder="verb, past tense" />
        <input value={inputs['11']} type="text" onChange={onChange} name="11" placeholder="adjective" />
        <button className={styles.madlib}>Create Madlib</button>
      </div>
      <button className={styles.clear} onClick={onReset}>Clear</button>
    </form>
  </>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  inputs: PropTypes.object.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Form;

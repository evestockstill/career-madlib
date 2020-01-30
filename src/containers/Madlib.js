import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';
import styles from '../components/madlib/Form.css';
export default class Madlib extends Component{
  state = {
    showResult: false,
    words: [],
    inputs: {}
  };
  createWordArray = () => {
    this.setState(prevState => ({
      words: [
        prevState.inputs['0'],
        prevState.inputs['1'],
        prevState.inputs['2'],
        prevState.inputs['3'],
        prevState.inputs['4'],
        prevState.inputs['5'],
        prevState.inputs['6'],
        prevState.inputs['7'],
        prevState.inputs['8'],
        prevState.inputs['9'],
        prevState.inputs['10'],
        prevState.inputs['11']
      ]
    }));
  };

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));


  handleSubmit = event => {
    event.preventDefault();
    this.createWordArray();
    this.toggleResult();
  };
  handleChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [target.name]: target.value
      }
    }));
  };
  handleReset = () => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '10': '',
        '11': ''
        
      }
    }));
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        <div className={styles.form}>
          {!showResult && <Form onReset={this.handleReset} onChange={this.handleChange} onSubmit={this.handleSubmit} inputs={this.state.inputs} />}
          {showResult && <Result words={this.state.words} closeResult={this.toggleResult} />}
        </div>
      </>
    );
  }
}

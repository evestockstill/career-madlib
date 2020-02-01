import React from 'react';
import Madlib from '../containers/Madlib';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './madlib/App.css';


export default function App() {
  return (
    <>
      <section className={styles.container} />
      <Header />
      <Madlib />
      <Footer />
      <section/>
    </>
  );
}

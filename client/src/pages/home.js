import React, { useEffect } from 'react';
import Layout from '../components/Layout';

// Define the getData function or import it if it's defined elsewhere
const getData = () => {
  // Function implementation here
  console.log("Fetching data...");
};

const Home = () => {
  useEffect(() => {
    getData();
  }, []);

  return (
    <Layout>
      <h1>Homepage</h1>
    </Layout>
  );
};

export default Home;

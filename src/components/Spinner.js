import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading }) => {
  return (
    <div style={styles.spinnerContainer}>
      <ClipLoader color={"#3498db"} loading={loading} size={50} />
    </div>
  );
};

const styles = {
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

export default Spinner;

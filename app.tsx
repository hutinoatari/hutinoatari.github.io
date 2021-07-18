import React from "react";

const App = ({ Page, PageProps }) => {
  return (
    <>
      <Page {...PageProps} />
    </>
  );
};

export default App;

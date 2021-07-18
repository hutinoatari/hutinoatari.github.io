import React from "react";
import "./style/top.css"

const App = ({ Page, PageProps }) => {
  return (
    <>
      <Page {...PageProps} />
    </>
  );
};

export default App;

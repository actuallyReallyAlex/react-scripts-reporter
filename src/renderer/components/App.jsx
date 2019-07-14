import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  useEffect(() => {
    axios.get("http://localhost:5555/").then(report => {
      setReport(report);
    });
  }, []);

  const [report, setReport] = useState('');

  return JSON.stringify(report, null, 2);
};

export default App;

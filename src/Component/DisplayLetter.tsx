import React, { useState, useEffect } from "react";
import { DisplayComponentProps, API_BASE_URL } from "../datatype";

const DisplayLetter: React.FC<DisplayComponentProps> = ({
  checkboxNumber,
}) => {
  const [letters, setLetters] = useState<string>("");
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/${checkboxNumber}`);
      const data = await response.json();
      console.log(data, "data");
      const slicedLetters = data.letter.slice(-30);
      console.log(slicedLetters, "sliceleter");
      setLetters(slicedLetters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 2000);
    return () => clearInterval(interval);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkboxNumber]);

  return (
    <div className="display-component">
      <h2>Display Component No:- {checkboxNumber}</h2>
      <h2>Letter:-{letters}</h2>
    </div>
  );
};

export default DisplayLetter;

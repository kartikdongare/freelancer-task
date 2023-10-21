import React, { useState, useEffect } from "react";
import { DisplayComponentProps } from "../datatype";
import { fetchData } from "../api";
const DisplayLetter: React.FC<DisplayComponentProps> = ({ checkboxNumber }) => {
  const [letters, setLetters] = useState<string>("");
  const fetchAPI = async (checkboxNumber: number) => {
    const data = await fetchData(checkboxNumber);
    const slicedLetters = data.letter && data.letter.slice(-30);
    setLetters(slicedLetters);
  };
  useEffect(() => {
    fetchAPI(checkboxNumber);
    const interval = setInterval(() => {
      fetchAPI(checkboxNumber);
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

import "./App.css";
import { useEffect, useState } from "react";
import Inputfield from "./Input";
import axios from 'axios';
import { getLanguagesOptions, translateOptions } from './apiConfig';

function App() {
  let [languages, setLanguages] = useState([]);
  let [translatedText, setTranslatedText] = useState("");

  async function getLanguages() {
    try {
      const response = await axios.request(getLanguagesOptions);
      setLanguages([...response.data.data.languages])
    } catch (error) {
      console.error(error);
    }
  }

  async function userInputData(text, inputLang, targetLang) {
    const options2 = {
      ...translateOptions,
      data: {
        source_language: inputLang,
        target_language: targetLang,
        text: text,
      },
    };

    try {
      const response = await axios.request(options2);
      setTranslatedText(response.data.data.translatedText);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <div className="App">
      <Inputfield language={languages} userInputData={userInputData} translated={translatedText} />
    </div>
  );
}

export default App;

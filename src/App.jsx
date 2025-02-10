import { useEffect, useState } from "react"
import { Zodiac } from "./component/Zodiac"
import { getCurrentDate, getCurrentMonth, getCurrentYear, getFetchDateMin, getFetchMonthMin, getFetchYearMin, joinDate, listOfZodiacs } from "./utils";
import { SearchSVG } from "./SearchSVG"

function App() {
  const [ chosenZodiac, setChosenZodiac ] = useState(null);
  const [ chosenDate, setChosenDate ] = useState(null);
  
  const [ searchedZodiac, setSearchedZodiac ] = useState(null);
  const [ searchedDate, setSearchedDate ] = useState(null); 
  const [ article, setArticle ] = useState("Nothing has been searched yet.");

  const searchHoroscope = async (chosenZodiac, chosenDate) => {
    if (!chosenZodiac) {
      setArticle("Please choose a Zodiac to search, Naura.");
      return;
    }

    if (!chosenDate) {
      setArticle("Please choose a Date to search, Naura.")
      return;
    }
    

    try {
      setSearchedZodiac("Loading...")
      setArticle("Loading...")
      const response = await fetch(`https://my-cors-proxy.chronodeia.workers.dev/?sign=${chosenZodiac}&date=${chosenDate}`);
      const data = await response.json();
      setSearchedZodiac(chosenZodiac);
      setSearchedDate(data.data.date);
      setArticle(data.data.horoscope_data);
    }
    catch (error) {
      console.error("Error: " + error);
    }
  }

  return (
    <div id="main-container">
      <h1>Horoscope for Naura</h1>
      
      <div id="zodiac">
        <span className="label">Naura's Zodiac</span>
        <div id="zodiac-container">
          {
            listOfZodiacs.map((zodiac, index) => {
              return (
                <Zodiac
                  key={index + zodiac}
                  type={zodiac}
                  chosenZodiac={chosenZodiac}
                  setChosenZodiac={setChosenZodiac}
                />
              )
            })
          }
        </div>
      </div>

      <div id="date">
        <span className="label">Which date's to check, Naura?</span>
        <input
          type="date"
          min={
            joinDate(
              getFetchYearMin(),
              getFetchMonthMin(),
              getFetchDateMin()
            )
          }
          max={
            joinDate(
              getCurrentYear(),
              getCurrentMonth(),
              getCurrentDate()
            )
          }
          onChange={(e) => setChosenDate(e.target.value)}
        />
        <button
          onClick={() => searchHoroscope(chosenZodiac, chosenDate)}
        >
          <SearchSVG />
        </button>
      </div>

      <div id="content">
        <div className="top">
          <span className="label">
            {
              searchedZodiac !== null ?
                "Naura's horoscope for"
              : "Search Result"
            }
          </span>
          <span className="content-date">
            {
              searchedZodiac !== null ?
                searchedDate !== null ?
                  searchedDate
                : "..."
              : null
            }
          </span>
        </div>
        <div className="bottom overflow-y-support">
          <span>{searchedZodiac}</span>
          <article>
            {article}
          </article>
        </div>
      </div>
    </div>
  )
}

export default App

import { useEffect, useState } from "react"
import { Zodiac } from "./component/Zodiac"
import { getCurrentDate, getCurrentMonth, getCurrentYear, getFetchDateMin, getFetchMonthMin, getFetchYearMin, joinDate, listOfZodiacs } from "./utils";
import { SearchSVG } from "./SearchSVG"

function App() {
  const [ chosenZodiac, setChosenZodiac ] = useState(null);
  const [ chosenDate, setChosenDate ] = useState(null);
  const [ article, setArticle ] = useState("Nothing has been searched yet.");
  
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
        <button>
          <SearchSVG />
        </button>
      </div>

      <div id="content">
        <div className="top">
          <span className="label">
            Naura's Horoscope for
          </span>
          <span className="content-date">
            Feb 10, 2025
          </span>
        </div>
        <article>
          {article}
        </article>
      </div>
    </div>
  )
}

export default App

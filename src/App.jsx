import { useState } from "react"
import { Zodiac } from "./component/Zodiac"
import { getUTCDate, getUTCMonth, getUTCYear, joinDate, listOfZodiacs, translateTime } from "./utils";
import { CloseSVG } from "./component/CloseSVG"
import { SearchSVG } from "./component/SearchSVG"
import { ZodiacCard } from "./component/ZodiacCard";

function App() {
  const [ chosenZodiac, setChosenZodiac ] = useState(null);
  const [ chosenDate, setChosenDate ] = useState(null);
  
  const [ searchedZodiac, setSearchedZodiac ] = useState(null);
  const [ searchedDate, setSearchedDate ] = useState(null); 
  const [ article, setArticle ] = useState("Nothing has been searched yet.");

  const [isModalVisible, setIsModalVisible] = useState(false);

  const searchHoroscope = async (chosenZodiac, chosenDate) => {
    if (!chosenZodiac) {
      setArticle("Please choose a Zodiac to search.");
      return;
    }

    if (!chosenDate) {
      setArticle("Please choose a Date to search.")
      return;
    }

    try {
      setSearchedZodiac("Loading...")
      setArticle("Loading...")

      const response = await fetch(`https://my-cors-proxy.chronodeia.workers.dev/?sign=${chosenZodiac}&date=${chosenDate}`);

      const data = await response.json();

      console.log(translateTime(chosenDate) === data.data.date)

      if (translateTime(chosenDate) === data.data.date) {
        setSearchedZodiac(chosenZodiac);
        setSearchedDate(data.data.date);
        setArticle(data.data.horoscope_data);  
      }
      else {
        setSearchedZodiac(chosenZodiac);
        setSearchedDate(translateTime(chosenDate));
        setArticle("Data for this date is not found.");
      }
    }
    catch (error) {
      console.error("Error: " + error);
    }
  }

  return (
    <div id="main-container">
      <h1>Horoscope for Muzzy</h1>
      
      <div id="zodiac">
        <div id="zodiac-top">
          <span className="label">Zodiac Sign</span>
          <button
            onClick={() => setIsModalVisible(true)}
          >
            What's my zodiac sign?
          </button>
        </div>
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
        <span className="label">Which date's to check?</span>
        <input
          type="date"
          min={
            joinDate(
              getUTCYear() - 1,
              getUTCMonth(),
              getUTCDate()
            )
          }
          max={
            joinDate(
              getUTCYear(),
              getUTCMonth(),
              getUTCDate()
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
                searchedDate !== null ?
                  "Muzzy's horoscope for"
                : "Muzzy's horoscope for..."
              : "Search Result"
            }
          </span>
          <span className="content-date">
            {
              searchedDate
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
      
      {
        isModalVisible &&
        <div
        id="zodiac-modal"
        onClick={() => setIsModalVisible(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
          >
            <div className="top">
              <h1>Zodiac Sign List</h1>
              <button
                id="close-modal-button"
                onClick={() => setIsModalVisible(false)}
              >
                <CloseSVG />
              </button>
            </div>
            <div id="zodiac-cards">
              {
                listOfZodiacs.map((zodiac, index) => {
                  return (
                    <ZodiacCard
                      key={index + zodiac}
                      type={zodiac}
                    />
                  )
                })
              }
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default App


export function Zodiac({ type, chosenZodiac, setChosenZodiac }) {

  return (
    <button 
      className={
        type === chosenZodiac ? 
          "zodiac-button chosen no-effect"
        : "zodiac-button"
      }
      onClick={() => setChosenZodiac(type)}
    >
      {type}
    </button>
  )
}
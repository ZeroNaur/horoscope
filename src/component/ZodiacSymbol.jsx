import { AquariusSVG } from "../zodiac-svg/AquariusSVG";
import { AriesSVG } from "../zodiac-svg/AriesSVG";
import { CancerSVG } from "../zodiac-svg/CancerSVG";
import { CapricornSVG } from "../zodiac-svg/CapricornSVG";
import { GeminiSVG } from "../zodiac-svg/GeminiSVG";
import { LeoSVG } from "../zodiac-svg/LeoSVG";
import { LibraSVG } from "../zodiac-svg/LibraSVG";
import { PiscesSVG } from "../zodiac-svg/PiscesSVG";
import { SagittariusSVG } from "../zodiac-svg/SagittariusSVG";
import { ScorpioSVG } from "../zodiac-svg/ScorpioSVG";
import { TaurusSVG } from "../zodiac-svg/TaurusSVG";
import { VirgoSVG } from "../zodiac-svg/VirgoSVG";

export function ZodiacSymbol({ type }) {
  switch (type) {
    case "aquarius":
      return <AquariusSVG />
    case "aries":
      return <AriesSVG />
    case "cancer":
      return <CancerSVG />
    case "capricorn":
      return <CapricornSVG />
    case "gemini":
      return <GeminiSVG />
    case "leo":
      return <LeoSVG />
    case "libra":
      return <LibraSVG />
    case "pisces":
      return <PiscesSVG />
    case "sagittarius":
      return <SagittariusSVG />
    case "scorpio":
      return <ScorpioSVG />
    case "taurus":
      return <TaurusSVG />
    case "virgo":
      return <VirgoSVG />    
    default:
      return "error"            
  }
}
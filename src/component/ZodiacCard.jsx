import { getZodiacTimeRange } from "../utils";
import { ZodiacSymbol } from "./ZodiacSymbol";

export function ZodiacCard({ type }) {
  return (
    <div className="zodiac-card">
      <ZodiacSymbol type={type.toLowerCase()} />
      <span className="label">{type}</span>
      <span>{getZodiacTimeRange(type.toLowerCase())}</span>
    </div>
  )
}
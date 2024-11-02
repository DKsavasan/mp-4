// interfaces/weather.ts
export interface Weather {
  datetime: string; // Date of the forecast
  conditions: string; // General weather conditions (e.g., "Partially cloudy")
  description: string; // Detailed description of the weather (e.g., "Partly cloudy throughout the day")
  tempmin: number; // Minimum temperature for the day
  tempmax: number; // Maximum temperature for the day
}
 
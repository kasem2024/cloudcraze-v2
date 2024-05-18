import { HoverEffect } from "../components/ui/card-hover"

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={website} />
    </div>
  );
}
const website = [
  {
    title: "Weather.com",
    description: "Weather.com provides accurate weather forecasts, radar maps, and severe weather alerts.",
    link: "https://weather.com"
  },
  {
    title: "AccuWeather",
    description: "AccuWeather offers minute-by-minute forecasts, radar maps, and severe weather alerts. ",
    link: "https://www.accuweather.com"
  },
  {
    title: "The Weather Channel",
    description: "The Weather Channel provides comprehensive weather forecasts, interactive radar maps, and weather news updates. ",
    link: "https://weather.com"
  },
  {
    title: "Dark Sky",
    description: "Dark Sky offers hyperlocal weather forecasts with minute-by-minute precision. It provides accurate weather predictions based on your exact location and offers notifications for upcoming weather changes.",
    link: "https://darksky.net"
  },
  {
    title: "BBC Weather",
    description: "BBC Weather provides up-to-date weather forecasts and news from the BBC. It offers detailed weather information for locations worldwide and provides weather-related articles and videos.",
    link: "https://www.bbc.co.uk/weather"
  },
  {
    title: "MeteoGroup",
    description: "MeteoGroup offers weather forecasting services for businesses and individuals. It provides accurate weather data for various industries, including aviation, energy, and media.",
    link: "https://www.meteogroup.com"
  }
];

// Example usage:




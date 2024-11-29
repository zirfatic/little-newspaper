import "../App.css";
export default function Widget() {
  return (
    <iframe
      src="https://api.wo-cloud.com/content/widget/?geoObjectKey=10591710&language=pt&region=BR&timeFormat=HH:mm&windUnit=kmh&systemOfMeasurement=metric&temperatureUnit=celsius"
      name="CW2"
      height="318"
      className="weather-widget w-full"
    />
  );
}

import { useState, useEffect } from "react";
import Nav from "../components/Nav";

const API_KEY = import.meta.env.VITE_API_KEY;

const Wiesbaden = () => {
  const city = "Wiesbaden";

  const [data, setData] = useState({});
  const [data2, setData2] = useState({});

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=de&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=de&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData2(data);
      })
      .catch((error) => console.log("Fehler: ", error));
  }, []);

  return (
    <>
      <Nav />
      <section>
        {data.main && data.wind ? (
          <>
            <div>
              <img
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                alt="weather-icon"
              />
              <h2>{data.weather[0].description}</h2>
              <h3>in {data.name}</h3>
            </div>
            <div>
              <h2>{data.main.temp.toFixed(1).replace(".", ", ")} °</h2>
              <h3>Temperatur</h3>
            </div>
            <div>
              <h2>
                {(data.wind.speed * 3.6).toFixed(1).replace(".", ", ")} km/h
              </h2>
              <h3>Windgeschwindigkeit</h3>
            </div>
          </>
        ) : (
          ""
        )}
        {data2.list ? (
          <article>
            {data2.list.map((elm, index) => (
              <div className="forecast-weather" key={index}>
                <h3>{elm.dt_txt}</h3>
                <img
                  src={`https://openweathermap.org/img/wn/${elm.weather[0].icon}@2x.png`}
                  alt="weather.icon"
                />
                <h2>{elm.main.temp.toFixed(1).replace(".", ", ")} °</h2>
                <h3>{elm.weather[0].description}</h3>
              </div>
            ))}
          </article>
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default Wiesbaden;

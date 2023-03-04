
import { useState } from "react";
import Loading from "../shared/loading";
import Form from "./form";
import City from "./city";
import { IWeather } from "../models/weather";

const Weather: React.FC = () => {

    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState<any>({ message: "", cod: '' });

    const getWeather = async (city: string) => {
        let weatherData: IWeather = {};
        setLoading(true);
        // Fetch data from external API
        const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_APP_WeatherApikey}`)
        const data = await res.json();
        if (data?.weather && data?.weather.length > 0 && data?.weather[0].icon) {
            const urlIcon = (await fetch(` http://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`))?.url;
            weatherData.icon = { url: urlIcon };
        };
        console.log(data);
        setLoading(false);
        weatherData.cod = data?.cod;
        weatherData.message = data?.message || '';
        if (String(data?.cod) === "200") {
            weatherData.name = data?.name;
            weatherData.country = data?.sys?.country;
            weatherData.main = data?.weather[0].main;
            weatherData.temp = data?.main?.temp;
            weatherData.description = data?.weather[0]?.description;
        }
        console.log({weatherData});
        setCity(weatherData);

    }

    return (
        <div className="">
            <div><h2 className="m-3">Weather</h2> </div>
            <Form getWeather={getWeather} />
            {
                loading ? <Loading justSpinner={true} /> :
                    <div className="flex items-center ">
                        {city?.cod === "404" || city?.cod === "" ? <div className="mx-3">{city?.message}</div> : null}
                        {String(city?.cod) === "200" && <City city={city} />}
                    </div>
            }
        </div>
    )
}

export default Weather;
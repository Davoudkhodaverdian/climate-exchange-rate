import { IWeather } from "../../models/weather";

interface Props {
    city: IWeather
}


const City: React.FC<Props> = ({city}) => {

    return (
        <>
            <div className="mx-3">
                <div>{city?.name}</div>
            </div>
            <div className="mx-3">
                {city?.country && <div>country: {city?.country}</div>}
            </div>
            <div className="mx-3">
                <div>{city?.main}</div>
            </div>
            <div className="mx-3">
                <div>{Math.round(Number(city.temp))} °F</div>
            </div>
            <div className="mx-3">
                <div>description: {city?.description}</div>
            </div>
            <div className="mx-3">
                {city?.icon && <img src={city?.icon?.url} alt="" />}
            </div>

        </>
    )
}

export default City;
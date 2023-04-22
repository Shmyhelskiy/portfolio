import Head from "next/head";
import { ChangeEventHandler, useState } from "react";

type WeatherData = {
    location: {
        name: string;
        country: string;
        localtime: string;
    };
    current: {
        last_updated: string;
        temp_c: number;
        wind_kph: number;
        condition: {
            icon: string;
            text: string
        }
    };
}

const Weather = () => {
    const [city, setCity] = useState("");
    const [value, setValue] = useState("");
    const [weather, setWeather] = useState<WeatherData>();
    const [isFound, setIsFound] = useState("")

    const getCity: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    };

    const takeWeather = async () => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=370973a3895d4c28861194155232204&q=${value}&aqi=no`);
            const data = await response.json();
                if ( `error` in data ){
                    return setIsFound('No matching location found.')
                }
            setCity(value)
            setIsFound("")
            setWeather(data)  
            setValue("");
            return
        }
        catch (e) {
            console.log(e)
        }
    }
    
    return (
        <>
        <Head>
            <title>Weather App</title>
        </Head>
        <main className="flex justify-center w-full flex-col">
            <header className="m-5 flex flex-col items-center">
                <div className="text-white flex justify-center items-center bg-sky-500 min-w-[250px] text-base md:text-xl lg:text-4xl rounded-md dark:bg-sky-800">
                    <h2>Find out the weather</h2>
                </div>
                <div className="flex justify-center pt-5">
                    <input
                    className="text-sm md:text-lg mr-5 outline-0 focus:border-b focus:border-b-orange-300 dark:bg-sky-800 rounded-md"
                    placeholder="Write city"
                    type="text"
                    onChange={getCity}
                    value={value}
                    />
                    <button className="rounded-2xl p-1 text-sm md:text-lg hover:bg-sky-500" onClick={takeWeather}>
                    Search
                    </button>
                </div>
            </header>
            <div>
                {!isFound ? 
                `` : 
                <div className="flex w-full justify-center font-bold text-sm md:text-base lg:text-2xl">
                    <p>No matching location found.</p>
                </div>
                }
                {!weather ?
                `` : 
                <div className="flex flex-col w-full items-center ">
                    <header className="flex justify-center w-full items-center text-sm md:text-base lg:text-2xl mb-5">
                        <p className="font-bold">{`Weather in ${city}`}</p>
                        <img
                            className="w-[50px] md:w-[70px]"
                            src={`${weather.current.condition.icon}`}
                            height={150}
                            width={150}
                            alt={`${weather.current.condition.text}`}
                        />
                        <p>{`${weather.current.condition.text}`}</p>
                    </header>
                <div className="flex flex-col sm:flex-row font-mono">
                    <section className="border-2 border-sky-500 mr-5 text-xs sm:text-base rounded-lg mb-2 w-full sm:min-h-[110px] sm:mb-0">
                        <p className="p-1">{`City: ${weather.location.name}`}</p>
                        <p className="p-1">{`Country: ${weather.location.country}`}</p>
                        <p className="p-1">{`Time of last update: ${weather.current.last_updated}`}</p>
                    </section>
                    <section className=" border-2 border-sky-500 text-xs sm:text-base rounded-lg w-full sm:min-h-[110px]    ">
                        <p className="p-1">{`Local Date and time: ${weather.location.localtime}`}</p>
                        <p className="p-1">{`Temperature in C: ${weather.current.temp_c}`}</p>
                        <p className="p-1">{`Wind speed in kph: ${weather.current.wind_kph}`}</p>
                    </section>
                </div>
                </div>
                    }
            </div>
            
        </main>
        </>
    );
};

export default Weather;
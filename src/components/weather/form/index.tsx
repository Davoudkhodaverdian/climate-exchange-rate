import React from "react";

interface Props {
    getWeather: (city : string) => void
}


const Form: React.FC<Props> = ({ getWeather }) => {

    
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(event.target.value);
        getWeather(event.target.value);
    }

    return (
        <form>
            <div className="flex">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search your city</label>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="appearance-none block w-full bg-gray-200  border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Search your city ..." onChange={handleChange}
                    />
                </div>
            </div>
        </form>
    )
}

export default Form;
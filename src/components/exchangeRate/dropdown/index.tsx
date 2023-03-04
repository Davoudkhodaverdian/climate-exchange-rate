import React from "react";
import { Symbol } from "../../models/symbol";

interface Props {
    setRate: React.Dispatch<React.SetStateAction<string>>
    symbols: Symbol[]
}

const Dropdown: React.FC<Props> = ({ setRate, symbols }) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRate(event.target.value);
    }

    return (
        <div className="relative inline-block text-left">
            <select name="pets" id="pet-select" className="appearance-none block w-full bg-gray-200  border focus:border-blue-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                onChange={handleChange}>
                <option value=''>select a country for rate ...</option>
                {symbols?.map((item: Symbol) => (<option key={item.code} value={item.code}>{item.description}</option>))}
            </select>
        </div>
    )
}

export default Dropdown;
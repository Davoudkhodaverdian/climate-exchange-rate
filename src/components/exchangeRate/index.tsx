import { useEffect, useRef, useState } from "react";
import Dropdown from "./dropdown";
import Exchange from "./exchange";
import { Symbol } from "../models/symbol";

interface Props {
    symbols: Symbol[]
}


const ExchangeRate: React.FC<Props> = ({ symbols }) => {

    const [rate, setRate] = useState('');


    return (
        <div>
            <div><h2 className="m-3">Exchange Rate</h2> </div>
            <div>
                <Dropdown setRate={setRate} symbols={symbols} />
                <Exchange rate={rate} symbols={symbols} />
            </div>
        </div>
    )
}

export default ExchangeRate;
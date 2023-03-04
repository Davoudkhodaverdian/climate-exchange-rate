import { useEffect, useState } from "react";
import { Symbol } from "../../models/symbol";
import Loading from "../../shared/loading";
import { Exchange } from "../../models/exchange";
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
interface Props {
    rate: string,
    symbols: Symbol[]
}

const Exchange: React.FC<Props> = ({ rate, symbols }) => {

    const [loading, setLoading] = useState(false);
    const [exchange, setExchange] = useState<Exchange[]>([]);
    // console.log(exchange)
    const getExchangeRate = async () => {
        if (rate) {
            setLoading(true);
            // Fetch data from external API
            var requestOptions: RequestInit | undefined = {
                method: 'GET',
            };
            const response = await fetch(`https://api.exchangerate.host/latest?base=${rate}`, requestOptions);
            const data = await response.json();
            console.log(data);
            setExchange(Object.keys(data.rates).map(item => ({
                name: symbols.find((i: Symbol) => i.code === item)?.description, rate: data.rates[item]
            })) as Exchange[]);
            setLoading(false);
        }
    };
    // Each Column Definition results in one Column.
    const columnDefs = ([
        { field: 'name', filter: true },
        { field: 'rate', filter: true },
    ]);

    useEffect(() => {
        getExchangeRate();
    }, [rate])

    if (loading) return <Loading justSpinner={true} />
    return (
        <div>
            {
                exchange.length > 0 &&
                <div className="ag-theme-alpine w-full h-[400px]">
                    <AgGridReact
                        rowData={exchange} // Row Data for Rows
                        columnDefs={columnDefs} // Column Defs for Columns
                        animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                        rowSelection='multiple' // Options - allows click selection of rows
                    />
                </div>
            }
        </div>
    )
}

export default Exchange;
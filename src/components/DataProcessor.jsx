import * as XLSX from "xlsx";
import { read, writeFileXLSX } from "xlsx";

const DataProcessor = (props) => {
    const processFile = () => {
        const workbook = XLSX.read(props.selectedFile);
        console.log('read');
    }

    return(
        <>
            <button onClick={() => {processFile()}}>Process Data</button>
        </>
    );
}

export default DataProcessor;
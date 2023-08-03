import React, { useRef, useState } from 'react';
import * as XLSX from "xlsx";
import { read, writeFileXLSX } from "xlsx";
import DataProcessor from './DataProcessor';

const FileSpecInput = () => {
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState(null);

    const [specLimit, setSpecLimit] = useState('');
    const [steps, setSteps] = useState('');

    // const readFile = (e) => {
    //     const reader = new FileReader();
    //     if(e.target.files[0]){
    //         reader.readAsDataURL(e.target.files[0]);
    //     }
    //     reader.onload = (readerEvent) => {
    //         setSelectedFile(readerEvent.target.result.arrayBuffer());
    //     };
    //     setFileName(e.target.files[0].name);
    // }
    const handleFileInput = async (e) => {
        const file = e.target.files[0];
        const data = await file.arrayBuffer();
        const workbook = XLSX.read(data);

        console.log(workbook);
    }

    const handleInputChange = (input) => {
        if(input.target.name == "specLimit"){
            setSpecLimit(input.target.value);
        } else if(input.target.name == 'steps') {
            setSteps(input.target.value);
        }
    }

    return(
        <>
            {/* <button onClick={() => filePickerRef.current.click()}>
                Choose File: (.xls, .xlsx)
            </button>
            <input type="file" ref={filePickerRef} onChange={readFile} hidden/> */}
            <input type="file" onChange={(e)=>{ handleFileInput(e) }}/>
            {/* { fileName ? (
                <div>{fileName}</div>
                ) : (
                <div> -- File Name -- </div>
            )} */}

            <label htmlFor="specLimit">Specification Limit:</label>
            <input id='specLimit' name='specLimit' type='number' onChange={handleInputChange}/>
            <label htmlFor="steps">Steps:</label>
            <input id='steps' name='steps' type='number' onChange={handleInputChange}/>
            
            <DataProcessor file={selectedFile} specLimit={specLimit} steps={steps}/>
        </>
    );
}

export default FileSpecInput;
import cleanupData from "./helpers/data/cleanupData";
import deviationScore from "./helpers/data/deviationScore";
import calSampleSize from "./helpers/data/calSampleSize";

import calAvg from "./helpers/calculation/calAvg";
import calAvg4S from "./helpers/calculation/calAvg4S";
import calCPK from "./helpers/calculation/calCPK";
import calMax from "./helpers/calculation/calMax";
import calSTDEV from "./helpers/calculation/calSTDEV";

const DataProcessor = (props) => {
    const processFile = () => {
        const data = cleanupData(props.file, props.steps);
        const cleanXdev = data[0];
        const cleanYdev = data[1];
        const cleanDia = data[2];
        
        // 1. Calculate sample size for each array (result#1)
        const XdevSampleSize = calSampleSize(cleanXdev);
        const YdevSampleSize = calSampleSize(cleanYdev);
        const DiaSampleSize = calSampleSize(cleanDia);

        // 2. Deviation Score
        const DS = deviationScore(cleanXdev, cleanYdev, cleanDia);
        const XDS = DS[0];
        const YDS = DS[1];
        const RDS = DS[2];

        // 3. calMax: Max of XDS, YDS, RDS (result#2)
        const XDS_Max = calMax(XDS);
        const YDS_Max = calMax(YDS);
        const RDS_Max = calMax(RDS);

        // 4. calAvg: Avg of XDS, YDS, RDS (result#3)
        const XDS_Avg = calAvg(XDS);
        const YDS_Avg = calAvg(YDS);
        const RDS_Avg = calAvg(RDS);

        // 5. calSTDEV: XDS, YDS, RDS (result#4)
        const XDS_STDEV = calSTDEV(XDS, XDS_Avg);
        const YDS_STDEV = calSTDEV(YDS, YDS_Avg);
        const RDS_STDEV = calSTDEV(RDS, RDS_Avg);

        // 6. calAvg4S: XDS, YDS, RDS (result#5)
        const XDS_Avg4S = calAvg4S(XDS_Avg, XDS_STDEV);
        const YDS_Avg4S = calAvg4S(YDS_Avg, YDS_STDEV);
        const RDS_Avg4S = calAvg4S(RDS_Avg, RDS_STDEV);

        // 7. calCPK: XDS, YDS, RDS (result#6)
        let spec = Number(props.specLimit);
        const XDS_CPK = calCPK(spec, XDS_Avg, XDS_STDEV);
        const YDS_CPK = calCPK(spec, YDS_Avg, YDS_STDEV);
        const RDS_CPK = calCPK(spec, RDS_Avg, RDS_STDEV);
    }

    const downloadExcelFile = () => {
        console.log('download');
    }

    return(
        <>
            <button onClick={() => {processFile()}}>Process Data</button>
        </>
    );
}

export default DataProcessor;
# Impex Data Processor

[Live Demo](https://lemuellin.github.io/tct-ha/) :point_left:

1. Technologies: SheetJS, Vite, ReactJS
https://docs.sheetjs.com/docs/getting-started/examples/export

2. The program is very straightforward.

    1. Import the Impex Excel file.

    2. Set the Specification Limit

    3. Set the Steps (divide the Impex data into every N-hole pattern)

    4. Click “Process Data”, and the data will be exported to your download folder.

 

3. This is what it does in the back:

    1. Read Impex Excel data sheet

    2. Clean up the data by

        - collecting the data we need (x-deviation, y-deviation, hole diameter)

        - transpose the data matrix

        - split the data into chunks, based on how many steps we specify (every N-hole pattern)

        - remove empty elements (holes that are not drilled through, or accuracy data not recorded)

    3. Calculate outputs:

        - Sample Size (how many holes are measured successfully in 100 hole pattern)

        - Deviation Score

        - Average Deviation

        - Standard Deviation

        - Avg + 4 Standard Deviation

        - CPK

    4. Export Excel file
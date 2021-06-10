// import the data from data.js
const tableData = data;

//Reference the HTML table using d3
var tbody = d3.select("tbody");

// Simple Javascript console.log statement 
function buildTable(data) {
    //Clear existing data
    tbody.html("");

// Next, loop through each object in the data
// and append a row and cells for each value in a row
    data.forEach((dataRow) => {
    // Append a row to the table body
        let row = tbody.append("tr"); 
    
    // Loop through each field in the dataRow and add
    // each value as table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
    }
    );
});
}

//Adding filters
function handleClick() {
    // Grab datetime value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // Check to see if a date was entered and filter the 
    //date using that date
    if (date) {
        // Apply filter to the table data to only keep the 
        // rows where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    //@Note if no date was entered then filteredData will
    //be original tableData
    buildTable(filteredData);
}

d3.selectAll('#filter-btn').on("click", handleClick);

    //Build the table when the page loads
buildTable(tableData);
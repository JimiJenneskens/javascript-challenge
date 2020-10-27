// from data.js
var tableData = data;

// YOUR CODE HERE!


const tbody = d3.select('tbody');

// Create build Table function
function buildTable(data){ 

    tbody.html("");

    data.forEach((item) => {
        var newRow= tbody.append('tr');
        Object.values(item).forEach((val) => {     
            newRow.append('td').text(val)
        });
    });
};

// Create function to Filter date
function handleClick() {
    
    // Get the date from the filter
    const date = d3.select("#datetime").property("value");

    // Create new variable of the original data
    var filteredData = tableData; 

    if (date) {
        // Create new table with filtered data
        var filteredData = filteredData.filter(info => info.datetime === date);
    };

    buildTable(filteredData)

};


d3.selectAll("#filter-btn").on('click', handleClick);


buildTable(tableData);

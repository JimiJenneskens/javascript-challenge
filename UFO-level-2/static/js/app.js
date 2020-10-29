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
    
    // Get the values from the filter
    const date = d3.select("#datetime").property("value");
    const city = d3.select("#city").property("value");
    const state = d3.select("#state").property("value");
    const country = d3.select("#country").property("value");
    const shape = d3.select("#shape").property("value");

    // Create new variable of the original data
    var filterData = tableData; 

    if (date) {
        // Create new table with filtered data
        var filterData = filterData.filter(info => info.datetime === date);
    };

    if (city) {
        var lcCity= city.toLowerCase();
        // Create new table with filtered data
        var filterData = filterData.filter(info => info.city === lcCity);
    };
    
    if (state) {
        var lcState= state.toLowerCase();
        // Create new table with filtered data
        var filterData = filterData.filter(info => info.state === lcState);
    };

    if (country) {
        var lcCountry= country.toLowerCase();
        // Create new table with filtered data
        var filterData = filterData.filter(info => info.country === lcCountry);
    };
    
    if (shape) {
        var lcShape= shape.toLowerCase();
        // Create new table with filtered data
        var filterData = filterData.filter(info => info.shape === lcShape);
    };

    buildTable(filterData)

};


d3.selectAll("#filter-btn").on('click', handleClick);


buildTable(tableData);

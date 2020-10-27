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

buildTable(tableData);

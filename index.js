// Dept and budget in bill of dollars
var data00 = [
    ["Dept. of Agriculture", 92.1],
    ["Dept. of Commerce", 9.56],
    ["Dept. of Defense - Military Programs", 345],
    ["Dept. of Education", 41.1],
    ["Dept. of Energy", 18.4 ],
    ["Dept. of Health and Human Services", 469],
    ["Dept. of Homeland Security ", 16.2 ],
    ["Dept. of Housing and Urban Development",  37.8 ],
    ["Dept. of the Interior", 9.82 ],
    ["Dept. of Justice", 20.7 ],
    ["Dept. of Labor", 39.1 ],
    ["Dept. of State", 8.21 ],
    ["Dept. of Transportation", 51 ],
    ["Dept. of the Treasury", 479 ],
    ["Dept. of Veterans Affairs", 57.7 ],
    ["Environmental Protection Agency", 8.87 ],
    ["General Services Administration", .908],
    ["International Assistance Programs", 14.8 ],
    ["NASA", 16.5 ],
    ["Social Security Administration", 542 ],
    ["+Other Departments and Agencies", 131],
];
var data17 = [
    ["Dept. of Agriculture", 133],
    ["Dept. of Commerce", 9.28],
    ["Dept. of Defense - Military Programs", 516],
    ["Dept. of Education", 60.2],
    ["Dept. of Energy", 26.7],
    ["Dept. of Health and Human Services",  1010],
    ["Dept. of Homeland Security ", 42],
    ["Dept. of Housing and Urban Development",  35.8],
    ["Dept. of the Interior", 13.2],
    ["Dept. of Justice", 31],
    ["Dept. of Labor", 44.8],
    ["Dept. of State", 25.4],
    ["Dept. of Transportation", 75.5],
    ["Dept. of the Treasury", 544],
    ["Dept. of Veterans Affairs", 159],
    ["Environmental Protection Agency", 7.65],
    ["General Services Administration", 1.13],
    ["International Assistance Programs", 23.3],
    ["NASA", 16.9],
    ["Social Security Administration", 908],
    ["+Other Departments and Agencies", 12.1],
];

var year = 2000;

var chart = d3.select(".chart");
var button = document.getElementById("button");
var title = document.getElementById("title");

var change = function(data) {
    var barEnter = chart.selectAll("div").data(data).enter().append("div");
    barEnter.transition().duration( function(d, i) {
            return 10000 - (d[1] * 10) + i * 500;
        }).style("width", function(d) {
            return d[1] * 2 + "px";
        });
    barEnter.text(function(d) { return d[0]; });
}

var setup = function() {
    change(data00);
}

var buttonChange = function(e) {
    chart.selectAll("*").remove();
    if (year == 2000) {
        change(data17);
        button.innerHTML = "2000 Data";
        title.innerHTML = "2017 Data Agency Info";
        year = 2017;
    } else {
        change(data00);
        button.innerHTML = "2017 Data";
        title.innerHTML = "2000 Data Agency Info";
        year = 2000;
    }
}

setup();
button.addEventListener("click", buttonChange);

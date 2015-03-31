var margin = {top: 20, right: 40, bottom: 30, left: 40},



    width = 1280 - margin.left - margin.right,

    height = 700 - margin.top - margin.bottom;

/*

width = 1420 - margin.left - margin.right,

    height = 750 - margin.top - margin.bottom;
*/	

var seriesX = "factionunits",

    seriesY = "attack",

    seriesX_2 = "land_unit",

    seriesY_2 = "is_naval",

    legendSide = "unitclass",

    toolTipText = "unit",

    unitStats = "vers/2f.csv",

    inf_mel = "circle",

    cav_mel = "circle",

    cav_shk = "circle",

    unitType = "all",

    shapeOn = "diamond",

    shapeOff = "circle",

    opacity = 1.0,

    factions = [""],

    faction_before = ""
    ;


/*
var factions = ["", "Carthage", "Egypt", "Parthia", "Seleucid", "Rome", "Baktria", "Iceni", "Boii", "Averni", "Galatia", "Nervii",
    "Tylis", "Getae", "Odryssia", "Pontus", "Suebi", "Epirus", "Macedon", "Athens", "Syracuse", "Ardiaei", "Sparta", "Arevaci", "Lusitani",
    "Massagetae", "Roxolanie", "Scythia" , "Armenia", "Cimmeria", "Colchis", "Massilia", "Pergamon"];*/


var factions_2 = ["","Alamans", "Alans","Burgundians" , "Danes" ,"ERE", "Franks", "Geats", "Huns", "Jutes","Langobards" , "Ostrogoths", "Sassanid`s", "Saxons", "Vandals", "Visigoths", "WRE"];


var factions_3 = ["","Alamans", "Alans","Burgundians" , "Danes" ,"ERE", "Ebdanians", "Franks", "Geats", "Huns", "Jutes","Lango`s" , "Ostro`s", "Picts", "Sassanid`s", "Saxons", "Vandals", "Visigoths", "Votadini", "WRE"];

factions = factions_3;



var svg = d3.select("body").append("svg")

    .attr("width", width + margin.left + margin.right)

    .attr("height", height + margin.top + margin.bottom)

    .append("g")

    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var xValue = function (d) {

        return d[seriesX];

    }, // data -> value



    xScale = d3.scale.linear().range([0, width - 20]), // value -> display

    xMap = function (d) {

        return xScale(xValue(d));

    }, // data -> display

//inline sets x axis to faction value if needed
    xAxis = d3.svg.axis().scale(xScale)
        .tickFormat(function (d) {

            if (seriesX == 'factionunits') {
                return factions[d]
            }

            else {
                return d
            }
        })
	 .ticks(19)
        .orient("bottom");

// setup y

var yValue = function (d) {

        return d[seriesY];

    }, // data -> value

    yScale = d3.scale.linear().range([height, 0]), // value -> display

    yMap = function (d) {

        return yScale(yValue(d));

    }, // data -> display

    yAxis = d3.svg.axis().scale(yScale).orient("left");


// setup fill color

var cValue = function (d) {

        return d[legendSide];

    },

    color = d3.scale.category10();

// add the tooltip

var tooltip = d3.select("body").append("div")

    .attr("class", "tooltip")

    .style("opacity", 0);

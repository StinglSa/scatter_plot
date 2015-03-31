function update() {




    d3.csv(faction_before, function (error, data) {


        data.forEach(function (d) {

            d[seriesX] = +d[seriesX];

            d[seriesY] = +d[seriesY];

        });

        xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);

        yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);


        var inf = true;

        var cav = false;


        svg.selectAll(".point").data(data.filter(function(d) { return true})).attr("visibility", "hidden");



    });


    d3.csv(unitStats, function (error, data) {


        data.forEach(function (d) {

            d[seriesX] = +d[seriesX];

            d[seriesY] = +d[seriesY];

        });

        xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);

        yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);


       //var circle = svg.selectAll(".point").data(data.filter(function(d) { return d.unitclass == unitType }));

        //circle.exit().remove();

       // svg.selectAll(".point").attr("visibility", "hidden");


        //var svg = d3.select("svg");

        //var circle = svg.selectAll("circle")

        //var circleEnter = circle.enter().append("circle");


        var inf = true;

        var cav = false;

       // svg.selectAll(".point").data(data.filter(function(d) { return d.unitclass !== unitType })).attr("visibility", "hidden");

        svg.selectAll(".point").data(data.filter(function(d) { return true})).attr("visibility", "hidden");


        svg.selectAll(".point")

            //.data(data)


            .data(data.filter(function(d) { return d.unitclass == unitType || unitType=="all" })).attr("visibility", "visible")

            .transition()

            .duration(1000)

            .attr('fill-opacity', opacity)


            .attr("d", d3.svg.symbol().type(function (d) {


                    if (d.unitclass == unitType) {



                        return shapeOn

                    } else  {

                        return shapeOff

                    }

                   /* if (d.unitclass == "inf_mel") {

                        return inf_mel

                    } else if (d.unitclass == "cav_mel") {

                        return cav_mel

                    } else if (d.unitclass == "cav_shk") {

                        return cav_shk

                    }*/
                }
            ).size(80))

            .attr("transform", function (d) {

                return "translate(" + xMap(d) + "," + yMap(d) + ")";

            })
            .style("fill", function (d) {

                return color(cValue(d));

            })





        svg.select(".x.axis")

            .transition()

            .duration(1000)

            .call(xAxis);

        svg.select(".xaxis_label")

            .text(seriesX);

        svg.select(".yaxis_label")

            .text(seriesY);

        svg.select(".x.axis.label")

            .transition()

            .duration(1000)

            .call(xAxis);

        svg.select(".y.axis")

            .transition()

            .duration(1000)

            .call(yAxis);
    });





};
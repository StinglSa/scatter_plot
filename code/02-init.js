// load data

d3.csv(unitStats, function (error, data) {

// string to number

    data.forEach(function (d) {

        d[seriesX] = +d[seriesX];

        d[seriesY] = +d[seriesY];

    });

    //hack to get ird of the overlapping points

    xScale.domain([d3.min(data, xValue) - 1, d3.max(data, xValue) + 1]);

    yScale.domain([d3.min(data, yValue) - 1, d3.max(data, yValue) + 1]);

    // x-axis

    svg.append("g")

        .attr("class", "x axis")

        .attr("transform", "translate(0," + height + ")")

        .call(xAxis)

        .append("text")

        .attr("class", "label")

        .attr("x", width)

        .attr("y", -6)

        .style("text-anchor", "end");

    //.text(seriesX);

    //seperate legend text for x axis

    svg.append("text")

        .style("fill", "lightgrey")

        .attr("class", "xaxis_label")

        .attr("text-anchor", "middle")

        .attr("transform", "translate(" + (width - 10) + "," + (height - 10) + ")")

        .text(seriesX);

    // y-axis

    svg.append("g")

        .attr("class", "y axis")

        .call(yAxis)

        .append("text")

        .attr("class", "label")

        .attr("transform", "rotate(-90)")

        .attr("y", 6)

        .attr("dy", ".71em")

        .style("text-anchor", "end")

    //.text(seriesY);

    //seperate legend text for y axis

    svg.append("text")

        .style("fill", "lightgrey")

        .attr("class", "yaxis_label")

        .attr("text-anchor", "middle")

        .attr("transform", "translate(" + (20) + "," + (height / 20) + ")rotate(-90)")

        .text(seriesY);

    //set the shapes



    svg.selectAll(".point")

        .data(data)

        //.data(data.filter(function(d) { return d.unitclass == unitType }))

        .enter().append("path")

        .attr("class", "point")



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
        ))

        .attr('fill-opacity', opacity)

        .attr("transform", function (d) {

            return "translate(" + xMap(d) + "," + yMap(d) + ")";

        })

        .style("fill", function (d) {

            return color(cValue(d));

        })

        .on("mouseover", function (d) {

            tooltip.transition()

                .duration(200)

                .style("opacity", .9);

            tooltip.html(d[toolTipText] + " | " + d.faction + "<br/>" + seriesX + ': ' + xValue(d) // sets mouseover value

                    + "<br/>" + seriesY + ': ' + yValue(d)
                    + "<br/>" + 'prize: ' + d.prize
                    + "<br/>" + 'attack: ' + d.attack
                    + "<br/>" + 'damage: ' + d.damage
                    + "<br/>" + 'ap: ' + d.ap
                    + "<br/>" + 'bonusInf: ' + d.bonusInf
                    + "<br/>" + 'bonusCav: ' + d.bonusCav
                    + "<br/>" + 'charge: ' + d.charge
                    + "<br/>" + 'defense: ' + d.defense
                    + "<br/>" + 'morale: ' + d.morale
                    + "<br/>" + 'armour: ' + d.armour
                    + "<br/>" + 'health: ' + d.health
                    + "<br/>" + 'ammo: ' + d.ammo
                    + "<br/>" + 'missiledamage: ' + d.missiledamage
                    + "<br/>" + 'range: ' + d.range

                    +"")

                .style("left", (d3.event.pageX + 5) + "px")

                .style("top", (d3.event.pageY - 28) + "px");
        })

        .on("mouseout", function (d) {

            tooltip.transition()

                .duration(500)

                .style("opacity", 0);

        });

    // draw legend

    var legend = svg.selectAll(".legend")

        .data(color.domain())

        .enter().append("g")

        .attr("class", "legend")



        .attr("transform", function (d, i) {



            return "translate( 0," + i  * 23 + ")";

        }

    );

    // draw legend colored rectangles

    legend.append("rect")

        .attr("x", width +20)

        .attr("width", 18)

        .attr("height", 18)

        .attr('transform', 'translate(0,230)')

        .style("fill", color);

    // draw legend text

    legend.append("text")

        .attr("x", width +10)

        .attr("y", 9)

        .attr("dy", ".35em")

        .attr('transform', 'translate(0,230)')

        .style("text-anchor", "end")

        .text(function (d) {

            return d;
        })
});
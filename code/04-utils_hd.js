var FizzyText = function () {

    this.seriesX = seriesX;

    this.seriesY = seriesY;

    this.unitStats = unitStats;

    /*this.inf_mel = inf_mel;

    this.cav_mel = cav_mel;

    this.cav_shk = cav_shk;
*/
    this.opacity = opacity;

    this.unitType = unitType;

};

window.onload = function () {

    var text = new FizzyText();

    var gui = new dat.GUI();

    gui.add(text, "seriesY", ['attack','damage', 'ap', 'bonusInf', 'bonusCav',  'prize' , 'defense', 'morale', 'charge', 'armour' , 'health' , 'ammo', 'missiledamage', 'range']).onChange(function (newValue) {

        seriesY = newValue;

        update();

    });

    gui.add(text, "seriesX", [ 'attack' ,'damage', 'ap', 'bonusInf', 'bonusCav' , 'prize' , 'defense', 'morale', 'charge', 'armour' ,'factionunits', 'health' , 'ammo', 'missiledamage', 'range' ]).onChange(function (newValue) {

        seriesX = newValue;

        update();
    });

    /*gui.add(text, "unitStats", ['vers/p16_sort.csv','vers/p16_.csv', 'vers/p16.csv','vers/p15_emp.csv','vers/p15_diff.csv','vers/p15_2.csv', 'vers/p15.csv', 'vers/p14.csv']).onChange(function (newValue) {

        unitStats = newValue;

        update();

    });*/

	gui.add(text, "unitStats", ['vers/2f.csv','vers/2.csv','vers/1.csv']).name('Patch').onChange(function (newValue) {

        faction_before = unitStats;

        unitStats = newValue;



        if (unitStats == 'vers/att_2_dlc.csv'){

            factions = factions_3;}

        else{

            factions = factions_2;


        }

        update();

    });


   /* gui.add(text, "inf_mel", ['triangle-up', 'circle', 'square']).onChange(function (newValue) {

        inf_mel = newValue;

        update();

    });

    gui.add(text, "cav_mel", ['triangle-up', 'circle', 'square']).onChange(function (newValue) {

        cav_mel = newValue;

        update();

    });

    gui.add(text, "cav_shk", ['triangle-up', 'circle', 'diamond']).onChange(function (newValue) {

        cav_shk = newValue;

        update();

    });*/

    gui.add(text, "unitType", ['all','inf_mel','inf_spr','inf_mis','inf_pik', 'cav_mel', 'cav_shk','cav_mis', 'art_fld', 'elph']).onChange(function (newValue) {

        unitType = newValue;

        update();

    });

    gui.add(text, "opacity", [1.0, 0.75, 0.5]).onChange(function (newValue) {

        opacity = newValue;

        update();

    });

	  //backend button
    var obj = { SmallView:function(){

        window.location =  "http://stinglsa.atria.uberspace.de/scatterplot_att/index.html";

    }};

    gui.add(obj,'SmallView');

};
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3403").setExtent([-974734.225400, 5067304.208636, 779781.246169, 6720597.633768]);
var wms_layers = [];

var format_Alberta_Boundary_0 = new ol.format.GeoJSON();
var features_Alberta_Boundary_0 = format_Alberta_Boundary_0.readFeatures(json_Alberta_Boundary_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Alberta_Boundary_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_Boundary_0.addFeatures(features_Alberta_Boundary_0);
var lyr_Alberta_Boundary_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_Boundary_0, 
                style: style_Alberta_Boundary_0,
                popuplayertitle: "Alberta_Boundary",
                interactive: false,
                title: '<img src="styles/legend/Alberta_Boundary_0.png" /> Alberta_Boundary'
            });
var format_Alberta_Waterbody_1 = new ol.format.GeoJSON();
var features_Alberta_Waterbody_1 = format_Alberta_Waterbody_1.readFeatures(json_Alberta_Waterbody_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Alberta_Waterbody_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alberta_Waterbody_1.addFeatures(features_Alberta_Waterbody_1);
var lyr_Alberta_Waterbody_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alberta_Waterbody_1, 
                style: style_Alberta_Waterbody_1,
                popuplayertitle: "Alberta_Waterbody",
                interactive: false,
                title: '<img src="styles/legend/Alberta_Waterbody_1.png" /> Alberta_Waterbody'
            });
var format_Fish_Stocking_Points_2 = new ol.format.GeoJSON();
var features_Fish_Stocking_Points_2 = format_Fish_Stocking_Points_2.readFeatures(json_Fish_Stocking_Points_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3403'});
var jsonSource_Fish_Stocking_Points_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fish_Stocking_Points_2.addFeatures(features_Fish_Stocking_Points_2);
var lyr_Fish_Stocking_Points_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fish_Stocking_Points_2, 
                style: style_Fish_Stocking_Points_2,
                popuplayertitle: "Fish_Stocking_Points",
                interactive: true,
    title: 'Fish_Stocking_Points<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_0.png" /> 0 - 1807<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_1.png" /> 1807 - 5600<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_2.png" /> 5600 - 11500<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_3.png" /> 11500 - 20000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_4.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_5.png" /> 40000 - 110000<br />\
    <img src="styles/legend/Fish_Stocking_Points_2_6.png" /> 110000 - 1613075<br />'
        });

lyr_Alberta_Boundary_0.setVisible(true);lyr_Alberta_Waterbody_1.setVisible(true);lyr_Fish_Stocking_Points_2.setVisible(true);
var layersList = [lyr_Alberta_Boundary_0,lyr_Alberta_Waterbody_1,lyr_Fish_Stocking_Points_2];
lyr_Alberta_Boundary_0.set('fieldAliases', {'PRUID': 'PRUID', 'DGUID': 'DGUID', 'PRNAME': 'PRNAME', 'PRENAME': 'PRENAME', 'PRFNAME': 'PRFNAME', 'PREABBR': 'PREABBR', 'PRFABBR': 'PRFABBR', 'LANDAREA': 'LANDAREA', });
lyr_Alberta_Waterbody_1.set('fieldAliases', {'HYDROUID': 'HYDROUID', 'NAME': 'NAME', 'RANK': 'RANK', 'PRUID': 'PRUID', });
lyr_Fish_Stocking_Points_2.set('fieldAliases', {'DISTRICT': 'DISTRICT', 'WATERBODY': 'WATERBODY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'SPECIES': 'SPECIES', 'GENOTYPE': 'GENOTYPE', 'STOCKED -': 'STOCKED -', 'STOCKING N': 'STOCKING N', 'PLANNED ST': 'PLANNED ST', 'MapAuthor': 'MapAuthor', 'NumStock': 'NumStock', });
lyr_Alberta_Boundary_0.set('fieldImages', {'PRUID': 'TextEdit', 'DGUID': 'TextEdit', 'PRNAME': 'TextEdit', 'PRENAME': 'TextEdit', 'PRFNAME': 'TextEdit', 'PREABBR': 'TextEdit', 'PRFABBR': 'TextEdit', 'LANDAREA': 'TextEdit', });
lyr_Alberta_Waterbody_1.set('fieldImages', {'HYDROUID': 'TextEdit', 'NAME': 'TextEdit', 'RANK': 'Range', 'PRUID': 'TextEdit', });
lyr_Fish_Stocking_Points_2.set('fieldImages', {'DISTRICT': 'TextEdit', 'WATERBODY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'SPECIES': 'TextEdit', 'GENOTYPE': 'TextEdit', 'STOCKED -': 'TextEdit', 'STOCKING N': 'TextEdit', 'PLANNED ST': 'TextEdit', 'MapAuthor': 'TextEdit', 'NumStock': 'TextEdit', });
lyr_Alberta_Boundary_0.set('fieldLabels', {'PRUID': 'no label', 'DGUID': 'header label - visible with data', 'PRNAME': 'no label', 'PRENAME': 'no label', 'PRFNAME': 'no label', 'PREABBR': 'no label', 'PRFABBR': 'no label', 'LANDAREA': 'no label', });
lyr_Alberta_Waterbody_1.set('fieldLabels', {'HYDROUID': 'no label', 'NAME': 'no label', 'RANK': 'no label', 'PRUID': 'no label', });
lyr_Fish_Stocking_Points_2.set('fieldLabels', {'DISTRICT': 'inline label - visible with data', 'WATERBODY': 'inline label - visible with data', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'SPECIES': 'inline label - visible with data', 'GENOTYPE': 'inline label - visible with data', 'STOCKED -': 'hidden field', 'STOCKING N': 'hidden field', 'PLANNED ST': 'inline label - visible with data', 'MapAuthor': 'header label - always visible', 'NumStock': 'inline label - always visible', });
lyr_Fish_Stocking_Points_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
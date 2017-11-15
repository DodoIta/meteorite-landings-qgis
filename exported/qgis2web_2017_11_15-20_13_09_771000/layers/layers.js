var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_1950_1960_0 = new ol.format.GeoJSON();
var features_1950_1960_0 = format_1950_1960_0.readFeatures(json_1950_1960_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1950_1960_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_1950_1960_0.addFeatures(features_1950_1960_0);var lyr_1950_1960_0 = new ol.layer.Vector({
                source:jsonSource_1950_1960_0, 
                style: style_1950_1960_0,
    title: '1950_1960<br />\
    <img src="styles/legend/1950_1960_0_0.png" />  0.00 - 0.37 <br />\
    <img src="styles/legend/1950_1960_0_1.png" />  0.37 - 1.63 <br />\
    <img src="styles/legend/1950_1960_0_2.png" />  1.63 - 6.70 <br />\
    <img src="styles/legend/1950_1960_0_3.png" />  6.70 - 21.03 <br />\
    <img src="styles/legend/1950_1960_0_4.png" />  21.03 - 9500.00 <br />'
        });

lyr_1950_1960_0.setVisible(true);
var layersList = [baseLayer,lyr_1950_1960_0];
lyr_1950_1960_0.set('fieldAliases', {'name': 'Name', 'id': 'id', 'nametype': 'nametype', 'recclass': 'Class', 'mass (g)': 'mass (g)', 'fall': 'fall', 'year': 'year', 'reclat': 'reclat', 'reclong': 'reclong', 'GeoLocation': 'GeoLocation', 'Weight (Kg)': 'Weight (Kg)', 'Year': 'Year', });
lyr_1950_1960_0.set('fieldImages', {'name': 'TextEdit', 'id': 'Hidden', 'nametype': 'Hidden', 'recclass': 'TextEdit', 'mass (g)': 'Hidden', 'fall': 'Hidden', 'year': 'Hidden', 'reclat': 'Hidden', 'reclong': 'Hidden', 'GeoLocation': 'Hidden', 'Weight (Kg)': 'TextEdit', 'Year': 'TextEdit', });
lyr_1950_1960_0.set('fieldLabels', {'name': 'inline label', 'recclass': 'inline label', 'Weight (Kg)': 'inline label', 'Year': 'inline label', });
lyr_1950_1960_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_1950_1960_0.on("postcompose", update);

    var listenerKey = lyr_1950_1960_0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });
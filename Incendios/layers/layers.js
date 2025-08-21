var wms_layers = [];


        var lyr_Satellite_0 = new ol.layer.Tile({
            'title': 'Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_CuencaRioGey_1 = new ol.format.GeoJSON();
var features_CuencaRioGey_1 = format_CuencaRioGey_1.readFeatures(json_CuencaRioGey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaRioGey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaRioGey_1.addFeatures(features_CuencaRioGey_1);
var lyr_CuencaRioGey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaRioGey_1, 
                style: style_CuencaRioGey_1,
                popuplayertitle: 'Cuenca Rio Güey',
                interactive: true,
                title: '<img src="styles/legend/CuencaRioGey_1.png" /> Cuenca Rio Güey'
            });
var format_Ao1990_2 = new ol.format.GeoJSON();
var features_Ao1990_2 = format_Ao1990_2.readFeatures(json_Ao1990_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao1990_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao1990_2.addFeatures(features_Ao1990_2);
var lyr_Ao1990_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao1990_2, 
                style: style_Ao1990_2,
                popuplayertitle: 'Año 1990',
                interactive: true,
                title: '<img src="styles/legend/Ao1990_2.png" /> Año 1990'
            });
var format_Ao1998_3 = new ol.format.GeoJSON();
var features_Ao1998_3 = format_Ao1998_3.readFeatures(json_Ao1998_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao1998_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao1998_3.addFeatures(features_Ao1998_3);
var lyr_Ao1998_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao1998_3, 
                style: style_Ao1998_3,
                popuplayertitle: 'Año 1998',
                interactive: true,
                title: '<img src="styles/legend/Ao1998_3.png" /> Año 1998'
            });
var format_Ao2003_4 = new ol.format.GeoJSON();
var features_Ao2003_4 = format_Ao2003_4.readFeatures(json_Ao2003_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao2003_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao2003_4.addFeatures(features_Ao2003_4);
var lyr_Ao2003_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao2003_4, 
                style: style_Ao2003_4,
                popuplayertitle: 'Año 2003',
                interactive: true,
                title: '<img src="styles/legend/Ao2003_4.png" /> Año 2003'
            });
var format_Ao2014_5 = new ol.format.GeoJSON();
var features_Ao2014_5 = format_Ao2014_5.readFeatures(json_Ao2014_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao2014_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao2014_5.addFeatures(features_Ao2014_5);
var lyr_Ao2014_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao2014_5, 
                style: style_Ao2014_5,
                popuplayertitle: 'Año 2014',
                interactive: true,
                title: '<img src="styles/legend/Ao2014_5.png" /> Año 2014'
            });
var format_Ao2017_6 = new ol.format.GeoJSON();
var features_Ao2017_6 = format_Ao2017_6.readFeatures(json_Ao2017_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao2017_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao2017_6.addFeatures(features_Ao2017_6);
var lyr_Ao2017_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao2017_6, 
                style: style_Ao2017_6,
                popuplayertitle: 'Año 2017',
                interactive: true,
                title: '<img src="styles/legend/Ao2017_6.png" /> Año 2017'
            });
var format_Ao2018_7 = new ol.format.GeoJSON();
var features_Ao2018_7 = format_Ao2018_7.readFeatures(json_Ao2018_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao2018_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao2018_7.addFeatures(features_Ao2018_7);
var lyr_Ao2018_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao2018_7, 
                style: style_Ao2018_7,
                popuplayertitle: 'Año 2018',
                interactive: true,
                title: '<img src="styles/legend/Ao2018_7.png" /> Año 2018'
            });
var format_Ao2019_8 = new ol.format.GeoJSON();
var features_Ao2019_8 = format_Ao2019_8.readFeatures(json_Ao2019_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao2019_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao2019_8.addFeatures(features_Ao2019_8);
var lyr_Ao2019_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao2019_8, 
                style: style_Ao2019_8,
                popuplayertitle: 'Año 2019',
                interactive: true,
                title: '<img src="styles/legend/Ao2019_8.png" /> Año 2019'
            });
var format_Ao2020_9 = new ol.format.GeoJSON();
var features_Ao2020_9 = format_Ao2020_9.readFeatures(json_Ao2020_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ao2020_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ao2020_9.addFeatures(features_Ao2020_9);
var lyr_Ao2020_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ao2020_9, 
                style: style_Ao2020_9,
                popuplayertitle: 'Año 2020',
                interactive: true,
                title: '<img src="styles/legend/Ao2020_9.png" /> Año 2020'
            });
var group_IncendiosCuenca = new ol.layer.Group({
                                layers: [lyr_Ao1990_2,lyr_Ao1998_3,lyr_Ao2003_4,lyr_Ao2014_5,lyr_Ao2017_6,lyr_Ao2018_7,lyr_Ao2019_8,lyr_Ao2020_9,],
                                fold: 'open',
                                title: 'Incendios Cuenca'});

lyr_Satellite_0.setVisible(true);lyr_CuencaRioGey_1.setVisible(true);lyr_Ao1990_2.setVisible(true);lyr_Ao1998_3.setVisible(true);lyr_Ao2003_4.setVisible(true);lyr_Ao2014_5.setVisible(true);lyr_Ao2017_6.setVisible(true);lyr_Ao2018_7.setVisible(true);lyr_Ao2019_8.setVisible(true);lyr_Ao2020_9.setVisible(true);
var layersList = [lyr_Satellite_0,lyr_CuencaRioGey_1,group_IncendiosCuenca];
lyr_CuencaRioGey_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'area': 'area', });
lyr_Ao1990_2.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao1998_3.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao2003_4.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao2014_5.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao2017_6.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao2018_7.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao2019_8.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_Ao2020_9.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'value': 'value', 'name': 'name', 'ano': 'Año', });
lyr_CuencaRioGey_1.set('fieldImages', {'qc_id': '', 'id': '', 'area': '', });
lyr_Ao1990_2.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao1998_3.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao2003_4.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao2014_5.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao2017_6.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao2018_7.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao2019_8.set('fieldImages', {'qc_id': '', 'id': '', 'value': '', 'name': '', 'ano': 'Range', });
lyr_Ao2020_9.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', 'value': '', 'name': '', 'ano': 'Range', });
lyr_CuencaRioGey_1.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'area': 'inline label - always visible', });
lyr_Ao1990_2.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao1998_3.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2003_4.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2014_5.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2017_6.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2018_7.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2019_8.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2020_9.set('fieldLabels', {'qc_id': 'hidden field', 'id': 'hidden field', 'value': 'hidden field', 'name': 'hidden field', 'ano': 'inline label - always visible', });
lyr_Ao2020_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
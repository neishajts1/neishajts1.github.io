var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_CuencaRioGuey_1 = new ol.format.GeoJSON();
var features_CuencaRioGuey_1 = format_CuencaRioGuey_1.readFeatures(json_CuencaRioGuey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaRioGuey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaRioGuey_1.addFeatures(features_CuencaRioGuey_1);
var lyr_CuencaRioGuey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaRioGuey_1, 
                style: style_CuencaRioGuey_1,
                popuplayertitle: "Cuenca Rio Guey",
                interactive: false,
                title: '<img src="styles/legend/CuencaRioGuey_1.png" /> Cuenca Rio Guey'
            });
var format_DepartamentoseInstitutos_2 = new ol.format.GeoJSON();
var features_DepartamentoseInstitutos_2 = format_DepartamentoseInstitutos_2.readFeatures(json_DepartamentoseInstitutos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentoseInstitutos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentoseInstitutos_2.addFeatures(features_DepartamentoseInstitutos_2);
var lyr_DepartamentoseInstitutos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentoseInstitutos_2, 
                style: style_DepartamentoseInstitutos_2,
                popuplayertitle: "Departamentos e Institutos",
                interactive: true,
    title: 'Departamentos e Institutos<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_0.png" /> Departamento de Química<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_1.png" /> Departamento e Instituto de Agronomía<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_2.png" /> Departamento e Instituto de Botánica<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_3.png" /> Departamento e Instituto de Economía<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_4.png" /> Departamento e Instituto de Edafología<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_5.png" /> Departamento e Instituto de Genética<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_6.png" /> Departamento e Instituto de Ingeniería Agrícola<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_7.png" /> Departamento e Instituto de Zoología Agrícola<br />\
    <img src="styles/legend/DepartamentoseInstitutos_2_8.png" /> Instituto de Química<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_CuencaRioGuey_1.setVisible(true);lyr_DepartamentoseInstitutos_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CuencaRioGuey_1,lyr_DepartamentoseInstitutos_2];
lyr_CuencaRioGuey_1.set('fieldAliases', {'Id': 'Id', 'Area': 'Area', });
lyr_DepartamentoseInstitutos_2.set('fieldAliases', {'photo': 'Foto', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'Longitud', 'latitude': 'Latitud', 'timestamp': 'timestamp', 'Nombre': 'Nombre', 'Numero': 'Nro', });
lyr_CuencaRioGuey_1.set('fieldImages', {'Id': 'Hidden', 'Area': 'TextEdit', });
lyr_DepartamentoseInstitutos_2.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'Hidden', 'directory': 'Hidden', 'altitude': 'TextEdit', 'direction': 'Hidden', 'rotation': 'Hidden', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'Hidden', 'Nombre': 'TextEdit', 'Numero': 'TextEdit', });
lyr_CuencaRioGuey_1.set('fieldLabels', {'Area': 'no label', });
lyr_DepartamentoseInstitutos_2.set('fieldLabels', {'photo': 'no label', 'altitude': 'inline label - always visible', 'longitude': 'inline label - always visible', 'latitude': 'inline label - always visible', 'Nombre': 'inline label - always visible', 'Numero': 'hidden field', });
lyr_DepartamentoseInstitutos_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
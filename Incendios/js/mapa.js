        var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString' || e.target.feature.geometry.type === 'MultiLineString') {
              highlightLayer.setStyle({
                color: '#ffff00',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#ffff00',
                fillOpacity: 1
              });
            }
            highlightLayer.openPopup();
        }
        var map = L.map('map', {
            zoomControl:false, maxZoom:28, minZoom:1
        }).fitBounds([[10.254640497661196,-67.67927193256519],[10.34033686931647,-67.52530018499982]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        // remove popup's row if "visible-with-data"
        function removeEmptyRowsFromPopupContent(content, feature) {
         var tempDiv = document.createElement('div');
         tempDiv.innerHTML = content;
         var rows = tempDiv.querySelectorAll('tr');
         for (var i = 0; i < rows.length; i++) {
             var td = rows[i].querySelector('td.visible-with-data');
             var key = td ? td.id : '';
             if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
                 rows[i].parentNode.removeChild(rows[i]);
             }
         }
         return tempDiv.innerHTML;
        }
        // add class to format popup if it contains media
		function addClassToPopupIfMedia(content, popup) {
			var tempDiv = document.createElement('div');
			tempDiv.innerHTML = content;
			if (tempDiv.querySelector('td img')) {
				popup._contentNode.classList.add('media');
					// Delay to force the redraw
					setTimeout(function() {
						popup.update();
					}, 10);
			} else {
				popup._contentNode.classList.remove('media');
			}
		}
        var title = new L.Control({'position':'bottomright'});
        title.onAdd = function (map) {
            this._div = L.DomUtil.create('div', 'info');
            this.update();
            return this._div;
        };
        title.update = function () {
            this._div.innerHTML = '<h2>Mapa de Incendios del PNHP - Cuenca Río Güey</h2>';
        };
        title.addTo(map);
        var zoomControl = L.control.zoom({
            position: 'topleft'
        }).addTo(map);
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0].innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0].className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_Satellite_0');
        map.getPane('pane_Satellite_0').style.zIndex = 400;
        var layer_Satellite_0 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            pane: 'pane_Satellite_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
        });
        layer_Satellite_0;
        map.addLayer(layer_Satellite_0);
        function pop_CuencaRioGey_1(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">area</th>\
                        <td>' + (feature.properties['area'] !== null ? autolinker.link(String(feature.properties['area']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_CuencaRioGey_1_0() {
            return {
                pane: 'pane_CuencaRioGey_1',
                opacity: 1,
                color: 'rgba(53,121,177,1.0)',
                dashArray: '',
                lineCap: 'square',
                lineJoin: 'bevel',
                weight: 4.0,
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_CuencaRioGey_1');
        map.getPane('pane_CuencaRioGey_1').style.zIndex = 401;
        map.getPane('pane_CuencaRioGey_1').style['mix-blend-mode'] = 'normal';
        var layer_CuencaRioGey_1 = new L.geoJson(json_CuencaRioGey_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_CuencaRioGey_1',
            layerName: 'layer_CuencaRioGey_1',
            pane: 'pane_CuencaRioGey_1',
            onEachFeature: pop_CuencaRioGey_1,
            style: style_CuencaRioGey_1_0,
        });
        bounds_group.addLayer(layer_CuencaRioGey_1);
        map.addLayer(layer_CuencaRioGey_1);
        function pop_Ao1990_2(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao1990_2_0() {
            return {
                pane: 'pane_Ao1990_2',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(231,113,72,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao1990_2');
        map.getPane('pane_Ao1990_2').style.zIndex = 402;
        map.getPane('pane_Ao1990_2').style['mix-blend-mode'] = 'normal';
        var layer_Ao1990_2 = new L.geoJson(json_Ao1990_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao1990_2',
            layerName: 'layer_Ao1990_2',
            pane: 'pane_Ao1990_2',
            onEachFeature: pop_Ao1990_2,
            style: style_Ao1990_2_0,
        });
        bounds_group.addLayer(layer_Ao1990_2);
        map.addLayer(layer_Ao1990_2);
        function pop_Ao1998_3(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao1998_3_0() {
            return {
                pane: 'pane_Ao1998_3',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(179,29,154,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao1998_3');
        map.getPane('pane_Ao1998_3').style.zIndex = 403;
        map.getPane('pane_Ao1998_3').style['mix-blend-mode'] = 'normal';
        var layer_Ao1998_3 = new L.geoJson(json_Ao1998_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao1998_3',
            layerName: 'layer_Ao1998_3',
            pane: 'pane_Ao1998_3',
            onEachFeature: pop_Ao1998_3,
            style: style_Ao1998_3_0,
        });
        bounds_group.addLayer(layer_Ao1998_3);
        map.addLayer(layer_Ao1998_3);
        function pop_Ao2003_4(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao2003_4_0() {
            return {
                pane: 'pane_Ao2003_4',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(177,19,55,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao2003_4');
        map.getPane('pane_Ao2003_4').style.zIndex = 404;
        map.getPane('pane_Ao2003_4').style['mix-blend-mode'] = 'normal';
        var layer_Ao2003_4 = new L.geoJson(json_Ao2003_4, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao2003_4',
            layerName: 'layer_Ao2003_4',
            pane: 'pane_Ao2003_4',
            onEachFeature: pop_Ao2003_4,
            style: style_Ao2003_4_0,
        });
        bounds_group.addLayer(layer_Ao2003_4);
        map.addLayer(layer_Ao2003_4);
        function pop_Ao2014_5(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao2014_5_0() {
            return {
                pane: 'pane_Ao2014_5',
                opacity: 1,
                color: 'rgba(128,14,16,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(215,123,124,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao2014_5');
        map.getPane('pane_Ao2014_5').style.zIndex = 405;
        map.getPane('pane_Ao2014_5').style['mix-blend-mode'] = 'normal';
        var layer_Ao2014_5 = new L.geoJson(json_Ao2014_5, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao2014_5',
            layerName: 'layer_Ao2014_5',
            pane: 'pane_Ao2014_5',
            onEachFeature: pop_Ao2014_5,
            style: style_Ao2014_5_0,
        });
        bounds_group.addLayer(layer_Ao2014_5);
        map.addLayer(layer_Ao2014_5);
        function pop_Ao2017_6(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao2017_6_0() {
            return {
                pane: 'pane_Ao2017_6',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(152,53,53,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao2017_6');
        map.getPane('pane_Ao2017_6').style.zIndex = 406;
        map.getPane('pane_Ao2017_6').style['mix-blend-mode'] = 'normal';
        var layer_Ao2017_6 = new L.geoJson(json_Ao2017_6, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao2017_6',
            layerName: 'layer_Ao2017_6',
            pane: 'pane_Ao2017_6',
            onEachFeature: pop_Ao2017_6,
            style: style_Ao2017_6_0,
        });
        bounds_group.addLayer(layer_Ao2017_6);
        map.addLayer(layer_Ao2017_6);
        function pop_Ao2018_7(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao2018_7_0() {
            return {
                pane: 'pane_Ao2018_7',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(255,127,0,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao2018_7');
        map.getPane('pane_Ao2018_7').style.zIndex = 407;
        map.getPane('pane_Ao2018_7').style['mix-blend-mode'] = 'normal';
        var layer_Ao2018_7 = new L.geoJson(json_Ao2018_7, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao2018_7',
            layerName: 'layer_Ao2018_7',
            pane: 'pane_Ao2018_7',
            onEachFeature: pop_Ao2018_7,
            style: style_Ao2018_7_0,
        });
        bounds_group.addLayer(layer_Ao2018_7);
        map.addLayer(layer_Ao2018_7);
        function pop_Ao2019_8(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao2019_8_0() {
            return {
                pane: 'pane_Ao2019_8',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(253,191,111,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao2019_8');
        map.getPane('pane_Ao2019_8').style.zIndex = 408;
        map.getPane('pane_Ao2019_8').style['mix-blend-mode'] = 'normal';
        var layer_Ao2019_8 = new L.geoJson(json_Ao2019_8, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao2019_8',
            layerName: 'layer_Ao2019_8',
            pane: 'pane_Ao2019_8',
            onEachFeature: pop_Ao2019_8,
            style: style_Ao2019_8_0,
        });
        bounds_group.addLayer(layer_Ao2019_8);
        map.addLayer(layer_Ao2019_8);
        function pop_Ao2020_9(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (var i in e.target._eventParents) {
                        if (typeof e.target._eventParents[i].resetStyle === 'function') {
                            e.target._eventParents[i].resetStyle(e.target);
                        }
                    }
                    if (typeof layer.closePopup == 'function') {
                        layer.closePopup();
                    } else {
                        layer.eachLayer(function(feature){
                            feature.closePopup()
                        });
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">Año</th>\
                        <td>' + (feature.properties['ano'] !== null ? autolinker.link(String(feature.properties['ano']).replace(/'/g, '\'').toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            var content = removeEmptyRowsFromPopupContent(popupContent, feature);
			layer.on('popupopen', function(e) {
				addClassToPopupIfMedia(content, e.popup);
			});
			layer.bindPopup(content, { maxHeight: 400 });
        }

        function style_Ao2020_9_0() {
            return {
                pane: 'pane_Ao2020_9',
                opacity: 1,
                color: 'rgba(35,35,35,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(200,63,60,1.0)',
                interactive: true,
            }
        }
        map.createPane('pane_Ao2020_9');
        map.getPane('pane_Ao2020_9').style.zIndex = 409;
        map.getPane('pane_Ao2020_9').style['mix-blend-mode'] = 'normal';
        var layer_Ao2020_9 = new L.geoJson(json_Ao2020_9, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Ao2020_9',
            layerName: 'layer_Ao2020_9',
            pane: 'pane_Ao2020_9',
            onEachFeature: pop_Ao2020_9,
            style: style_Ao2020_9_0,
        });
        bounds_group.addLayer(layer_Ao2020_9);
        map.addLayer(layer_Ao2020_9);
        var overlaysTree = [
        {label: '<b>Incendios Cuenca</b>',  selectAllCheckbox: true, children: [
            {label: '<img src="legend/Ao2020_9.png" /> Año 2020', layer: layer_Ao2020_9},
            {label: '<img src="legend/Ao2019_8.png" /> Año 2019', layer: layer_Ao2019_8},
            {label: '<img src="legend/Ao2018_7.png" /> Año 2018', layer: layer_Ao2018_7},
            {label: '<img src="legend/Ao2017_6.png" /> Año 2017', layer: layer_Ao2017_6},
            {label: '<img src="legend/Ao2014_5.png" /> Año 2014', layer: layer_Ao2014_5},
            {label: '<img src="legend/Ao2003_4.png" /> Año 2003', layer: layer_Ao2003_4},
            {label: '<img src="legend/Ao1998_3.png" /> Año 1998', layer: layer_Ao1998_3},
            {label: '<img src="legend/Ao1990_2.png" /> Año 1990', layer: layer_Ao1990_2},]},
            {label: '<img src="legend/CuencaRioGey_1.png" /> Cuenca Rio Güey', layer: layer_CuencaRioGey_1},
            {label: "Satellite", layer: layer_Satellite_0},]
        var lay = L.control.layers.tree(null, overlaysTree,{
            //namedToggle: true,
            //selectorBack: false,
            //closedSymbol: '&#8862; &#x1f5c0;',
            //openedSymbol: '&#8863; &#x1f5c1;',
            //collapseAll: 'Collapse all',
            //expandAll: 'Expand all',
            collapsed: false, 
        });
        lay.addTo(map);
		document.addEventListener("DOMContentLoaded", function() {
            // set new Layers List height which considers toggle icon
            function newLayersListHeight() {
                var layerScrollbarElement = document.querySelector('.leaflet-control-layers-scrollbar');
                if (layerScrollbarElement) {
                    var layersListElement = document.querySelector('.leaflet-control-layers-list');
                    var originalHeight = layersListElement.style.height 
                        || window.getComputedStyle(layersListElement).height;
                    var newHeight = parseFloat(originalHeight) - 50;
                    layersListElement.style.height = newHeight + 'px';
                }
            }
            var isLayersListExpanded = true;
            var controlLayersElement = document.querySelector('.leaflet-control-layers');
            var toggleLayerControl = document.querySelector('.leaflet-control-layers-toggle');
            // toggle Collapsed/Expanded and apply new Layers List height
            toggleLayerControl.addEventListener('click', function() {
                if (isLayersListExpanded) {
                    controlLayersElement.classList.remove('leaflet-control-layers-expanded');
                } else {
                    controlLayersElement.classList.add('leaflet-control-layers-expanded');
                }
                isLayersListExpanded = !isLayersListExpanded;
                newLayersListHeight()
            });	
			// apply new Layers List height if toggle layerstree
			if (controlLayersElement) {
				controlLayersElement.addEventListener('click', function(event) {
					var toggleLayerHeaderPointer = event.target.closest('.leaflet-layerstree-header-pointer span');
					if (toggleLayerHeaderPointer) {
						newLayersListHeight();
					}
				});
			}
            // Collapsed/Expanded at Start to apply new height
            setTimeout(function() {
                toggleLayerControl.click();
            }, 10);
            setTimeout(function() {
                toggleLayerControl.click();
            }, 10);
            // Collapsed touch/small screen
            var isSmallScreen = window.innerWidth < 650;
            if (isSmallScreen) {
                setTimeout(function() {
                    controlLayersElement.classList.remove('leaflet-control-layers-expanded');
                    isLayersListExpanded = !isLayersListExpanded;
                }, 500);
            }  
        });       
        setBounds();
        var mapDiv = document.getElementById('map');
        var row = document.createElement('div');
        row.className="row";
        row.id="all";
        row.style.height = "100%";
        var col1 = document.createElement('div');
        col1.className="col9";
        col1.id = "mapWindow";
        col1.style.height = "99%";
        col1.style.width = "80%";
        col1.style.display = "inline-block";
        var col2 = document.createElement('div');
        col2.className="col3";
        col2.id = "menu";
        col2.style.display = "inline-block";
        mapDiv.parentNode.insertBefore(row, mapDiv);
        document.getElementById("all").appendChild(col1);
        document.getElementById("all").appendChild(col2);
        col1.appendChild(mapDiv)
        var Filters = {"ano": "int"};
        function filterFunc() {
          map.eachLayer(function(lyr){
          if ("options" in lyr && "dataVar" in lyr["options"]){
            features = this[lyr["options"]["dataVar"]].features.slice(0);
            try{
              for (key in Filters){
                keyS = key.replace(/[^a-zA-Z0-9_]/g, "")
                if (Filters[key] == "str" || Filters[key] == "bool"){
                  var selection = [];
                  var options = document.getElementById("sel_" + keyS).options
                  for (var i=0; i < options.length; i++) {
                    if (options[i].selected) selection.push(options[i].value);
                  }
                    try{
                      if (key in features[0].properties){
                        for (i = features.length - 1;
                          i >= 0; --i){
                          if (selection.indexOf(
                          features[i].properties[key])<0
                          && selection.length>0) {
                          features.splice(i,1);
                          }
                        }
                      }
                    } catch(err){
                  }
                }
                if (Filters[key] == "int"){
                  sliderVals =  document.getElementById(
                    "div_" + keyS).noUiSlider.get();
                  try{
                    if (key in features[0].properties){
                    for (i = features.length - 1; i >= 0; --i){
                      if (parseInt(features[i].properties[key])
                          < sliderVals[0]
                          || parseInt(features[i].properties[key])
                          > sliderVals[1]){
                            features.splice(i,1);
                          }
                        }
                      }
                    } catch(err){
                    }
                  }
                if (Filters[key] == "real"){
                  sliderVals =  document.getElementById(
                    "div_" + keyS).noUiSlider.get();
                  try{
                    if (key in features[0].properties){
                    for (i = features.length - 1; i >= 0; --i){
                      if (features[i].properties[key]
                          < sliderVals[0]
                          || features[i].properties[key]
                          > sliderVals[1]){
                            features.splice(i,1);
                          }
                        }
                      }
                    } catch(err){
                    }
                  }
                if (Filters[key] == "date"
                  || Filters[key] == "datetime"
                  || Filters[key] == "time"){
                  try{
                    if (key in features[0].properties){
                      HTMLkey = key.replace(/[&\/\\#,+()$~%.'":*?<>{} ]/g, '');
                      startdate = document.getElementById("dat_" +
                        HTMLkey + "_date1").value.replace(" ", "T");
                      enddate = document.getElementById("dat_" +
                        HTMLkey + "_date2").value.replace(" ", "T");
                      for (i = features.length - 1; i >= 0; --i){
                        if (features[i].properties[key] < startdate
                          || features[i].properties[key] > enddate){
                          features.splice(i,1);
                        }
                      }
                    }
                  } catch(err){
                  }
                }
              }
            } catch(err){
            }
          this[lyr["options"]["layerName"]].clearLayers();
          this[lyr["options"]["layerName"]].addData(features);
          }
          })
        }
            document.getElementById("menu").appendChild(
                document.createElement("div"));
            var div_ano = document.createElement("div");
            div_ano.id = "div_ano";
            div_ano.className = "slider";
            document.getElementById("menu").appendChild(div_ano);
            var lab_ano = document.createElement('div');
            lab_ano.innerHTML  = 'ano: <span id="val_ano"></span>';
            lab_ano.className = 'filterlabel';
            document.getElementById("menu").appendChild(lab_ano);
            var reset_ano = document.createElement('div');
            reset_ano.innerHTML = 'clear filter';
            reset_ano.className = 'filterlabel';
            lab_ano.className = 'filterlabel';
            reset_ano.onclick = function() {
                sel_ano.noUiSlider.reset();
            };
            document.getElementById("menu").appendChild(reset_ano);
            var sel_ano = document.getElementById('div_ano');
            noUiSlider.create(sel_ano, {
                connect: true,
                start: [1990, 2020],
                step: 1,
                format: wNumb({
                    decimals: 0,
                    }),
                range: {
                min: 1990,
                max: 2020
                }
            });
            sel_ano.noUiSlider.on('update', function (values) {
            filterVals =[];
            for (value in values){
            filterVals.push(parseInt(value))
            }
            val_ano = document.getElementById('val_ano');
            val_ano.innerHTML = values.join(' - ');
                filterFunc()
            });
ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([660578.991490, 5895384.851499, 696940.649937, 5934646.519515]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_COORDNPROYECTutm_1 = new ol.format.GeoJSON();
var features_COORDNPROYECTutm_1 = format_COORDNPROYECTutm_1.readFeatures(json_COORDNPROYECTutm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_COORDNPROYECTutm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COORDNPROYECTutm_1.addFeatures(features_COORDNPROYECTutm_1);
cluster_COORDNPROYECTutm_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_COORDNPROYECTutm_1
});
var lyr_COORDNPROYECTutm_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_COORDNPROYECTutm_1, 
                style: style_COORDNPROYECTutm_1,
                popuplayertitle: 'COORDN.PROYECT.utm',
                interactive: true,
                title: '<img src="styles/legend/COORDNPROYECTutm_1.png" /> COORDN.PROYECT.utm'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_COORDNPROYECTutm_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_COORDNPROYECTutm_1];
lyr_COORDNPROYECTutm_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'T_Pregunt': 'T_Pregunt', 'N°_Preg_I': 'N°_Preg_I', 'N°_Preg_C': 'N°_Preg_C', 'Video': 'Video', });
lyr_COORDNPROYECTutm_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'T_Pregunt': 'TextEdit', 'N°_Preg_I': 'TextEdit', 'N°_Preg_C': 'TextEdit', 'Video': 'TextEdit', });
lyr_COORDNPROYECTutm_1.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', 'T_Pregunt': 'inline label - always visible', 'N°_Preg_I': 'inline label - always visible', 'N°_Preg_C': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_COORDNPROYECTutm_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
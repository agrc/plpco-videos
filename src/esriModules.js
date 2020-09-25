import { loadModules } from 'esri-loader';


export default async () => {
  const requires = [
    'esri/config',
    'esri/WebMap',
    'esri/views/MapView',
    'esri/widgets/Feature',
    'esri/tasks/QueryTask',
    'esri/Graphic'
  ];

  const [
    esriConfig,
    WebMap,
    MapView,
    Feature,
    QueryTask,
    Graphic
  ] = await loadModules(requires, { version: '4.16', css: true });

  return {
    esriConfig,
    WebMap,
    MapView,
    Feature,
    QueryTask,
    Graphic
  };
}

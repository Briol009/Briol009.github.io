require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "18a47d47b7004f6cb178602d55972308"
    }
  });

  const view = new MapView({
    map: webmap,
    container: "viewDiv"
  });
    const openNewTabButton = document.getElementById('openNewTabButton');

    openNewTabButton.addEventListener('click', function () { window.open('https://swtransit.org/', '_blank');
    });
  
});
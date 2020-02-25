export const data = {
  setItem: function(key, value) {
    localStorage.setItem(key, value);
  },
  clearStorage: function() {
    localStorage.clear();
  },
  addToLocalStorage: function(items) {
    let i = 0;
    items.forEach(function(item) {
      const key = `artObject${i++}`;
      const value = JSON.stringify(item);
      data.setItem(key, value);
    });
  },
  getLocalStorage: function() {
    const keys = Object.keys(localStorage);
    const localStorageValues = [];
    keys.forEach(function(key) {
      const value = localStorage.getItem(key);
      const parsedValue = JSON.parse(value);
      localStorageValues.push(parsedValue);
    });
    console.log(localStorageValues);
    return localStorageValues;
  },
  getOverview: function(data) {
    const artObjects = data.artObjects;
    const filteredArtObjects = artObjects.map(function(artObject) {
      const addArtObject = {
        id: artObject.objectNumber,
        title: artObject.title,
        maker: artObject.principalOrFirstMaker,
        imgUrl: artObject.webImage.url,
      };
      return addArtObject;
    });
    return filteredArtObjects;
  },
  filterDetail: function(data) {
    console.log(data);
    const artObject = [data.artObject];
    const filteredArtObject = artObject.map(function(item) {
      const addArtObject = {
        id: item.objectNumber,
        title: item.title,
        imgUrl: item.webImage.url,
        type: item.objectTypes,
        maker: item.principalMaker,
        date: item.dating.presentingDate,
        colors: item.colors,
      };
      return addArtObject;
    });
    console.log(filteredArtObject);
    return filteredArtObject;
  },
};

/*
OVERVIEW: 
- title
- principalOrFirstMaker
- webImage / headerImage

DETAIL:
- title
- webImage
- colors
- description
- objecttypes
- principalMaker
- dating
*/

export const data = {
  filterOverview: function(data) {
    console.log(data);
    let filter = [];
    //filter de data
    data.artObjects.forEach(filterData);
    function filterData(data) {
      filter.push({
        id: data.objectNumber,
        title: data.title,
        maker: data.principalOrFirstMaker,
        imgUrl: data.webImage.url,
      });
    }
    return filter;
  },
  filterDetail: function(data) {
    console.log(data);
    let filter = [[]];
    //filter de data

    filter.push({
      id: data.artObject.objectNumber,
      title: data.artObject.title,
      imgUrl: data.artObject.webImage.url,
      type: data.artObject.objectTypes,
      maker: data.artObject.principalMaker,
      date: data.artObject.dating.presentingDate,
    });

    console.log(filter);
    data.artObject.colors.forEach(color => filter[0].push(color.hex));
    console.log(filter);
    return filter;
  },
};

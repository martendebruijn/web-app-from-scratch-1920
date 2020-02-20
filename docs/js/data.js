export const data = {
  filter: function(data) {
    console.log('data: ' + data);
    let filter = [];
    //filter de data
    data.artObjects.forEach(filterData);
    function filterData(data) {
      filter.push({
        id: data.id,
        title: data.title,
        maker: data.principalOrFirstMaker,
        imgUrl: data.webImage.url,
      });
    }
    return filter;
  },
};

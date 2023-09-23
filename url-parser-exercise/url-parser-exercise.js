const urlParser = (urlFormatString, urlInstance) => {
  const urlFormatArray = urlFormatString.split('/');
  const urlInstanceArray = urlInstance.split('/');

  const queryParams = urlInstanceArray[urlInstanceArray.length - 1].split('?')[1];
  urlInstanceArray[urlInstanceArray.length - 1] = urlInstanceArray[urlInstanceArray.length - 1].split('?')[0];

  const urlObject = {};
  urlFormatArray.forEach((element, index) => {
    if (element[0] === ':') {
      urlObject[element.slice(1)] = urlInstanceArray[index];
    }
  });

  const queryParamsObject = Object.fromEntries(new URLSearchParams(queryParams));

  return {
    ...urlObject,
    ...queryParamsObject
  };
}

console.log(urlParser('/:version/api/:collection/:id', '/6/api/listings/3'));
console.log(urlParser('/:version/api/:collection/:id', '/6/api/listings/3?sort=desc&limit=10'));

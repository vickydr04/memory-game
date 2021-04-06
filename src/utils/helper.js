export const shuffle = elem => elem.sort(() => Math.random() - 0.5);

export const duplicateElems = elem => elem.reduce( (res, current) =>  {
  return res.concat([current, {...current}]);
}, []);;

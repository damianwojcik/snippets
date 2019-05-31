const groupByObjectValue = function(arr, property) {
  return Object.values(
    arr.reduce((acc, curr) => {
      (acc[property] = acc[property] || {
        items: [],
      }).items.push(curr);
      return acc;
    }, {}),
  );
};

export default groupByObjectValue;

// compare synchrounous fetch of paginationAPI vs async (promise.all) + execution times
async function fetchPaginationAPI(URL) {
  let response = await axios.get(URL);
  let data = response ? response.data : null;
  const paginationCount = Math.ceil(data.count / 10);
  let promises = [];
  let result = [];

  result.push.apply(result, data.results);

  if (!data.next) {
    return result;
  }

  const nextUrl = data.next.split('=')[0];

  var start = new Date().getTime();

  // for (let page = 2; page <= paginationCount; page++) {
  //   let url = `${nextUrl}=${page}`;
  //   promises.push(axios.get(url));
  // }

  // await axios.all(promises).then(
  //   axios.spread((...responses) => {
  //     responses.forEach(res => {
  //       result.push.apply(result, res.data.results);
  //     });
  //   }),
  // );

  while (data.next !== null) {
    response = await axios.get(data.next);
    data = response ? response.data : null;
    result.push.apply(result, data.results);
  }

  var end = new Date().getTime();

  console.log('EXECUTION TIME', end - start);

  return result;
}

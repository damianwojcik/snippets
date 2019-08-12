const sortDataByObjValue = data => {
  const labelOrder = {
    possession: 1,
    shotoff: 2,
    shoton: 3,
    yellow_cards: 4,
    red_cards: 5,
    offside: 6,
    corner: 7,
    foulcommit: 8,
  };

  data.forEach(team => {
    team.statistics.sort((a, b) => labelOrder[a.code] - labelOrder[b.code]);
  });

  return data;
};

export default sortDataByObjValue;

for (i in t.response.result.Countries.row) {
  // get current country
  country = t.response.result.Countries.row[i].FL[0].content;
  // get current president
  president = t.response.result.Countries.row[i].FL[1].content;
  if (country == 'USA') {
    res.presidents=[{name:president}];
    break;
  }
}
const getQuestions = (endpoint)=> {
  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json);
}

module.exports = { getQuestions };

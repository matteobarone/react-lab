const ENDPOINT = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale.json'

export const fetchData = () => {
  return fetch(ENDPOINT).then((data) => data.json());
}
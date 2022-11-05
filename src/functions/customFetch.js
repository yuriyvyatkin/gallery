export default function customFetch(url, stopLoading) {
  return new Promise((resolve, reject) => {
    fetch(process.env.REACT_APP_API_URL + url + '?format=json')
      .then((response) => {
        if (String(response.status).startsWith('2')) {
          return response.json();
        }

        reject('Загрузка данных не удалась');
      })
      .then((data) => {
        if (data.assets && data.assets.length) {
          resolve(data.assets);
        } else if (typeof data === 'object' && url.startsWith('asset/')) {
          resolve(data);
        } else {
          reject('Нет данных для просмотра!');
        }
      })
      .catch((error) => {
        reject(`Ошибка: ${error}!`);
      })
      .finally(stopLoading);
  });
}

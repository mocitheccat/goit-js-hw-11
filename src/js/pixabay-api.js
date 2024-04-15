const KEY = '43388201-d3d6dfd281aefcb5631baa551';

export function getImages(query) {
  const searchParams = new URLSearchParams({
    key: KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  if (!query) {
    return Promise.reject(new Error('Enter a query'));
  }
  return fetch(`https://pixabay.com/api/?${searchParams.toString()}`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then(data => data.hits)
    .catch(err => {
      console.log(err);
      return null;
    });
}

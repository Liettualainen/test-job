// const URL = 'https://pixabay.com/api/';
// const API_KEY = '30904237-89ef4380cd88db989fbe73792';
// const config = '&image_type=photo&orientation=horizontal&per_page=16';

// export const getImages = (searchText, page) => {
//   return fetch(`${URL}?q=${searchText}&page=${page}&key=${API_KEY}${config}`);
// };



const URL = 'https://6443d159466f7c2b4b5aeb2d.mockapi.io/users';
export const recordsPerPage = 3;
export const usersCount = 12;
export const getUsers = (page) => {
  return fetch(`${URL}?&page=${page}&limit=${recordsPerPage}`);
};
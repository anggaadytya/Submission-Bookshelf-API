const {tambahBuku, menampikanBuku, menampilkanBukuById, mengubahBukuById, menghapusBukuById,} = require('./handler');
  
  const routes = [
    {
      method: 'POST',
      path: '/books',
      handler: tambahBuku,
    },
    {
      method: 'GET',
      path: '/books',
      handler: menampikanBuku,
    },
    {
      method: 'GET',
      path: '/books/{id}',
      handler: menampilkanBukuById,
    },
    {
      method: 'PUT',
      path: '/books/{id}',
      handler: mengubahBukuById,
    },
    {
      method: 'DELETE',
      path: '/books/{id}',
      handler: menghapusBukuById,
    },
  ];
  
  module.exports = routes;
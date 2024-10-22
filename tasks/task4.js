"Ваш код повинен зробити DELETE-запит до вказаного URL, де {userId} – це ID користувача, якого потрібно видалити."
"Поверніть статус відповіді сервера після видалення."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"


function deleteUser(id) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: 'DELETE'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Помилка при видаленні користувача');
    }
    return response;
  })
  .catch(error => {
    console.error('Помилка:', error);
    return null;
  });
}

console.log(deleteUser(1));

module.exports = deleteUser;

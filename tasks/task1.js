"Ваша функція повинна робити GET-запит до вказаного URL і отримати дані."
"Поверніть дані користувачів у форматі масиву"
"Дані мають включати такі поля, як id та name."

"https://jsonplaceholder.typicode.com/users - адреса куди робити запит"

function fetchUsers() {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка мережі');
      }
      return response.json();
    })
    .then(users => {
      return users.map(user => ({
        id: user.id,
        name: user.name
      }));
    })
    .catch(error => {
      console.error('Помилка:', error);
      return []; // Повертаємо порожній масив у разі помилки
    });
}

console.log(fetchUsers())

module.exports = fetchUsers;
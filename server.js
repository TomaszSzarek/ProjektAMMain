// // Importuj potrzebne moduły
// const express = require('express');
// const bodyParser = require('body-parser');
// const jsonServer = require('json-server');

// // Inicjalizuj serwer Express
// const server = express();
// const jsonServerRouter = jsonServer.router('db.json');
// const middlewares = jsonServer.defaults();

// // Middleware do parsowania ciała zapytania jako JSON
// server.use(bodyParser.json());
// //const rejestracja
// // Endpoint rejestracji użytkownika

// function Rejestracja(userData) {
//   server.post('http://192.168.137.1:3004/user',userData)
// }
// module.exports = Rejestracja;


// const Rejestracja = require('./server.js'); 
// Rejestracja(userData);

// server.post('/user', (req, res) => 
// {
//   const {
//     firstName,
//     lastName,
//     phoneNumber,
//     email,
//     password,
//     verificationCode,
//     accountType,
//     country,
//     street,
//     postalCode,
//     city,
//     branch,
//     cards, // Nowe pole zawierające informacje o kartach użytkownika
//   } = req.body;
//   console.log("dziala");
//   // Sprawdzamy, czy użytkownik o podanej nazwie już istnieje
//   const existingUser = jsonServerRouter.db.get('user').find({ verificationCode }).value();

//   if (existingUser) {
//     return res.status(400).json({ message: 'Użytkownik o tej nazwie już istnieje.' });
//   }

//   // Dodaj nowego użytkownika do bazy
//   jsonServerRouter.db.get('user').push({
//     id: Date.now(),
//     firstName,
//     lastName,
//     phoneNumber,
//     email,
//     password,
//     verificationCode,
//     accountType,
//     country,
//     street,
//     postalCode,
//     city,
//     branch,
//     cards: cards.map(card => ({
//       ...card,
//       numerKarty: Math.floor(Math.random() * (999999999999 - 100000000000 + 1)) + 100000000000,
//       status: 'Aktywna',
//       zablokujCzasowo: 0,
//       PIN: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
//       zastrzezKarte: 0,
//       oplataZaBierzacyOkres: 0,
//       terminWaznosci: '02.01.2037',
//       sbezpieczenieKarty: 0,
//       platnosciZblizeniowe: 'włączone',
//     })) || [], // Dodanie informacji o kartach użytkownika
//   }).write();

//   res.json({ message: 'Użytkownik zarejestrowany pomyślnie.' });
// });

// // Endpoint logowania
// server.get('/user', (req, res) => {
  
//   const { verificationCode, password } = req.query;

//   // Sprawdzamy, czy użytkownik o podanym numerze klienta istnieje
//   const register = jsonServerRouter.db.get('user').find({ verificationCode }).value();

//   if (register && register.password === password) {
//     res.json({ message: 'Zalogowano serwer.' });
//   } else {
//     res.status(401).json({ message: 'Błędny login lub hasło.' });
//   }
// });

// // Endpointy obsługiwane przez json-server
// server.use(jsonServerRouter);

// // Dodatkowe middleware dla obsługi błędów
// server.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ message: 'Wystąpił błąd serwera.' });
// });

// // Uruchomienie serwera
// server.use(middlewares);
// server.listen(3004, () => {
//   console.log('Server is running on port 3004');
// });
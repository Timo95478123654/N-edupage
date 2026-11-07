const express = require('express');
const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

let dbData = {
    studentsData: {
        "Timotej": { grades: [1, 1, 2], behavior: ["Pochvala: Vzorná príprava na jazdu"] },
        "Rebeka": { grades: [1, 2, 1], behavior: ["Poznámka: Pozor na prednosť v jazde"] },
        "Eliška": { grades: [1, 1, 1], behavior: ["Pochvala: Výborné zvládnutie trenažéra"] }
    },
    privateMessages: {},
    passwords: { "Olívia": "1055", "Timotej": "", "Eliška": "", "Rebeka": "" },
    scheduleText: "Sobota: 1. Teória predpisov | 2. Trenažér"
};

// Endpoint na načítanie dát
app.get('/api/data', (req, res) => {
    res.json(dbData);
});

// Endpoint na uloženie a okamžitú synchronizáciu dát pre všetkých
app.post('/api/data', (req, res) => {
    dbData = req.body;
    res.json({ success: true });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server beží na porte ${PORT}`);
});

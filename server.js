const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// API-Endpunkt für Bilddateien
app.get('/api/images', (req, res) => {
  const imageDir = path.join(__dirname, 'public', 'fotos');

  fs.readdir(imageDir, (err, files) => {
    if (err) return res.status(500).json({ error: 'Fehler beim Lesen des Ordners' });

    const images = files.filter(file =>
      /\.(jpg|jpeg|png|gif|webp)$/i.test(file)
    );
    res.json(images);
  });
});

app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});

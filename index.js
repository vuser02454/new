const express = require('express');
const cors = require('cors');
const QRcode = require('qrcode');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/generate', async (req, res) => {
  const { text } = req.body;

  if (!text || typeof text !== 'string' || !text.trim()) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const qrCode = await QRcode.toDataURL(text);
    return res.json({ qrCode });
  } catch (err) {
    console.error('QR generation failed:', err);
    return res.status(500).json({ error: 'Failed to generate QR code' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
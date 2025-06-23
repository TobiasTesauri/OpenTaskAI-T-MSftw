
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const cors = require('cors');
const WebSocket = require('ws');

app.use(cors());
app.use(express.json());

const wss = new WebSocket.Server({ server: http });

wss.on('connection', ws => {
  console.log('Client connected via LAN');
  ws.on('message', msg => {
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(msg);
      }
    });
  });
});

app.get('/health', (req, res) => res.send('OK'));

http.listen(3001, () => console.log('Server listening on port 3001'));

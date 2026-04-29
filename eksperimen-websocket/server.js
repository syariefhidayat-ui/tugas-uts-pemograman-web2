const WebSocket = require('ws');

// Membuat server di port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    console.log('Ada pengguna baru terhubung!');

    // Saat menerima pesan
    ws.on('message', (message) => {
        const pesanTeks = message.toString();
        console.log('Pesan diterima: ' + pesanTeks);
        
        // Kirim ke semua yang lagi online
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(pesanTeks);
            }
        });
    });
});

console.log('Server WebSocket jalan di ws://localhost:8080');
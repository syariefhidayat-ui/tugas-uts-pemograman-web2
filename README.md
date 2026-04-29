#Lebih Kencang dari Mantan: Eksperimen Chatting Real-Time Pakai WebSocket!
<br>
#Pendahuluan Pernah nggak sih kalian ngerasa kesel pas lagi nungguin kabar penting di sebuah aplikasi web, tapi kita harus bolak-balik klik tombol refresh cuma buat ngecek ada pesan baru atau nggak? Di zaman yang serba instan ini, cara lama kayak gitu (alias protokol HTTP tradisional) udah mulai kerasa "lemot".
Nah, sebagai mahasiswa Teknik Informatika yang penasaran sama teknologi, saya akhirnya mutusin buat eksperimen langsung nyobain teknologi WebSocket. Katanya sih, ini rahasia di balik aplikasi chat kencang kayak WhatsApp Web atau Telegram. Yuk, intip gimana cara saya ngebongkarnya!
Apa Sih WebSocket Itu? Gampangnya gini: Kalau HTTP biasa itu kayak kita kirim surat (tanya dulu baru dijawab, terus putus), kalau WebSocket itu kayak kita lagi telponan. Sekali nyambung, jalurnya kebuka terus! Server bisa ngasih info ke kita kapan aja tanpa kita harus nanya duluan. Istilah kerennya: Full-Duplex Communication.

<img width="800" height="480" alt="0_BMcqih9bp9STUtMQ" src="https://github.com/user-attachments/assets/123be5e2-035c-421a-9c5d-4e42cec41ad3" />
<br>
#Drama di Balik Eksperimen (Langkah-Langkah) Saya nyobain bikin aplikasi chat super simpel pakai Node.js. Awalnya saya pikir bakal langsung jalan mulus, tapi ternyata dunia coding nggak semanis janji kampanye, Bolo!
1.	Siapin Lab: Saya pakai library ws di Node.js buat jadi servernya.
2.	Koding: Saya bikin server buat nampung koneksi dan file HTML buat tampilannya.
3.	Troubleshooting (Bagian Paling Seru): Pas pertama nyoba, muncul error merah di mana-mana! Dari masalah port yang tabrakan sampai browser yang ngeblokir karena alasan keamanan (Security Origin). Di sini saya belajar kalau port itu ibarat pintu; nggak bisa dua orang masuk pintu yang sama di waktu barengan.
"Meskipun WebSocket sangat cepat, kita tetap harus waspada terhadap celah keamanan seperti CSWSH (Cross-Site WebSocket Hijacking). Jadi, pastikan selalu melakukan validasi pada 'Origin' saat koneksi pertama kali dibuat!"
<img width="552" height="138" alt="Screenshot 2026-04-29 111059" src="https://github.com/user-attachments/assets/5410f06d-6fb4-4635-ad3b-9b56b7f29137" />
<br>
<img width="581" height="330" alt="Screenshot 2026-04-29 114845" src="https://github.com/user-attachments/assets/99e488f6-f8d9-4984-ae80-ae928f598dce" />
<br>
#Hasilnya: IT WORKS! Setelah utak-atik kode dan ganti port, akhirnya "tanda sakti" itu muncul di terminal saya: "Ada pengguna baru terhubung!". Pas saya buka dua tab browser berbeda, saya ngetik di tab A, eh di tab B langsung muncul detik itu juga tanpa perlu di-refresh. Rasanya puas banget!
<img width="1155" height="337" alt="Screenshot 2026-04-29 114401" src="https://github.com/user-attachments/assets/fd16b28a-2357-4d20-97ca-ed43258bf513" />
<br>
<img width="777" height="191" alt="Screenshot 2026-04-29 114311" src="https://github.com/user-attachments/assets/3325e534-725c-463b-9ce6-c058decccbd0" />
<br>
#Kesimpulan WebSocket ini bener-bener game changer buat bikin aplikasi yang interaktif. Bayangin kalau nanti saya terapin di aplikasi layanan publik buat daerah saya, masyarakat nggak perlu nunggu lama lagi buat dapet notifikasi atau update layanan.
Buat temen-temen yang mau belajar, kuncinya satu: Jangan takut ketemu error! Karena dari error itulah kita beneran belajar gimana sistem itu bekerja.

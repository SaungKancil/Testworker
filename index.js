addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // URL VPS Anda
  const vpsUrl = 'https://pro.skcnet.my.id/usr/bin/list-trojan'; // Ganti dengan URL yang tepat ke skrip list.sh di VPS Anda

  // Kirim permintaan ke VPS untuk menjalankan skrip list.sh
  const responseFromVPS = await fetch(vpsUrl, {
    method: 'POST', // Metode POST untuk menjalankan skrip bash
    headers: {
      'Content-Type': 'text/plain', // Tipe konten adalah teks biasa
    },
    // Isi tubuh permintaan dengan teks kosong (tidak ada input yang diperlukan)
    body: '',
  });

  // Ambil respons dari VPS
  const vpsResponse = await responseFromVPS.text();

  // Beri respons ke klien dengan hasil dari skrip list.sh
  return new Response(vpsResponse, {
    headers: { 'content-type': 'text/plain' }, // Ganti dengan tipe konten yang sesuai dengan hasil dari skrip list.sh
  });
}

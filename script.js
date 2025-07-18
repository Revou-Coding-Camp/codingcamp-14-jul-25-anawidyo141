// === 1. Masukkan nama ke bagian Welcome ===
document.addEventListener("DOMContentLoaded", function () {
    const nama = prompt("Masukkan nama Anda:");
    const h1 = document.querySelector(".text-section h1");

    if (nama && nama.trim() !== "") {
        h1.innerHTML = `Welcome ${nama} Di Website kami`;
    } else {
        h1.innerHTML = `Welcome Pengunjung Di Website kami`;
    }
});

// === 2. Validasi Form Hubungi Saya ===
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // agar tidak reload halaman

    // Ambil data form
    const nama = form.nama.value.trim();
    const tanggal = form.tanggal_lahir.value;
    const gender = form.gender.value;
    const pesan = form.pesan.value.trim();

    // Validasi sederhana
    if (!nama || !tanggal || !gender || !pesan) {
        alert("Semua field wajib diisi!");
        return;
    }

    // Tampilkan waktu saat ini
    const now = new Date();
    document.getElementById("currentTime").innerText = "Waktu: " + now.toLocaleString();

    // Masukkan data ke output
    document.getElementById("outputNama").innerText = nama;
    document.getElementById("outputTanggal").innerText = tanggal;
    document.getElementById("outputGender").innerText = gender;
    document.getElementById("outputPesan").innerText = pesan;

    // Tampilkan notifikasi sukses
    alert("Data berhasil terkirim!");

    // Reset form
    form.reset();
});

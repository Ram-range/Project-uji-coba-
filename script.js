// ===== DATA USER =====
let dataUser = {
    nama: "Andi",
    umur: "?",
    kota: "?"
};

// ===== AMBIL DATA DARI USER =====
let namaAwal = prompt("Masukkan nama Anda:");
if (namaAwal) {
    dataUser.nama = namaAwal;
}

let umurAwal = prompt("Masukkan umur Anda:");
if (umurAwal) {
    dataUser.umur = umurAwal;
}

let kotaAwal = prompt("Masukkan kota asal Anda:");
if (kotaAwal) {
    dataUser.kota = kotaAwal;
}

// ===== TAMPILKAN KE HALAMAN =====
document.getElementById("namaUser").innerText = dataUser.nama;
document.getElementById("umurUser").innerText = dataUser.umur;
document.getElementById("kotaUser").innerText = dataUser.kota;

// ===== TOMBOL SAPA =====
document.getElementById("salamBtn").addEventListener("click", function() {
    alert("Halo " + dataUser.nama + "! Semangat terus belajarnya ya! 💪");
});

// ===== TOMBOL GANTI NAMA =====
document.getElementById("gantiNamaBtn").addEventListener("click", function() {
    let namaBaru = prompt("Masukkan nama baru:", dataUser.nama);
    
    if (namaBaru !== null && namaBaru.trim() !== "") {
        dataUser.nama = namaBaru;
        document.getElementById("namaUser").innerText = dataUser.nama;
        alert("Nama berhasil diubah menjadi: " + dataUser.nama);
    } else if (namaBaru !== null && namaBaru.trim() === "") {
        alert("Nama tidak boleh kosong!");
    }
});

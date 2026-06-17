// ===== AMBIL NAMA =====
let namaUser = prompt("Masukkan nama Anda:");
if (namaUser) {
    document.getElementById("namaUser").innerText = namaUser;
}

// ===== AMBIL UMUR =====
let umurUser = prompt("Masukkan umur Anda:");
if (umurUser) {
    document.getElementById("umurUser").innerText = umurUser;
}

// ===== AMBIL KOTA =====
let kotaUser = prompt("Masukkan kota asal Anda:");
if (kotaUser) {
    document.getElementById("kotaUser").innerText = kotaUser;
}

// ===== TOMBOL SAPA =====
document.getElementById("salamBtn").addEventListener("click", function() {
    let nama = document.getElementById("namaUser").innerText;
    alert("Halo " + nama + "! Semangat terus belajarnya ya! 💪");
});

// ===== TOMBOL GANTI NAMA =====
document.getElementById("gantiNamaBtn").addEventListener("click", function() {
    let namaBaru = prompt("Masukkan nama baru:");
    if (namaBaru) {
        document.getElementById("namaUser").innerText = namaBaru;
    }
});

// Ubah nama user
let namaUser = prompt("Masukkan nama Anda:");
if (namaUser) {
    <button id="gantiNamaBtn">Ganti Nama</button>
    document.getElementById("namaUser").innerText = namaUser;
}

// ubah umur user
let umurUser = prompt("Masukkan umur Anda:");
if (umurUser) {
    <button id="gantiNamaBtn">Ganti umur</button>
    document.getElementById("umurUser").innerText = umurUser;
}

// Tombol sapa
document.getElementById("salamBtn").addEventListener("click", function() {
    let nama = document.getElementById("namaUser").innerText;
    alert("Halo " + nama + "! Semangat terus belajarnya ya! 🚀");
});

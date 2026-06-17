// Ubah nama user
let namaUser = prompt("Masukkan nama Anda:");
if (namaUser) {
    document.getElementById("namaUser").innerText = namaUser;
}

// ubah umur user
let umurUser = prompt("Masukkan umur Anda:");
if (umurUser) {
    document.getElementById("umurUser").innerText = umurUser;
}

// Tombol sapa
document.getElementById("salamBtn").addEventListener("click", function() {
    let nama = document.getElementById("namaUser").innerText;
    alert("Halo " + nama + "! Semangat terus belajarnya ya! 🚀");
});

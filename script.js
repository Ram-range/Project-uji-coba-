// Ubah nama user
let namaUser = prompt("Masukkan nama Anda:");
if (namaUser) {
    document.getElementById("namaUser").innerText = namaUser;
}

// Tombol sapa
document.getElementById("salamBtn").addEventListener("click", function() {
    let nama = document.getElementById("namaUser").innerText;
    alert("Halo " + nama + "! Semangat terus belajarnya ya! 🚀");
});

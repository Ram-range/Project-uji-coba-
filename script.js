alert("JS berjalan!");

let namaUser = prompt("Masukkan nama Anda:");
if (namaUser) {
    document.getElementById("namaUser").innerText = namaUser;
}

document.getElementById("salamBtn").addEventListener("click", function() {
    let nama = document.getElementById("namaUser").innerText;
    alert("Halo " + nama + "!");
});

document.getElementById("gantiNamaBtn").addEventListener("click", function() {
    alert("Tombol ganti nama diklik!");
    let namaBaru = prompt("Masukkan nama baru:");
    if (namaBaru) {
        document.getElementById("namaUser").innerText = namaBaru;
    }
});

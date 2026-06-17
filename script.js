document.getElementById("gantiNamaBtn").addEventListener("click", function() {
    let namaBaru = prompt("Masukkan nama baru:");
    
    if (namaBaru === null) {
        // User klik Cancel → gak usah ngapa-ngapain
        return;
    }
    
    if (namaBaru.trim() === "") {
        // User klik OK tapi kosong → kasih peringatan
        alert("Nama tidak boleh kosong!");
    } else {
        // User isi nama → ganti nama
        document.getElementById("namaUser").innerText = namaBaru;
    }
});

// if statement
const kasir = "Vina";
let ucapan;

if (kasir != null) {
  ucapan = `Selamat datang ${kasir}`;
} else {
  ucapan = `Silahkan Masukan Nama Anda`;
}

document.writeln(`<p>${ucapan}</p>`);

//Ternary operator
nilai = 81;
const kalimat = nilai >= 80 ? "Selamat Anda Lulus Dengan Nilai A" : nilai >= 70 ? "Selamat Anda Lulus Dengan Nilai B" : "Silahkan Coba Lagi";
document.writeln(`<p>${kalimat}</p>`);

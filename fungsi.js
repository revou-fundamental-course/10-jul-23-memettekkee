function hitung(event) {
    event.preventDefault()
    let berat = document.getElementById("input-berat").value;
    let tinggi = document.getElementById("input-tinggi").value;
    /* diatas adalah pendeklarasian dari html sebelum dibuat operatornya */

    let hasil = parseFloat(berat) / (parseFloat(tinggi) * parseFloat(tinggi));
    let keterangan = null;
    let keterangan1 = null;
    let keterangan2 = null;
    /* operator serta deklarasi variabel tertentu bernilai null */
    

    let kata = "Hasil BMI adalah"

    if(hasil < 18.5){
        keterangan = "Kekurangan BB"
        keterangan1 = hasil
        keterangan2 = "perlu beberapa tambahan kalori, bisa berupa bulking"
    } else if (hasil < 25) {
        keterangan = "Normal"
        keterangan1 = hasil
        keterangan2 = "sudah semestinya, pola hidup tetap dijaga agar seimbang"
    } else if (hasil < 30) {
        keterangan = "Kelebihan BB"
        keterangan1 = hasil
        keterangan2 = "Mungkin dengan melakukan beberapa aktivitas fisik tambahan dan mengurangi kadar lemak agar ideal"
    } else if (hasil >= 30) {
        keterangan = "Obesitas"
        keterangan1 = hasil
        keterangan2 = "ini perlu di atasi dengan : <br> - Olahraga <br> - Atur Pola Makan <br> - Pola Tidur yang baik"
    }
    /* dengan memakai if & else sebagai pengkondisiannya, lalu variabel yang null tadi diisi sesuai berapa hasilnya yang keluar */

    document.querySelector("#kata").innerHTML = kata
    document.querySelector("#hasilbmi").innerHTML = keterangan1 
    document.querySelector("#hasilbmi1").innerHTML = keterangan
    document.querySelector("#hasilbmi2").innerHTML = keterangan2
    /* ini akan menampilkan ke file html sesuai dengan "id" yang diambil */
}
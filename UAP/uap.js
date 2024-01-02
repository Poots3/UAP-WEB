const barangData = [
    {kode: '001', barang: 'A', Harga: '10.000'},
    {kode: '002', barang: 'B', Harga: '20.000'},
    {kode: '003', barang: 'C', Harga: '30.000'},
];
function tampilkanDataBarang(){
    const barangTable = document.getElementById('barangTable');
    barangData.forEach((barang, index) =>{
        const row = barangTable.insertRow(index + 1);
        const kodeCell = row.insertCell(0);
        const namaCell = row.insertCell(1);
        const hargaCell = row.insertCell(2);
        kodeCell.textContent = barang.kode;
        kodeCell.textContent = barang.nama;
        kodeCell.textContent = barang.harga;
    }

    )
};
document.addEventListener('DOMContentLoaded', () => {
    tampilkanDataBarang();
})

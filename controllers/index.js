
var nhanVien = new NhanVien();

document.querySelector('#btnXacNhan').onclick = function (event) {
    nhanVien.maNhanVien = document.querySelector('#maNV').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNV').value;
    nhanVien.heSoCV = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCB').value;
    nhanVien.soGioLam = document.querySelector('#soGioLam').value;
    var arrSelect = document.querySelector('#chucVu').options;
    var chucVuindex = document.querySelector('#chucVu');
    nhanVien.chucVu = arrSelect[chucVuindex.selectedIndex].innerHTML;
    var trNV = document.createElement('tr');
    trNV.className = 'text-center  border-bottom';
    var tdMaNV = document.createElement('td');
    tdMaNV.innerHTML = nhanVien.maNhanVien;
    var tdTenNV = document.createElement('td');
    tdTenNV.innerHTML = nhanVien.tenNhanVien;
    var tdChucVuNV = document.createElement('td');
    tdChucVuNV.innerHTML = nhanVien.chucVu;
    var tdLuongCB = document.createElement('td');
    tdLuongCB.innerHTML = nhanVien.luongCoBan;
    var tdTongLuong = document.createElement('td');
    tdTongLuong.innerHTML = nhanVien.tinhLuong();
    var tdGioLam = document.createElement('td');
    tdGioLam.innerHTML = nhanVien.soGioLam;
    var tdXLNV = document.createElement('td');
    tdXLNV.innerHTML = nhanVien.xepLoai();
    var tdXLNV = document.createElement('td');
    tdXLNV.innerHTML = nhanVien.xepLoai();

    trNV.appendChild(tdMaNV);
    trNV.appendChild(tdTenNV);
    trNV.appendChild(tdChucVuNV);
    trNV.appendChild(tdLuongCB);
    trNV.appendChild(tdTongLuong);
    trNV.appendChild(tdGioLam);
    trNV.appendChild(tdXLNV);
    var delBTN = document.createElement('td');
    var buttonDel = document.createElement('button')
    buttonDel.innerHTML = 'Xóa';
    buttonDel.className = 'btn btn-danger';
    delBTN.appendChild(buttonDel);
    trNV.appendChild(delBTN);
    buttonDel.onclick = function (event) {//biến event là js trả ra cho từng sự kiện
        let btnXoa = event.target;//event.target chính là thẻ xảy ra sự kiện
        // TỪ thẻ con dom đến thẻ cha
        // let tdCN = btnXoa.parentNode;
        // let trSinhVien = tdCN.parentNode;
        let trSinhVien = btnXoa.closest('tr');
        trSinhVien.remove();
    }
    document.querySelector('#tblNhanVien').appendChild(trNV);
}
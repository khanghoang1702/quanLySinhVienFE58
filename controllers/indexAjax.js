
var validate = new Validation();
var renderTableNV = function (arrNhanVien) {
    var content = '';
    for (var i = 0; i < arrNhanVien.length; i++) {
        var nhanVien = arrNhanVien[i];
        var nv = new NhanVien(nhanVien.maNhanVien, nhanVien.tenNhanVien, nhanVien.chucVu, nhanVien.heSoChucVu,
            nhanVien.luongCoBan, nhanVien.soGioLamTrongThang);

        content += `
            <tr>
                <td>${nv.maNhanVien}</td>
                <td>${nv.tenNhanVien}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.luongCoBan}</td>
                <td>${nv.tinhLuong()}</td>
                <td>${nv.soGioLamTrongThang}</td>
                <td>${nv.xepLoai()}</td>
                <td>
                
                <button class="btn btn-danger" onclick="xoaNhanVien('${nv.maNhanVien}')" >Xoá</button>
                
                <button class="btn btn-danger" onclick="chinhSua('${nv.maNhanVien}')" >Chỉnh sửa</button>
                </td>
            </tr>
        `
    }
    document.querySelector('#tblNhanVien').innerHTML = content;
}
var renderNhanVien = function () {
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayDanhSachNhanVien',
        method: 'GET',
        responseType: 'json'
    });
    promise.then(function (result) {
        console.log(result.data)
        renderTableNV(result.data);
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });

}
renderNhanVien();
document.querySelector('#btnXacNhan').onclick = function () {
    var nhanVien = new NhanVien();
    nhanVien.maNhanVien = document.querySelector('#maNV').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNV').value;
    nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCB').value;
    nhanVien.soGioLamTrongThang = document.querySelector('#soGioLam').value;
    var arrSelect = document.querySelector('#chucVu').options;
    var chucVuindex = document.querySelector('#chucVu');
    nhanVien.chucVu = arrSelect[chucVuindex.selectedIndex].innerHTML;
    var valid = true;
    valid &= validate.kiemTraRong('#maNV', 'Mã nhân viên', '#kiemTraRong_maNV')
        & validate.kiemTraRong('#tenNV', 'Tên nhân viên', '#kiemTraRong_tenNV') & validate.kiemTraRong('#luongCB', 'Lương', '#kiemTraRong_luongCB')
        & validate.kiemTraRong('#soGioLam', 'Số giờ làm', '#kiemTraRong_soGioLam');
    valid &= validate.kiemTraTatCaSo('#maNV', 'Mã nhân viên', '#kiemTraSo_maNV');
    valid &= validate.kiemTraDoDai('#maNV', 'Mã nhân viên', '#kiemTraDoDai_maNV', 4, 6);
    valid &= validate.kiemTraTatCaChu('#tenNV', 'Tên nhân viên', '#kiemTraChu_tenNV');
    valid &= validate.kiemTraGiaTri('#luongCB', 'Lương nhân viên', '#kiemTraLuong', 1000000, 20000000, 'triệu');
    valid &= validate.kiemTraGiaTri('#soGioLam', 'Số giờ làm', '#kiemTraGio', 50, 150, 'tiếng');
    if (!valid) {
        return;
    }
    var promise = axios({
        url: 'http://svcy.myclass.vn/api/QuanLyNhanVienApi/ThemNhanVien',
        method: 'POST',
        data: nhanVien,
        responseType: 'json'
    });
    promise.then(function (result) {
        console.log(result.data);
        renderNhanVien(result.data);
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}

window.xoaNhanVien = function (maNhanVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/XoaNhanVien?maSinhVien=${maNhanVien}`,
        method: 'DELETE',
    });
    promise.then(function (result) {
        console.log(result.data);
        renderNhanVien(result.data);
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}
window.chinhSua = function (maNhanVien) {
    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/LayThongTinNhanVien?maNhanVien=${maNhanVien}`,
        method: 'GET',
    });
    promise.then(function (result) {
        console.log(result.data);
        var nv = result.data;
        document.querySelector('#maNV').value = nv.maNhanVien;
        document.querySelector('#tenNV').value = nv.tenNhanVien;
        document.querySelector('#chucVu').value = nv.heSoChucVu;
        document.querySelector('#luongCB').value = nv.luongCoBan;
        document.querySelector('#soGioLam').value = nv.soGioLamTrongThang;
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}
document.querySelector('#btnCapNhat').onclick = function (maNhanVien) {
    var nhanVien = new NhanVien();
    nhanVien.maNhanVien = document.querySelector('#maNV').value;
    nhanVien.tenNhanVien = document.querySelector('#tenNV').value;
    nhanVien.heSoChucVu = document.querySelector('#chucVu').value;
    nhanVien.luongCoBan = document.querySelector('#luongCB').value;
    nhanVien.soGioLamTrongThang = document.querySelector('#soGioLam').value;
    var arrSelect = document.querySelector('#chucVu').options;
    var chucVuindex = document.querySelector('#chucVu');
    nhanVien.chucVu = arrSelect[chucVuindex.selectedIndex].innerHTML;
    var promise = axios({
        url: `http://svcy.myclass.vn/api/QuanLyNhanVienApi/CapNhatThongTinNhanVien?maNhanVien=${nhanVien.maNhanVien}`,
        method: 'PUT',
        data: nhanVien,
        responseType: 'json'
    });
    promise.then(function (result) {
        console.log(result.data);
        renderNhanVien();
    });
    promise.catch(function (error) {
        console.log(error.response.data);
    });
}
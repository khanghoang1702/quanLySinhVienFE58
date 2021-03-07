var NhanVien = function (maNV, tenNV, chucVu, heSoCV, luongCB, soGioLam) {
    this.maNhanVien = maNV,
        this.tenNhanVien = tenNV,
        this.chucVu = chucVu,
        this.heSoChucVu = heSoCV,
        this.luongCoBan = luongCB,
        this.soGioLamTrongThang = soGioLam,
        this.tinhLuong = function () {
            var tongLuong = Number(this.luongCoBan) * Number(this.heSoChucVu);
            return tongLuong;
        }
    this.xepLoai = function () {
        var xloai = '';
        if (this.soGioLamTrongThang > 120) {
            xloai = 'Nhân viên xuất xắc';
        }
        else if (this.soGioLamTrongThang > 100 && this.soGioLamTrongThang <= 120) {
            xloai = 'Nhân viên giỏi';
        }
        else if (this.soGioLamTrongThang > 80 && this.soGioLamTrongThang <= 100) {
            xloai = 'Nhân viên khá';
        }
        else if (this.soGioLamTrongThang > 50 && this.soGioLamTrongThang <= 80) {
            xloai = 'Nhân viên trung bình';
        }
        else {
            xloai = 'Nhân viên kém';
        }
        return xloai;
    }
}
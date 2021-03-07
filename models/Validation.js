var Validation = function () {

    this.kiemTraRong = function (selector, name, error_selector) {

        if (document.querySelector(selector).value.trim() === '') {
            document.querySelector(error_selector).innerHTML = name + ' không được bỏ trống!';
            return false;
        }

        document.querySelector(error_selector).innerHTML = '';
        return true;

    }
    this.kiemTraTatCaSo = function (selector, name, error_selector) {
        var regex = /^[0-9]+$/;
        //Kiểm tra đúng định dạng return true
        if (regex.test(document.querySelector(selector).value)) {
            document.querySelector(error_selector).innerHTML = '';
            return true;
        }

        document.querySelector(error_selector).innerHTML = name + ' phải là số!';
        return false;
    }
    this.kiemTraTatCaChu = function (selector, name, error_selector) {
        var regex = /^[a-zA-Z]+$/;
        //Kiểm tra đúng định dạng return true
        if (regex.test(document.querySelector(selector).value)) {
            document.querySelector(error_selector).innerHTML = '';
            return true;
        }

        document.querySelector(error_selector).innerHTML = name + ' phải là chữ!';
        return false;
    }
    this.kiemTraDoDai = function (selector, name, error_selector, minLength, maxLength) {
        var value = document.querySelector(selector).value;
        if (value.length < minLength || value.length > maxLength) {
            document.querySelector(error_selector).innerHTML = `${name} từ ${minLength} đến ${maxLength} ký tự!`;
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }

    this.kiemTraGiaTri = function (selector, name, error_selector, minValue, maxValue, donVi) {
        var value = document.querySelector(selector).value;
        if (Number(value) < minValue || Number(value) > maxValue) {
            document.querySelector(error_selector).innerHTML = `${name} từ ${minValue} đến ${maxValue} ${donVi}!`;
            return false;
        }
        document.querySelector(error_selector).innerHTML = '';
        return true;
    }
    this.kiemTraQRCode = function () {
        console.log('check QR code')
    }
    this.chucNangDevA = function () {
        console.log('Dev A')
    }
}
/**
 * Hàm hỗ trợ hiển thị kết quả ra màn hình (DOM bằng ID)
 * @param {string} idElement - ID của thẻ chứa kết quả
 * @param {string} noiDung - Văn bản hoặc HTML cần hiển thị
 */
function hienThiKetQua(idElement, noiDung) {
    let el = document.getElementById(idElement);
    if (el) {
        el.innerHTML = noiDung;
        el.style.display = "block"; // Hiển thị khung kết quả lên giao diện
    }
}

// --- BÀI 1: TÍNH TIỀN LƯƠNG NHÂN VIÊN ---
function tinhLuong() {
    // 1. Input
    const luong1Ngay = 100000;
    const soNgayLam = Number(document.getElementById('soNgayLam').value);

    // 2. Process
    const tongLuong = luong1Ngay * soNgayLam;

    // 3. Output
    hienThiKetQua('txtLuong', `Tổng tiền lương: ${tongLuong.toLocaleString('vi-VN')} VND`);
}

// --- BÀI 2: TÍNH GIÁ TRỊ TRUNG BÌNH ---
function tinhTrungBinh() {
    // 1. Input
    const n1 = Number(document.getElementById('num1').value);
    const n2 = Number(document.getElementById('num2').value);
    const n3 = Number(document.getElementById('num3').value);
    const n4 = Number(document.getElementById('num4').value);
    const n5 = Number(document.getElementById('num5').value);

    // 2. Process
    const trungBinh = (n1 + n2 + n3 + n4 + n5) / 5;

    // 3. Output
    hienThiKetQua('txtTrungBinh', `Giá trị trung bình: ${trungBinh}`);
}

// --- BÀI 3: QUY ĐỔI TIỀN (USD -> VND) ---
function quyDoiTien() {
    // 1. Input
    const tiGia = 23500;
    const usd = Number(document.getElementById('usd').value);

    // 2. Process
    const vnd = usd * tiGia;

    // 3. Output
    hienThiKetQua('txtQuyDoi', `Số tiền sau quy đổi: ${vnd.toLocaleString('vi-VN')} VND`);
}

// --- BÀI 4: TÍNH DIỆN TÍCH, CHU VI HCN ---
function tinhHCN() {
    // 1. Input
    const dai = Number(document.getElementById('chieuDai').value);
    const rong = Number(document.getElementById('chieuRong').value);

    // 2. Process
    const dienTich = dai * rong;
    const chuVi = (dai + rong) * 2;

    // 3. Output
    hienThiKetQua('txtHCN', `Diện tích: ${dienTich} | Chu vi: ${chuVi}`);
}

// --- BÀI 5: TÍNH TỔNG 2 KÝ SỐ ---
function tinhTongKySo() {
    // 1. Input
    const so = Number(document.getElementById('so2ChuSo').value);

    // 2. Process
    // Lấy số hàng đơn vị bằng phép chia lấy dư (%)
    const so_hang_dv = so % 10;
    // Lấy số hàng chục bằng phép chia rồi làm tròn xuống phần nguyên
    const so_hang_chuc = Math.floor(so / 10); 
    const tong = so_hang_dv + so_hang_chuc;

    // 3. Output
    hienThiKetQua('txtKySo', `Tổng 2 ký số của số ${so} là: ${so_hang_chuc} + ${so_hang_dv} = ${tong}`);
}
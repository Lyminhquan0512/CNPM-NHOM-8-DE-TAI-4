function tinhGiaVon(sanPham, giaVangHienTai) {
  return giaVangHienTai * sanPham.trongLuong + sanPham.tienCong + sanPham.tienDa;
}

function tinhGiaBan(giaVon, tiLeApGia) {
  return giaVon * tiLeApGia;
}

function tinhChietKhau(chietKhauKhuyenMai, chietKhauKhachHang) {
  return chietKhauKhuyenMai + chietKhauKhachHang;
}

function tinhGiaMuaLai(sanPham, giaBan, giaVangHienTai, tiLeMuaLaiDaQuy) {
  if (sanPham.loai === 'vang') {
    // Tính toán dựa trên trọng lượng vàng và giá vàng hiện tại
  } else if (sanPham.loai === 'da_quy') {
    return giaBan * tiLeMuaLaiDaQuy;
  }
}

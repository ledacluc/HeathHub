<?php
class UserModel extends Model {
    //check email da ton tai chua
    public function findByEmail($email) {
        $stmt = $this->db->prepare(
            "SELECT * FROM users WHERE email = ?"
        );
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
    //sau đó tạo hàm kiểm tra số điện thoại đã tồn tại chưa
    public function finByPhone($phone) {
        $stmt = $this->db->prepare(
            "SELECT * FROM users WHERE phone = ?"
        );
        $stmt->execute([$phone]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    // TẠO NGƯỜI DÙNG MỚI
    public function create($data) {
        $stmt = $this->db->prepare(
            "INSERT INTO users (fullname, email, phone, password, role)
             VALUES (?, ?, ?, ?, ?)"
        );

        return $stmt->execute([
            $data['fullname'],
            $data['email'],
            $data['phone'],
            password_hash($data['password'], PASSWORD_DEFAULT),
            $data['role']
        ]);
    }


    //HÀM LOGIN 
    //Kt NGƯỜI DÙNG ĐĂNG NHẬP CÓ THỂ DÙNG EMAIL HOẶC SỐ ĐIỆN THOẠI
    public function findByEmailOrPhone($value) {
    $stmt = $this->db->prepare(
        "SELECT * FROM users WHERE email = ? OR phone = ?"
    );
    $stmt->execute([$value, $value]);
    return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function logout() {
    session_destroy();
    echo json_encode(["success" => true]);
}

}

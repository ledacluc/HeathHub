<?php
class UserModel extends Model {

    public function findByEmail($email) {
        $stmt = $this->db->prepare(
            "SELECT * FROM users WHERE email = ?"
        );
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

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
}

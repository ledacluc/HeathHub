<?php
class UserModel extends Model {
    public function findByEmail($email){
        $stmt = $this->dbname->prepare("SELECT * FROM users WHERE email = ?");
        $stmt->execute([$email]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data){
        $stmt = $this->dbname->prepare(
            "INSERT INTO users (name, email, password) VALUES (?, ?, ?)"
        );
        return $stmt->execute([
            $data['name'], 
            $data['email'],
            password_hash($data['password'], PASSWORD_BCRYPT)]);
    }
}
?>
<?php

class AuthController extends Controller {

    //  ĐĂNG KÝ 
    public function signup() {
        header('Content-Type: application/json; charset=utf-8');

        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            echo json_encode([
                'success' => false,
                'message' => 'Du lieu khong hop le'
            ]);
            return;
        }

        $userModel = $this->model('UserModel');

        if ($userModel->findByEmail($data['email'])) {
            echo json_encode([
                'success' => false,
                'message' => 'Email da ton tai'
            ]);
            return;
        }

        if ($userModel->findByPhone($data['phone'])) {
            echo json_encode([
                'success' => false,
                'message' => 'So dien thoai da ton tai'
            ]);
            return;
        }

        $userModel->create($data);

        echo json_encode([
            'success' => true,
            'message' => 'Dang ky thanh cong'
        ]);
    }

    // ĐĂNG NHẬP 
    public function login() {
        header('Content-Type: application/json; charset=utf-8');

        $data = json_decode(file_get_contents("php://input"), true);

        if (!$data) {
            echo json_encode([
                'success' => false,
                'message' => 'Du lieu khong hop le'
            ]);
            return;
        }

        $login = $data['login'];
        $password = $data['password'];

        $userModel = $this->model('UserModel');
        $user = $userModel->findByEmailOrPhone($login);

        if (!$user || !password_verify($password, $user['password'])) {
            echo json_encode([
                'success' => false,
                'message' => 'Sai tai khoan hoac mat khau'
            ]);
            return;
        }

        $_SESSION['user'] = [
            'id' => $user['id'],
            'fullname' => $user['fullname'],
            'role' => $user['role'],
            'email' => $user['email'],
            'phone' => $user['phone']
        ];

        echo json_encode([
            'success' => true,
            'message' => 'Dang nhap thanh cong'
        ]);
    }

    //  KIỂM TRA ĐĂNG NHẬP 
    public function me() {
        header('Content-Type: application/json; charset=utf-8');

        if (!isset($_SESSION['user'])) {
            echo json_encode([
                'loggedIn' => false
            ]);
            return;
        }

        echo json_encode([
            'loggedIn' => true,
            'user' => $_SESSION['user']
        ]);
    }

    //  ĐĂNG XUẤT 
    public function logout() {
        session_destroy();
        echo json_encode([
            'success' => true
        ]);
    }
}

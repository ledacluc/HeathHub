<?php
//KẾ THỪA CONTROLLER
class AuthController extends Controller {
    public function signup(){
        // nhan json ut clien gui len
        header('Content-Type: application/json; charset=utf-8');
        $data = json_decode(file_get_contents("php://input"), true);

        if(!$data){
            echo json_encode([
                'success' => false,
                'message' => 'Du lieu khong hop le'
            ]);;
            return;
        }


        $userModel = $this->model('UserModel');

        //kiem tra neu email da ton tai
        if($userModel->findByEmail($data['email'])){
            echo json_encode([
                'success' => false,
                'message' => 'Email da ton tai'
            ]);
            return;
        }
        // create user
        $userModel->create($data);
        echo json_encode([
            'success' => true,
            'message' => 'Dang ky thanh cong'
        ]);

    }
}

?>
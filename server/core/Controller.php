<?php
class Controller {
    public function model($model){
      require_once '../models/$model.php';
      return new $model();
    }
    // Hàm load view trả về giao diện (view) cùng với dữ liệu (data)
    public function view($view, $data = []){
        extract($data);
        require_once '../views/$view.php';
    }
    // nếu không tồn tại user thì chuyển hướng đến trang đăng nhập
    protected function requireLogin (){
        if(!isset($_SESSION['user'])){
            header('Location: ' . BASE_URL . '/login');
            exit;
        }
    }
}
?>
<?php

class App {

    public function __construct() {

        $url = isset($_GET['url']) ? '/' . trim($_GET['url'], '/') : '/';

        require_once "../routes/api.php";
        global $router;

        $method = $_SERVER['REQUEST_METHOD'];

        if (!$router->dispatch($method, $url)) {
            http_response_code(404);
            echo json_encode([
                'success' => false,
                'message' => 'duong dan khong tim thay!'
            ]);
        }
    }
}
?>
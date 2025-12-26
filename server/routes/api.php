<?php
require_once "../core/Router.php";

global $router;
$router = new Router();

// GET để test
$router->get('/signup', 'AuthController@signup');

// POST xử lý đăng ký thật
$router->post('/signup', 'AuthController@signup');
// POST xử lý đăng nhập
$router->post('/login', 'AuthController@login');
$router->get('/login', 'AuthController@login'); // để test GET
// GET thông tin user hiện tại
$router->get('/me', 'AuthController@me');
// POST xử lý đăng xuất
$router->post('/logout', 'AuthController@logout');

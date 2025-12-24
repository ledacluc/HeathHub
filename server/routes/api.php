<?php
require_once "../core/Router.php";

global $router;
$router = new Router();

// GET để test
$router->get('/signup', 'AuthController@signup');

// POST xử lý đăng ký thật
$router->post('/signup', 'AuthController@signup');

<?php
session_start();

require_once '../config/dbconnect.php';
require_once '../config/config.php';

// load core TRƯỚC
require_once '../core/Controller.php';
require_once '../core/Model.php';
require_once '../core/App.php';


$app = new App();
?>


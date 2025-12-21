<?php
class Model {
    protected $dbname;

    public function __construct() {
        global $pdo;
        $this->dbname = $pdo;
    } 
}
?>
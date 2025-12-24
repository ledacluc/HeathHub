<?php

class Router {

    private $routes = [];

    // xử lý GET
    public function get($uri, $action) {
        $this->routes['GET'][$uri] = $action;
    }

    // xử lý POST
    public function post($uri, $action) {
        $this->routes['POST'][$uri] = $action;
    }

    public function dispatch($method, $uri) {

        if (!isset($this->routes[$method][$uri])) {
            return false;
        }

        [$controller, $action] = explode('@', $this->routes[$method][$uri]);

        // load controller cha + controller con
      
        require_once "../controllers/$controller.php";

        $obj = new $controller();
        $obj->$action();

        return true;
    }
}

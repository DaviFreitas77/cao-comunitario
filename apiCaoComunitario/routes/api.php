<?php

use App\Http\Controllers\CadastroController;
use App\Http\Controllers\GeneroController;
use App\Http\Controllers\IdadeControler;
use App\Http\Controllers\TipoPetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::post('/cadastroUsuario',[CadastroController::class,('store')]);

Route::post('/loginUsuario',[CadastroController::class,('login')]);

Route::get('/genero',[GeneroController::class,('index')]);

Route::get('/idade',[IdadeControler::class,('index')]);

Route::get('/tipoPet',[TipoPetController::class,('index')]);




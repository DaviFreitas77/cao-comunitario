<?php

use App\Http\Controllers\CadastroPetController;
use App\Http\Controllers\cuidadoConroller;
use App\Http\Controllers\generoController;
use App\Http\Controllers\idadeController;
use App\Http\Controllers\TemperamentoController;
use App\Http\Controllers\tipoController;
use App\Http\Controllers\usuarioController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/genero',[generoController::class,('index')]);
Route::get('/cuidado',[cuidadoConroller::class,('index')]);
Route::get('/temperamento',[TemperamentoController::class,('index')]);
Route::get('/tipoPet',[tipoController::class,('index')]);
Route::get('/idade',[idadeController::class,('index')]);
Route::get('/pets',[CadastroPetController::class,('index')]);


Route::post('/cadastroUsuario',[usuarioController::class,('store')]);
Route::post('/login',[usuarioController::class,('login')]);

Route::post('/cadastroPet',[CadastroPetController::class,('store')]);
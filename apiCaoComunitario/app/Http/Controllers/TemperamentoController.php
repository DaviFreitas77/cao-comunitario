<?php

namespace App\Http\Controllers;

use App\Models\Temperamento;
use Illuminate\Http\Request;

class TemperamentoController extends Controller
{
    public function index(){

        $temperamento_pet = Temperamento::all();

        return response()->json($temperamento_pet);
    }
}

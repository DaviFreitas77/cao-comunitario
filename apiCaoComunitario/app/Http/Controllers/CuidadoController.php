<?php

namespace App\Http\Controllers;

use App\Models\Cuidados;
use Illuminate\Http\Request;

class CuidadoController extends Controller
{
    public function index(){
        $cuidados_especiais = Cuidados::all();
        return response()->json($cuidados_especiais);
    }
}

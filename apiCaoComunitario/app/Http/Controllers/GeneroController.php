<?php

namespace App\Http\Controllers;

use App\Models\GeneroPet;
use Illuminate\Http\Request;

class GeneroController extends Controller
{
    public function index(){
        $genero = GeneroPet::all();
        return response()->json($genero);
    }
}

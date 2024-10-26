<?php

namespace App\Http\Controllers;

use App\Models\TipoPet;
use Illuminate\Http\Request;

class TipoPetController extends Controller
{
    public function index(){
        $tipoPet = TipoPet::all();

        return response()->json($tipoPet);
    }
}

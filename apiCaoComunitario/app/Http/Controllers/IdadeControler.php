<?php

namespace App\Http\Controllers;

use App\Models\IdadePet;
use Illuminate\Http\Request;

class IdadeControler extends Controller
{
    public function index()
    {
        $idade = IdadePet::all();

        return response()->json($idade);
    }
}

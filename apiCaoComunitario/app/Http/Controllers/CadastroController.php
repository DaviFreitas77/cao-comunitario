<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\usuario;
use Illuminate\Http\Request;

class CadastroController extends Controller
{
    public function store(Request $request){
        $usuario = new usuario;
        $usuario->nome_usuario = $request->nome_usuario;
        $usuario->email_usuario = $request->email_usuario;
        $usuario->tel_usuario = $request->tel_usuario;
        $usuario->senha_usuario = $request->senha_usuario;

        $usuario->save();
    }


    public function login(Request $request)
    {
        // Verifica se o admin existe
        $admin = Admin::where('email_admin', $request->email)->first();
    
        if ($admin && $request->senha === $admin->senha_admin) {
            return response()->json([
                'message' => 'Login como administrador bem-sucedido'
            ], 200);
        }
    
      
        $usuario = Usuario::where('email_usuario', $request->email)->first();
    
        if ($usuario && $request->senha === $usuario->senha_usuario) {
            return response()->json([
                'message' => 'Login como usuário bem-sucedido.'
            ], 200);
        }
    
  
        return response()->json([
            'message' => 'Credenciais inválidas.'
        ], 401);
    }
}

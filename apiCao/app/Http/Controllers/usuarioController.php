<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Models\Admin;
use Illuminate\Http\Request;

class usuarioController extends Controller
{
    public function store(Request $request)
    {
        $usuario = new Usuario();
        $usuario->nome_usuario = $request->nome_usuario;
        $usuario->email_usuario = $request->email_usuario;
        $usuario->senha_usuario = $request->senha_usuario;
        $usuario->numero_usuario = $request->telefone_usuario;
        $usuario->imagem_usuario = $request->imagem_usuario;

        $usuario->save();

        return response()->json([
            'message' =>'usuario cadastrado'
        ],200);

    }

    public function login(Request $request)
    {

        $admin = Admin::where('email_admin', $request->email)->first();

        if ($admin && $request->senha === $admin->senha_admin) {
            return response()->json([
                  'message' => 'Login como administrador bem-sucedido'
            ],200);
        }

        $usuario = Usuario::where('email_usuario',$request->email)->first();

        if($usuario && $request->senha === $usuario->senha_usuario){
            return response()->json([
                    'message' => 'Login como usuário bem-sucedido.',
                    $usuario
            ],200);
        }

        return response()->json([
            'message' => 'Credenciais inválidas.'
        ], 401);
    }
}

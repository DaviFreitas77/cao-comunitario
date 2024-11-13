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
            'message' => 'usuario cadastrado'
        ], 200);
    }

    public function login(Request $request)
    {

        $admin = Admin::where('email_admin', $request->email)->first();

        if ($admin && $request->senha === $admin->senha_admin) {
            return response()->json([
                'message' => 'Login como administrador bem-sucedido'
            ], 200);
        }

        $usuario = Usuario::where('email_usuario', $request->email)->first();

        if ($usuario && $request->senha === $usuario->senha_usuario) {
            return response()->json([
                'message' => 'Login como usuário bem-sucedido.',
                $usuario
            ], 200);
        }

        return response()->json([
            'message' => 'Credenciais inválidas.'
        ], 401);
    }

    public function update(Request $request)
    {
        $idUsuario =$request-> id;
        $usuario = Usuario::find($idUsuario);
    
        if (!$usuario) {
            return response()->json(['mensagem' => 'Usuário não encontrado.'], 404);
        }
    
        $atualizado = false;
    
        if (!is_null($request->novoNome)) {
            $usuario->nome_usuario = $request->novoNome;
            $atualizado = true;
        }
    
        if (!is_null($request->novoNumero)) {
            $usuario->numero_usuario = $request->novoNumero;
            $atualizado = true;
        }
    
        if(!is_null($request->urlImagem)){
            $usuario->imagem_usuario = $request->urlImagem;
            $atualizado = true;
        }
        if ($atualizado) {
            $usuario->save();
            return response()->json(['mensagem' => 'Usuário atualizado com sucesso.'], 200);
        } else {
            return response()->json(['mensagem' => 'Nenhuma atualização realizada.'], 400);
        }
    }
}

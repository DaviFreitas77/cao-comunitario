<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Models\pet_cuidado;
use App\Models\pet_temperamento;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use illuminate\Support\Facades\Log;


class PetController extends Controller
{
    public function store(Request $request){
        $pet = new Pet;
        $temperamentos = new pet_temperamento;
        $cuidados = new pet_cuidado;

        $pet->nome_pet = $request->nomePet;
        $pet->genero_pet = $request->generoPet;
        $pet->idade_pet = $request->idadePet;
        $pet->raca_pet = $request->racaPet;
        $pet->tipo_pet = $request->tipoPet;
        $pet->imagem_pet = $request->imagemPet;
        $temperamentos = is_array($request->temperamentoPet) ? $request->temperamentoPet : json_decode($request->temperamentoPet, true);

        $cuidados = is_array($request->cuidadoPet) ? $request->cuidadoPet : json_decode($request->cuidadoPet, true);
    
        $pet->save();
        
        $petId = $pet->id;
        
        
        foreach ($temperamentos as $temperamentoId) {
            DB::table('tb_pet_temperamento')->insert([
                'fk_pet' => $petId,
                'fk_temperamento' => $temperamentoId,
            ]);
        }
        
        foreach ($cuidados as $cuidadoId) {
            DB::table('tb_pet_cuidado')->insert([
                'id_pet' => $petId,
                'id_cuidado' => $cuidadoId,
            ]);
        }
        
        
        return response()->json(['message'=> 'pet cadastrado']);
        
     }
    
     

     public function pets() {
        $petsCadastrado = Pet::select(
                'pet.nome_pet',
                'pet.idPet',
                'pet.genero_pet',
                'tb_genero.desc_genero',
                'pet.idade_pet',
                'tb_idade_pet.desc_idade',
                'pet.raca_pet',
                'pet.tipo_pet',
                'tipo_pet.desc_tipo_pet',
                'pet.imagem_pet',
                DB::raw('GROUP_CONCAT(DISTINCT tb_temperamento.desc_temperamento SEPARATOR ", ") AS temperamentos'),
                DB::raw('GROUP_CONCAT(DISTINCT tb_cuidado.desc_cuidado SEPARATOR ", ") AS cuidados')
            )
            ->join('tb_pet_temperamento', 'pet.idPet', '=', 'tb_pet_temperamento.fk_pet')
            ->join('tb_temperamento', 'tb_pet_temperamento.fk_temperamento', '=', 'tb_temperamento.id_temperamento')
            ->join('tb_pet_cuidado', 'pet.idPet', '=', 'tb_pet_cuidado.id_pet')
            ->join('tb_cuidado', 'tb_pet_cuidado.id_cuidado', '=', 'tb_cuidado.id_cuidado')
            ->join('tb_genero', 'pet.genero_pet', '=', 'tb_genero.id_genero')
            ->join('tb_idade_pet', 'pet.idade_pet', '=', 'tb_idade_pet.id_idade')
            ->join('tipo_pet', 'pet.tipo_pet', '=', 'tipo_pet.id_tipo_pet')
            ->groupBy('pet.idPet', 'pet.nome_pet', 'pet.genero_pet', 'tb_genero.desc_genero', 'pet.idade_pet', 'tb_idade_pet.desc_idade', 'pet.raca_pet', 'pet.tipo_pet', 'tipo_pet.desc_tipo_pet', 'pet.imagem_pet')
            ->get();
        
        return response()->json($petsCadastrado);
    }
    
}

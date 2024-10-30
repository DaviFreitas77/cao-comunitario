<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    protected $table = 'pet';
    protected $fillable = [
        'nome_pet', 'genero_pet', 'idade_pet', 'raca_pet', 
        'tipo_pet', 'temperamento_pet', 'cuidado_pet', 'imagem_Pet'
    ];

    public $timestamps = false;

    
}

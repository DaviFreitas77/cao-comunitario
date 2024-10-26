<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoPet extends Model
{
    protected $table = 'tipo_pet';

    protected $fillable = ['desc_tipo_pet'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cuidadoPet extends Model
{
    protected $table = 'tb_pet_cuidado';

    protected $fillable = ['fk_pet,fk_cuidado'];

    public $timestamps = false;
}

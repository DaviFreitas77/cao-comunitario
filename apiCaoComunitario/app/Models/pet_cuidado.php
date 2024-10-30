<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pet_cuidado extends Model
{
    protected $table = 'tb_pet_cuidado';

    protected $fillable = ['id_pet,id_cuidado'];

    public $timestamps = false;
}
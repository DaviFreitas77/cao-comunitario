<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class pet_temperamento extends Model
{
    protected $table = 'tb_pet_temperamento';

    protected $fillable = ['fk_pet,fk_temperamento'];

    public $timestamps = false;
}


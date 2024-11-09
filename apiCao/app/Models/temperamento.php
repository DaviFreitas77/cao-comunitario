<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class temperamento extends Model
{
    protected $table = 'tb_temperamento';

    protected $fillable = ['desc_temperamento'];

    public $timestamps = false;
}

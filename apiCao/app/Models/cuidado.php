<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class cuidado extends Model
{
    protected $table = 'tb_cuidado';
  
    protected $fillable = ['desc_cuidado'];

    public $timestamps = false;
}

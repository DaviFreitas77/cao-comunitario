<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cuidados extends Model
{
    protected $table = 'tb_cuidado';
    protected $primaryKey = 'id_cuidado';
    protected $fillable = ['desc_cuidado'];



  
}

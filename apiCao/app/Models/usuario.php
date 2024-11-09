<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    protected $table = 'tb_usuario';

    protected $fillable = ['nome_usuario','email_usuario','senha_usuario','numero_usuario'];
    
    public $timestamps = false;
}

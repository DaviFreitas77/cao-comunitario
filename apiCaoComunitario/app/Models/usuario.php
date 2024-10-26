<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class usuario extends Model
{
    protected $table = 'usuario';

    protected $fillable = ['nome_usuario','email_usuario','tel_usuario','senha_usuario'];

    public $timestamps = false;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'Admin';

    protected $fillable = ['email_Admin','senha_admin'];

    public $timestamps = false;
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InrWithdraw extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'inr_withdraw_user_id');    
    }
}

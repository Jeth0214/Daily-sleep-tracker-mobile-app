<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sleep extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'date',
        'wake_up_time',
        'time_of_sleep',
        'sleep_duration'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

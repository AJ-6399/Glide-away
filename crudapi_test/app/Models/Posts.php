<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Posts extends Model
{
    use HasFactory;

    protected $fillable=
    [
        'title',
        'description',
        'imageUrl'
    ];
    //Adding fillable variables needed for the database table.
}

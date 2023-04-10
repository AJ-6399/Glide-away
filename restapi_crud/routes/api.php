<?php

use App\Models\Posts;
use Illuminate\Models\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts',function(){
    return Posts::all();
});

Route::post('/posts',function(){

    return Posts::create([
        'title'=>request('title'),
        'description'=>request('description')
    ]);
});

Route::put('/posts/{id}',function(Posts $id){

    $id->update([

        'title'=>request('title'),
        'description'=>request('description')
    ]);
});

Route::delete('/posts/{post}',function(Posts $post){

    $post->delete();
});



















































































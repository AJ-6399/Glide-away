<?php

use App\Models\Posts;
use App\Models\Admins;
use Illuminate\Models\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/posts',function(){
    return Posts::all();
});

Route::post('/posts',function(){

    return Posts::create([
        'title'=>request('title'),
        'description'=>request('description'),
        'imageUrl'=>request('imageUrl')
    ]);
});

Route::post('/posts/{id}',function(Posts $id){

    $id->update([

        'title'=>request('title'),
        'description'=>request('description'),
        'imageUrl'=>request('imageUrl')
    ]);
});

Route::get('/posts/{post}',function(Posts $post){

    $post->delete();
});
Route::get('/admins',function(){
    return Admins::all();
});
Route::get('/admins/verify/{uname}',function(String $uname){
    return Admins::where('uname','like',$uname)->get();
});

Route::post('/admins',function(){

    return Admins::create([
        'uname'=>request('uname'),
        'pswrd'=>request('pswrd')
    ]);
});



















































































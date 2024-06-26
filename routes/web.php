<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MemoController;

Route::get('/', function () {
    if(empty(session('message')) == true) {
        return view('welcome');
    } else {
        return redirect(route('memo.index'))->with('message', session('message'));
    }
});

Route::resource('memo', MemoController::class);

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return redirect(route('memo.index'));
    })->name('dashboard');
});

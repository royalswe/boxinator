<?php

use Illuminate\Http\Request;
use App\Item;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('items', 'ItemsController@index');
 
Route::post('item','ItemsController@store');

// Route::get('items', function () {
//     return response(Item::all(),200);
// });

// Route::post('item', function(Request $request) {
//     $resp = Item::create($request->all());
//     return $resp;
// });
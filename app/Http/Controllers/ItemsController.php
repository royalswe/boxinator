<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Item;

class ItemsController extends Controller
{
    public function index()
    {
        return Item::all();
    }

    public function store(Request $request)
    {
        // {
        //     $this->validate($request, [
        //     'name' => 'required|max:50',
        //     'color' => 'required',
        //     'country' => 'required|string',
        //     'weight' => 'required|double',
        // ]);
        //     $item = Item::create($request->all());
        //     return response()->json($item, 201);
        // }

        $item = Item::create($request->all());
        return response()->json($item, 201);
    }
 
}

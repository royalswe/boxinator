<?php

namespace App\Http\Controllers;

use Validator;
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
        /**
         * regex validates that the color is rgb
         */
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:50',
            'color' => 'required|regex:/rgb\((?:\s*\d+\s*,){2}\s*[\d]+\)/', // must be rgb color
            'country' => 'required|string',
            'weight' => 'required|numeric|min:0', // must be a positive number
        ]);

        if ($validator->fails()) { // send validation errors if validation fails
            return response()->json($validator->errors(), 400);
        }

        /**
         * Store in database if validation passed
         */
        $country = $request->json()->get('country');
        $cost = config("constants.countries.{$country}"); // get country value
        
        $item = new Item;
        $item->name = $request->json()->get('name');
        $item->color = $request->json()->get('color');
        $item->weight = $request->json()->get('weight');
        $item->ShippingCost = $cost * $item->weight; // weight * country value
        $item->save();
        return response()->json($item, 201);    
    }
 
}

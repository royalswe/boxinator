<?php

namespace Tests\Feature;

use App\Item;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseTransactions;


class ApiRequestsTest extends TestCase
{
    use DatabaseTransactions;

     /** @test */
    public function should_seed_5_users()
    {
        $this->seed('DatabaseSeeder');
        $this->assertGreaterThanOrEqual(5, Item::count());
    }

    /** @test */
    public function get_correct_values_on_GET_request()
    {
        $this->json('GET', 'api/items')
            ->assertStatus(200)
            ->assertJsonStructure([
                 [
                    "id",
                    "created_at",
                    "updated_at",
                    "name",
                    "color",
                    "ShippingCost",
                    "weight"
                ],
            ]);
    }

     /** @test */
     public function all_values_should_be_required_when_post()
     {
         $this->json('POST', 'api/item')
             ->assertStatus(400)
             ->assertJson([
                 'name' => ['The name field is required.'],
                 'color' => ['The color field is required.'],
                 'country' => ['The country field is required.'],
                 'weight' => ['The weight field is required.'],
             ]);
     }

     /** @test */
     public function item_should_create_correctly()
     {
         // create values for POST request
         $headers = ['Content-Type' => "application/json"];
         $payload = [
            'name' => 'Maria',
            'color' => 'rgb(255, 255, 0)',
            'country' => 'China',
            'weight' => '3'
         ];
 
         // make POST request
         $this->json('POST', '/api/item', $payload, $headers)
             ->assertStatus(201);

         // check if everything is created correctly in database
        $this->assertDatabaseHas('items', [
            'name' => 'Maria',
            'color' => 'rgb(255, 255, 0)',
            'ShippingCost' => 12,
            'weight' => '3'
        ]);

     }

    /** @test */
    public function color_value_must_bee_in_rgb()
    {
        $headers = ['Content-Type' => "application/json"];
        $payload = [
            'name' => 'Maria',
            'color' => '#fff',
            'country' => 'China',
            'weight' => '3'
        ];

        $this->json('POST', '/api/item', $payload, $headers)
            ->assertStatus(400)
            ->assertJson(['color' => ['The color format is invalid.']]);
    }

    /** @test */
    public function weight_value_must_be_positive_number()
    {
        $headers = ['Content-Type' => "application/json"];
        $payload = [
            'name' => 'Maria',
            'color' => 'rgb(255, 255, 0)',
            'country' => 'China',
            'weight' => '-3'
        ];

        $this->json('POST', '/api/item', $payload, $headers)
            ->assertStatus(400)
            ->assertJson(['weight' => ['The weight must be at least 0.']]);
    }

}


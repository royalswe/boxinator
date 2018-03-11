<?php

use Illuminate\Database\Seeder;
use App\Item;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $faker = \Faker\Factory::create();
 
        // Create 5 records
        for ($i = 0; $i < 5; $i++) {
            Item::create([
                'name' => $faker->firstName,
                'color' => $faker->rgbCssColor,
                'country' => 'Sweden',
                'weight' => $faker->randomNumber(2)
            ]);
        }
    }
}

<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Item;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class DatabaseTest extends TestCase
{
   use DatabaseTransactions;

   /** @test */
   public function should_create_new_row_in_database()
   {
       factory(Item::class)->create([
           'name' => 'Aniston'
       ]);

       $this->assertDatabaseHas('items', ['name' => 'Aniston']);
   }
}

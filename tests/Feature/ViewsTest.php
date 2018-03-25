<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ViewsTest extends TestCase
{
    /** @test */
    public function should_see_home_page()
    {
        $this->get('/')
            ->assertSee('Boxinator API');
    }
}

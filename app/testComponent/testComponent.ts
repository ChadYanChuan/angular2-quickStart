import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector:'my-test',
	template:`<h1>AAAAAAAAAAA{{title}}</h1>`,


})

export class testComponent {
	title = 'BBBBBBBBB';
}
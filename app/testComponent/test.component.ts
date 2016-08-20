import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector:'my-test1',
	template:`<h1 (click)="testclick()">test1-{{title}}</h1>`,


})

export class testComponentA {
	title = 'B2B';

	testclick(){console.log(121);}
}
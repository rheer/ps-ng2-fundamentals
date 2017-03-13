import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/events/create-event.component.html'
})
export class CreateEventComponent implements OnInit {
    isDirty:boolean = true
    constructor(private router:Router) { }

    cancel() {
        this.router.navigate(['/events'])
    }

    ngOnInit() { }
}
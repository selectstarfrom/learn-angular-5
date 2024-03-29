import { Directive, HostBinding, HostListener, OnInit } from "@angular/core";

@Directive({
    selector: '[dropDown]'
})
export class DropdownDirective implements OnInit {

    @HostBinding('class.open') isOpen: boolean = false;

    constructor() {

    }

    ngOnInit() {

    }

    @HostListener('click')
    onClick() {
        this.isOpen = !this.isOpen;
    }


}
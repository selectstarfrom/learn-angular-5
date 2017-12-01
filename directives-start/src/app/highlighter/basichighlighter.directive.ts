import { Directive, OnInit, ElementRef } from "@angular/core";

@Directive({
    selector: '[basicHighlighter]'
})
export class BasicHighlighter implements OnInit {

    constructor(public element: ElementRef) {

    }
    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'green';
        this.element.nativeElement.style.color = 'white';
    }
}
import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[backgroundColor]'
})
export class BackgroundColor implements OnInit {

    @Input() defaultColor: string = "black";
    @Input() highlightColor: string = "white";

    @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        //this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.backgroundColor = this.defaultColor;
    }

    @HostListener('mouseenter')
    mouseOver() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor;
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave')
    mouseLeave() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
        this.backgroundColor = this.defaultColor;
        this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }
}
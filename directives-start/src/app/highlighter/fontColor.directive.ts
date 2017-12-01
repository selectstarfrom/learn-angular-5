import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[fontColor]'
})
export class FontColor implements OnInit {

    @Input() defaultColor: string = "white";
    @Input() highlightColor: string = "black";

    @HostBinding('style.color') color = this.defaultColor;

    constructor(private element: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        //this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
        this.color = this.defaultColor;
    }

    @HostListener('mouseenter')
    mouseOver() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
        this.color = this.highlightColor;
        //this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }

    @HostListener('mouseleave')
    mouseLeave() {
        //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'green');
        this.color = this.defaultColor;
        //this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    }
}
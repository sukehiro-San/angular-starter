import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: "[myDirective]"
})
export class myDirectiveDirective {

    @Input() myDirective = '';
    constructor(private el: ElementRef) { }

    @HostListener('mousedown') onMouseEnter() {
        this.highlightColor(this.myDirective || 'yellow');
    }

    @HostListener('mouseup') onMouseLeave() {
        this.highlightColor('');
    }

    highlightColor(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}
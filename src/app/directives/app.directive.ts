import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[telePhone]',
    standalone: true
})
export class UpperCaseDirecties {
    constructor(private el: ElementRef, private renderer: Renderer2) {

    }
    @HostListener('input', ['$event'])
    onChange(e: any) {
        // console.log(e.target.value)
        let rawValue = e.target.value
        let formatted = '';
        if (rawValue.length <= 9) {
            if (rawValue.length <= 3) {
                formatted = rawValue
            } else if (rawValue.length <= 6) {
                formatted = rawValue.slice(0, 3) + '-' + rawValue.slice(3)
            }
            else if (rawValue.length <= 9) {
                formatted = rawValue.slice(0, 3) + '-' + rawValue.slice(3, 6) + '-' + rawValue.slice(6)
            }

        }
        console.log(formatted)
        this.renderer.setProperty(this.el.nativeElement, 'value', formatted);

    }

}
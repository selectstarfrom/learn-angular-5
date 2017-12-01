import { Component, Output, EventEmitter } from "@angular/core";

@Component(
    {
        selector: 'app-header',
        templateUrl: './header.component.html'
    }
)
export class HeaderComponent {

    @Output()
    featureSelect: EventEmitter<string> = new EventEmitter<string>();

    onSelect(feature: string) {
        this.featureSelect.emit(feature);
    }
}
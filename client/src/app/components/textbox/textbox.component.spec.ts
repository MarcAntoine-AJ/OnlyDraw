import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextboxComponent } from './textbox.component';

describe('TextboxComponent', () => {
    let component: TextboxComponent;
    let fixture: ComponentFixture<TextboxComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TextboxComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TextboxComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

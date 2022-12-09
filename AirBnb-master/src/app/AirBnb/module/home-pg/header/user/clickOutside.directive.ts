import{DOCUMENT} from "@angular/common"
import { outputAst } from "@angular/compiler";
import{AfterViewInit,Directive,ElementRef,EventEmitter,Inject, OnDestroy, Output} from "@angular/core"
import { filter, fromEvent, ObjectUnsubscribedError, Subscription, UnsubscriptionError } from "rxjs";
@Directive({
    selector:'[clickOutside]'
})
export class ClickOutsideDirective implements AfterViewInit,OnDestroy{
    @Output() clickOutside= new EventEmitter<void>()
    documentClicksubscription:Subscription | undefined
    constructor(private element:ElementRef,@Inject(DOCUMENT) private document: Document){ }
ngAfterViewInit():void{
    this.documentClicksubscription= fromEvent(this.document,'click').pipe(filter((event)=>{
        return !this.isInside(event.target as HTMLElement)
    })
    ).subscribe(()=>{
this.clickOutside.emit()
    })
}
ngOnDestroy(): void {
    this.documentClicksubscription?.unsubscribe()
}
   isInside(elementToCheck:HTMLElement):boolean{
    return elementToCheck===this.element.nativeElement||this.element.nativeElement.contains(elementToCheck)

   }
}
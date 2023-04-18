import { Component, Injectable, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export abstract class OnDestroyHandler implements OnDestroy{

    destroy$: Subject<void> = new Subject<void>();

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
    
}
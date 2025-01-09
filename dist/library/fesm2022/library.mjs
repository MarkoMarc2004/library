import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class LibraryService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.6", ngImport: i0, type: LibraryService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.6", ngImport: i0, type: LibraryService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.6", ngImport: i0, type: LibraryService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class LibraryComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.6", ngImport: i0, type: LibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.6", type: LibraryComponent, isStandalone: true, selector: "lib-library", ngImport: i0, template: `
    <p>
      library works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.6", ngImport: i0, type: LibraryComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-library', imports: [], template: `
    <p>
      library works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibraryComponent, LibraryService };
//# sourceMappingURL=library.mjs.map

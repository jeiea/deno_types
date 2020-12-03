// These types are adapted from
// https://github.com/DefinitelyTyped/DefinitelyTyped to work under Deno.
//
// Project: http://facebook.github.io/react/
// Definitions by: Asana <https://asana.com>
//                 AssureSign <http://www.assuresign.com>
//                 Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//                 Benoit Benezech <https://github.com/bbenezech>
//                 Patricio Zavolinsky <https://github.com/pzavolinsky>
//                 Digiguru <https://github.com/digiguru>
//                 Eric Anderson <https://github.com/ericanderson>
//                 Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>
//                 Kyle Scully <https://github.com/zieka>
//                 Cong Zhang <https://github.com/dancerphil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
import type * as jsx from './jsx.d.ts';

export * as JSX from './jsx.d.ts';
export * as React from './react_esm.d.ts';
export * from './react_esm.d.ts';

// There's no desirable way, see https://github.com/microsoft/TypeScript/issues/14051
declare global {
  namespace JSX {
    // tslint:disable-next-line:no-empty-interface
    interface Element extends jsx.Element {}
    interface ElementClass extends jsx.ElementClass {}
    interface ElementAttributesProperty extends jsx.ElementAttributesProperty {}
    interface ElementChildrenAttribute extends jsx.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = jsx.LibraryManagedAttributes<C, P>;
    interface IntrinsicAttributes extends jsx.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T> extends jsx.IntrinsicClassAttributes<T> {}
    interface IntrinsicElements extends jsx.IntrinsicElements {}
  }
}

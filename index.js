import pc from "picocolors"

const tag = ( text, icon ) => pc.bgBlue( pc.white( `${ icon } ${ text }` ) );


const Konsole = ( ...args ) => {
    console.log(
        `${ tag( '📝', 'Log' ) }`,
        ...args
    );

    if ( Array.isArray( args ) ) {
        if ( args.length > 1 ) return [ ...args ];
        return args[ 0 ];
    } else
        return args;

};
Konsole.log = Konsole;

export default Konsole;
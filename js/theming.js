//--------------------------------------------------------------
//                          /* Theming */
//--------------------------------------------------------------
export const themeProvider = () => {
    const domain = 'http://localhost:63342';
    const styleSheets = Array.from(document.querySelectorAll('link'));
    const themeToggle = document.querySelector("#cb1");

    themeToggle.addEventListener('click', ()=> {
        styleSheets.forEach(styleSheet => {
            if(styleSheet.title){
                styleSheet.disabled = !styleSheet.disabled;
            }
        });
    });

    const setCookie = ( cookieName, cookieValue,
                        lifespanInDays, validDomain ) => {
        const domainString = validDomain ?
            ("; domain=" + validDomain) : '' ;
        document.cookie = cookieName +
            "=" + encodeURIComponent( cookieValue ) +
            "; max-age=" + 60 * 60 *
            24 * lifespanInDays +
            "; path=/" + domainString ;
    };

    const  switchStyle = ( cssTitle ) => {
        styleSheets.forEach(styleSheet => {
            if((styleSheet.title )&& (styleSheet.title === cssTitle)){
                styleSheet.disabled = false;
            } else if (styleSheet.title ) {
                styleSheet.disabled = true;
            }
        });
        setCookie('style',cssTitle,10,domain)
    };

    const getCookie = ( cookieName )  => {
        const cookieString = document.cookie ;
        if (cookieString.length !== 0) {
            const cookieArray = cookieString.split( '; ' );
            const cookieValue = cookieArray.filter(cookie => cookie.match ( cookieName + '=(.*)' ));
            if (cookieValue != null) {
                return decodeURIComponent (cookieValue[0]) ;
            }
        }
        return '' ;
    };

    const setStyleFromCookie = () => {
        const cssTitle = getCookie( 'style' );
        if (cssTitle.length) {
            switchStyle(cssTitle);
        }
    };
};

//--------------------------------------------------------------
//                          /* Theming */
//--------------------------------------------------------------
const styleSheets = Array.from(document.querySelectorAll('link'));

export const themeProvider = () => {
    const domain = 'http://localhost:63342';
    const themeToggle = document.querySelector("#cb1");
    themeToggle.addEventListener('click', ()=> {
        styleSheets.forEach(styleSheet => {
            if(styleSheet.title){
                console.log(styleSheet.disabled === true);
                if(styleSheet.disabled === true) {
                    localStorage.setItem('theme', styleSheet.title);
                }
                styleSheet.disabled = !styleSheet.disabled;
            }
        });
    });

};

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

const  switchStyle = ( cssTitle, domain ) => {
    styleSheets.forEach(styleSheet => {
        if((styleSheet.title )&& (styleSheet.title === cssTitle)){
            styleSheet.disabled = false;
        } else if (styleSheet.title ) {
            styleSheet.disabled = true;
        }
    });
    setCookie('style',cssTitle,10,domain)
};

export const setStyleFromStorage = () => {
    const cssTitle = localStorage.getItem( 'theme' );
    console.log(cssTitle);
    if (cssTitle.length) {
        switchStyle(cssTitle);
    }
};

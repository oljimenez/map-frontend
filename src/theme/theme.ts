import { extendTheme } from '@chakra-ui/react';

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac'
    }
};

export const theme = extendTheme({
    colors,
    styles: {
        global: {
            'html, body': {
                fontFamily:
                    'Poppins, Montserrat, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                padding: '0px',
                margin: '0px',
                height: '100%',
                fontSize: 'md'
            },
            '#root': {
                height: '100%',
                width: '100%'
            },
            'a:hover': {
                opacity: 0.8,
                textDecoration: 'none !important'
            },
            '*:focus': {
                boxShadow: 'none !important'
            },
            'input:focus': {
                borderColor: `transparent !important`
            },
            'input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active':
                {
                    WebkitTransition:
                        'color 9999s ease-out, background-color 9999s ease-out',
                    WebkitTransitionDelay: '9999s'
                }
        }
    }
});

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                bal: ['"Mulish"'],
            },
            keyframes: {
                sunSpin: {
                    '0%': { transform: 'rotate(0deg)' },
                    '100%': { transform: 'rotate(360deg)' },
                },
                sunUndulate: {
                    '0%': { transform: 'translateY(0px)' },
                    '100%': { transform: 'translateY(-25%)' },
                },
                cloudMoveRight: {
                    '0%': { transform: 'translateX(0px)' },
                    '100%': { transform: 'translateX(25%)' },
                },
                cloudMoveLeft: {
                    '0%': { transform: 'translateX(0px)' },
                    '100%': { transform: 'translateX(-25%)' },
                },
            },
            animation: {
                'sun-spin': 'sunSpin 5s linear infinite',
                'sun-undulate': 'sunUndulate linear infinite',
                'cloud-move-right': 'cloudMoveRight linear infinite',
                'cloud-move-left': 'cloudMoveLeft linear infinite',
            },
            height: {
                '95/100': '95%',
                '7/10': '70%',
                '3/10': '30%',
            },
            width: {
                '1/10': '10%',
            },
        },
    },
    variants: {
        extend: {
            borderWidth: ['hover'],
        },
    },
    plugins: [],
}

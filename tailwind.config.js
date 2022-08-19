module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: "#FFFFFF",
                    dark: "#FFFFFF",
                    default: "#FFFFFF",
                },
            },
            fontFamily: {
                headline: "Poppins, sans-serif",
            },
            backgroundImage: {},
            screens: {
                xs: "380px",
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ["active"],
        },
    },
    plugins: [],
};

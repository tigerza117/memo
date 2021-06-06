import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
    components: {
        Button: {
            baseStyle: (props: Record<string, any>) => ({
                // will have the selector '.sri45dhx .classTwo' where the first part is the randomly generated CSS-In-JS
                // this example has parent/child relationship, notice the space between the classes generated
                "&.active": {
                    color: "white",
                    bg: "blue",
                },
            }),
        },
    },
    fonts: {
        body: "Montserrat",
    },
    colors: {
        brand: {
            50: "#3333cc",
            100: "#1919e6",
            500: "#0000ff", // you need this
        },
        danger: {
            50: "red",
            100: "red",
            500: "red", // you need this
        },
        warning: {
            50: "orange",
            100: "orange",
            500: "orange", // you need this
        },
    },
})

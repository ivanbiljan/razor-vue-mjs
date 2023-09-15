const ButtonStyle = {
    // 1. We can update the base styles
    baseStyle: {
        fontWeight: "semibold", // Normally, it is "semibold",

        borderRadius: "20px"
    },
    // 2. We can add a new button size or extend existing
    sizes: {
        md: {
            h: "32px",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "100%"
        },

        lg: {
            h: "40px",
            fontSize: "14px",
            fontWeight: 600,
            lineHeight: "100%"
        }
    },
    // 3. We can add a new visual variant
    variants: {
        "with-shadow": {
            bg: "red.400",
            boxShadow: "0 0 2px 2px #efdfde"
        },
        solid: {
            bg: "#613EEA",
            color: "#FFFFFF",

            _hover: {
                bg: "#7856FF",

                _disabled: {
                    bg: ""
                }
            },

            _focus: {
                outline: "5px auto rgba(97, 62, 234, 0.16)"
            },

            _disabled: {
                opacity: 0.4,

                _hover: {
                    bg: "#613EEA"
                }
            }
        },
        secondary: {
            bg: "#F2EFFD",
            color: "#613EEA",

            borderRadius: "20px",

            _hover: {
                bg: "#E9E5FC",

                _disabled: {
                    bg: ""
                }
            },

            _focus: {
                outline: "5px auto rgba(97, 62, 234, 0.16)"
            },

            _disabled: {
                opacity: 0.4,

                _hover: {
                    bg: "#613EEA"
                }
            }
        }
        // // 4. We can override existing variants
        // solid: (props: StyleFunctionProps) => ({
        //     bg: props.colorMode === "dark" ? "red.300" : "red.500"
        // }),
        // // 5. We can add responsive variants
        // sm: {
        //     bg: "teal.500",
        //     fontSize: "md"
        // }
    },
    // // 6. We can overwrite defaultProps
    defaultProps: {
        variant: "solid" // default is solid
    }
};

export default ButtonStyle;
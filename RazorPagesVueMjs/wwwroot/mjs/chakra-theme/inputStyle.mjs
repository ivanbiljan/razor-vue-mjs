const InputStyle = {
    defaultProps: {
        focusBorderColor: "#613EEA"
    },
    variants: {
        outline: {
            field: {
                bg: "#F0EDEE",

                borderRadius: "10px",
                borderColor: "#545C6514",
                errorBorderColor: "red",

                _readOnly: {
                    bg: "#FFFFFF"
                }
            }
        }
    },
    sizes: {
        sm: {
            h: "32px",
            px: "8px",
            py: "8px"
        },
        md: {
            h: "40px",
            px: "12px",
            py: "12px"
        }
    }
};

export default InputStyle;
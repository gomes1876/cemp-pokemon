export const theme = createTheme({
    palette: {
      primary: { main: "#D32F2F" }, // Vermelho Pokémon
      secondary: { main: "#1976D2" }, // Azul Pokémon
      background: { default: "#2c2b2b", paper: "#2c2b2b" }, // Fundo escuro
      text: { primary: "#FFFFFF", secondary: "#B0BEC5" }, // Texto branco e cinza claro
    },
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: { fontWeight: 700, color: "#FFFFFF" }, // Título branco
      h2: { fontWeight: 600, color: "#FFFFFF" }, // Subtítulos brancos
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiInputBase-input": { color: "#FFFFFF" }, // Texto do input branco
            "& .MuiInputLabel-root": { color: "#B0BEC5" }, // Label cinza claro
            "& .MuiInputLabel-root.Mui-focused": { color: "#FFFFFF" }, // Label focado branco
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#FFFFFF" }, // Borda branca
              "&:hover fieldset": { borderColor: "#D32F2F" }, // Hover vermelho
              "&.Mui-focused fieldset": { borderColor: "#D32F2F" }, // Focado vermelho
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            color: "#FFFFFF", // Texto do Select branco
            "& .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF" },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D32F2F",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#D32F2F",
            },
          },
          icon: { color: "#FFFFFF" }, // Ícone da seta branco
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: { color: "#FFFFFF" }, // Itens do menu brancos
        },
      },
    },
  });
  
import * as  React from "react";
import { useContext, createContext } from "react";
const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
};

export interface colorTest {
    color: String
}

const ThemeContext = createContext<any>(themes.light);

const TestApp: React.FC<{}> = () => {
    return (
        <ThemeContext.Provider value={themes.dark}>
            <Toolbar />
        </ThemeContext.Provider>
    );
}

export interface IpropsToolbar {
    children?: React.ReactNode
}
const Toolbar: React.FC<IpropsToolbar> = (props) => {
    return (
        <div style={{ marginLeft: '500px' }}>
            {props.children}
            <ThemedButton />
        </div>
    );
}

const ThemedButton: React.FC<{}> = () => {
    const theme = useContext<any>(ThemeContext);
    return (
        <button  style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}

export default TestApp;
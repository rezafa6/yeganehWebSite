import { createContext, useContext, useReducer } from "react";
export const projectContext = createContext();

export const ProjectProvider = ({ reducer, initState, children }) => {
    const [globalState, globalDispatch] = useReducer(reducer, initState);
    const value = {
        globalState,
        globalDispatch,
    };
    return <projectContext.Provider value={value}>{children}</projectContext.Provider>;
};

export const useProjectContext = () => useContext(projectContext);

const ContextController = ({ children }) => {
    const initState = {
        languageState: {state: "En"},
        loading: false,
    };
    const reducer = (state, action) => {
        switch (action.type) {
            case "changeLanguage": {
                return {
                    ...state,
                    languageState: action.value,
                };
            }
            case "setLoading": {
                return {
                    ...state,
                    loading: action.value,
                };
            }
            default:
                throw new Error(`Unhandled action type: ${action.type}`);
        }
    };

    return (
        <ProjectProvider reducer={reducer} initState={initState}>
            {children}
        </ProjectProvider>
    );
};

export default ContextController;

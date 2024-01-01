import * as React from 'react';
export interface HelloProps {
    name: string;
    enthusiasmLevel?: number;
}
export interface AppProps {
}
declare function AppRouter({}: AppProps): React.JSX.Element;
export default AppRouter;

import * as React from 'react';
export interface Props {
    year: string;
}
declare function OlMap({ year }: Props): React.JSX.Element;
export default OlMap;
export declare function MapView({ zoom }: {
    zoom?: number;
}): React.JSX.Element;

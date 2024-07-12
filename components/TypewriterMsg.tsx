import React from 'react';
// Importing the useWindupString hook from the windups library
import { useWindupString } from 'windups';
// TypeScript interface to define the props for the TypewriterMsg component
interface TypewriterMsgProps {
    text: string;
    //function to determine the pace of typing for each character
    pace?: (char: string) => number;
}
// Functional component to display text with a typewriter effect
const TypewriterMsg: React.FC<TypewriterMsgProps> = ({ text, pace }) => {
    const [windupText] = useWindupString(text, { pace });
    return <div>{windupText}</div>;
};
// Default props can be set here if needed, currently commented out
/* TypewriterMsg.defaultProps = {
    pace: () => 100, // Default pace to 100ms per character
}; */

export default TypewriterMsg;

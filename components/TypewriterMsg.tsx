import React from 'react';
import { useWindupString } from 'windups';

interface TypewriterMsgProps {
    text: string;
    pace?: (char: string) => number;
}

const TypewriterMsg: React.FC<TypewriterMsgProps> = ({ text, pace }) => {
    const [windupText] = useWindupString(text, { pace });
    return <div>{windupText}</div>;
};

/* TypewriterMsg.defaultProps = {
    pace: () => 100, // Default pace to 100ms per character
}; */

export default TypewriterMsg;

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import React from 'react';
import ReactDOM from 'react-dom';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('type markdown here');

    const handleChange = (e) => {
        setMarkdown(e.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <textarea
                value={markdown}
                onChange={handleChange}
                style={{ width: '50%', height: '200px', marginBottom: '20px' }}
            />
            <div style={{ width: '50%', border: '1px solid #ddd', padding: '10px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}

function reverseSentence(sentence) {
    return sentence
        .split(' ')
        .reverse()
        .join(' ')
        .replace(/^\w/, (c) => c.toUpperCase());
}

const sentence = "hello world";
console.log(reverseSentence(sentence)); // Output: "World hello"

const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const names = data.map(item => item.name);
console.log(names); // Output: ["Alice", "Bob", "Charlie"]

const nestedData = [
    [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
    ],
    [
        { id: 3, name: 'Bob' }
    ]
];

const nestedNames = nestedData.flatMap(innerArray => innerArray.map(item => item.name));
console.log(nestedNames); // Output: ['John', 'Jane', 'Bob']
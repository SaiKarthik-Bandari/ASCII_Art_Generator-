
// Define ASCII art styles and conversion utilities

// Cute Pets Style
export const cutePetsStyle = (text: string): string => {
  if (!text) return '';
  
  const petFrames = [
    `  /\\_/\\  
 ( o.o ) 
  > ^ <  `,
    `  /\\_/\\  
 ( ^.^ ) 
  > ~ <  `,
    `   /\\__/\\  
  /(^.^)\\
   "*"*"   `,
    `  /\\_/\\  
 (='.'=) 
 (\")_(\\") `
  ];
  
  const randomPet = petFrames[Math.floor(Math.random() * petFrames.length)];
  
  // Format with the input text
  return `${randomPet}
   
"${text}"`;
};

// Geek Terminal Style
export const geekTerminalStyle = (text: string): string => {
  if (!text) return '';
  
  // Convert to matrix-like output
  const matrixHeader = `
╔══════════════════════════════════╗
║ MATRIX TERMINAL v3.1.4           ║
╚══════════════════════════════════╝
> initializing...
> system loaded
> executing command:
`;

  const matrixChars = '01';
  let matrixEffect = '';
  
  for (let i = 0; i < 5; i++) {
    let line = '';
    for (let j = 0; j < 30; j++) {
      line += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
    }
    matrixEffect += line + '\n';
  }
  
  return `${matrixHeader}
${matrixEffect}
> OUTPUT: ${text}`;
};

// Dynamic Energy Style
export const dynamicEnergyStyle = (text: string): string => {
  if (!text) return '';
  
  // Create a frame with dynamic elements
  const frame = `
    ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
   ⚡️                  ⚡️
  ⚡️      ${text}      ⚡️
   ⚡️                  ⚡️
    ⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️
  `;
  
  return frame;
};

// Fairy Tale Style
export const fairyTaleStyle = (text: string): string => {
  if (!text) return '';
  
  const fairyFrame = `
     *       *       *
  *      *      *      *
     *  ${text}  *
  *      *      *      *
     *       *       *
  `;
  
  return fairyFrame;
};

// Get all available styles
export const getAsciiStyles = () => [
  { id: 'cute', name: 'Cute Pets', converter: cutePetsStyle },
  { id: 'geek', name: 'Geek Terminal', converter: geekTerminalStyle },
  { id: 'dynamic', name: 'Dynamic Energy', converter: dynamicEnergyStyle },
  { id: 'fairy', name: 'Fairy Tale', converter: fairyTaleStyle }
];

// Default style if none selected
export const defaultStyle = cutePetsStyle;

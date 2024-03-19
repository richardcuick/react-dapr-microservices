import React from 'react';

import { ThemeProvider } from '@fluentui/react';
import { Fluent2WebLightTheme, Fluent2WebDarkTheme } from '@fluentui/fluent2-theme';

export default function HomePage() {
  return (
    <ThemeProvider theme={Fluent2WebDarkTheme}>
    <div className="flex flex-col items-center justify-center h-screen bg-cover" style={{backgroundImage: `url("/images/background.jpg")`}}>
      <div className="mt-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md mx-2">Button 1</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md mx-2">Button 2</button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow-md mx-2">Button 3</button>
      </div>
    </div>
    </ThemeProvider>
  );
}
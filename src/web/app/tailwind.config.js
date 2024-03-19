module.exports = {
  //purge: [], //Since Tailwind no longer uses PurgeCSS under the hood, we’ve renamed the purge option to content to better reflect what it’s for:
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/layouts/**/*.tsx',
  ],
  darkMode: 'class', // or 'media' or 'class' //The dark mode feature is now enabled using the media strategy by default, so you can remove this key entirely from your tailwind.config.js file, unless you’re using the class strategy.
  theme: {
    extend: {
      // FluentUI color definitions are a mess and you know it.
      // https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/products
      colors: {
        black: '#000000',
        gray: {
          10: '#faf9f8',
          20: '#f3f2f1',
          30: '#edebe9',
          40: '#e1dfdd',
          50:  '#d2d0ce',
          60: '#c8c6c4',
          70: '#bebbb8',
          80: '#b3b0ad',
          90: '#a19f9d',
          100: '#979593',
          110: '#8a8886',
          120: '#797775',
          130: '#605e5c',
          140: '#484644',
          150: '#3b3a39',
          160: '#323130',
          170: '#292827',
          180: '#252423',
          190: '#201f1e',
          200: '#1b1a19',
          210: '#161514',
          220: '#11100f',
        },
        white: '#ffffff',
        product: {
          access: '#a4373a',
          exchange: '#0078d4',
          excel: '#217346',
          office: '#d83b01',
          onedrive: '#0078d4',
          onenote: '#7719aa',
          planner: '#31752f',
          powerapps: '#742774',
          powerpoint: '#b7472a',
          publisher: '#077568',
          sharepoint: '#0078d4',
          skype: '#0078d4',
          sway: '#008272',
          teams: '#6264a7',
          visio: '#3955a3',
          word: '#2b579a',
          yammer: '#106ebe'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
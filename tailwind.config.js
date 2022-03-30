module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        thin: '200',
        regular: '400',
        bold: '600',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'black-transparent': 'rgba(0,0,0,0.3)',
        'orange-FIDIS': 'rgb(240, 157, 1)',
        'orange-FIDIS_opacity_50': 'rgba(240, 157, 1, 0.5)',
        'green-increased-value': '#00FF38',
        'red-decreased-value': '#FF4E4E',
        'normal-white-text': '#DADADA',
        'button-text-color': '#FFFFFF',
        'headers-text-color': 'rgba(255,255,255,0.6)',
        'input-background': 'rgba(61,61,61,0.5)',
        'input-background-READONLY': 'rgba(36,36,36,0.5)',
        'blue-sky': '#01B7F0',
        'green-success': '#216716',
        'red-rejected': '#FF4E4E',
        'overlay-background': 'rgba(50, 39, 115, 0.66)',
      },
    },
  },
  plugins: [],
}

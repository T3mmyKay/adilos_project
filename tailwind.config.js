/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins':['Poppins', 'sans-serif'],
        'Roboto':['Roboto', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
      },
      colors:{
        "grey-text":"#637C8E",
        ash:"#A3BAC6",
        "cyan-blue": "#21455E",
        "nav-link":"#707070",
        "sidebar":"#EBF2F6",
        "sidebar-hover":"#E2E5ED",
        "sidebar-text":"#21455E",
        "primary":{
          "100":"#8ae2f8",
          "200":"#53c3eb",
          "300":"#2da4de",
          "400":"#0785d1",
          "500":"#0DABD8",
          "600":"#067a9f",
          "700":"#03526b",
          "800":"#002937",
          "900":"#002233",
        },
        "danger":"#EF5350",
        "select":"#F8FAFB",
      },
    },
  },
  plugins: [],
}


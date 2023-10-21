//  @type {import('tailwindcss').Config} 
export const content =["./src/*.{html,js}"]
export const theme = {
  screens: {
    'xxl': '1370px',
    // => @media (min-width: 1370px) { ... }
    'lg': '1024px',
    'sm': '640px',
    'ssm': '450px',
    'xl':'1280px',
    'xmd':'900px',
    'md':'768px'
  },

  extend: {
    
    boxShadow: {
      'custom': '0 0 60px 0 rgb(255, 255, 255) inset',
    },
      

      height: {
        128: "32rem",
        836: "52.25rem",
        62: "3.875rem",
        94: "5.875rem",
        171: "10.688rem",
        31: "1.938",
        6000: "3.75rem",

      },

      width: {
        1376: "86rem",
        688: "43rem",
        454: "28.375rem",
        324: "20.25rem",
        101: "6.313rem",
        232: "14.5rem",
        171: "10.688rem",
        582: "36.375rem",
        600:"37.5rem",
        768: "48rem",
        720: "45rem",
        670: "41.875rem"
      },

      margin: {
        117: "7.313rem",
        85: "5.313rem",
        21: "1.313rem",
        221: "13.813rem",
        77: "4.813rem",
        120: "6.313rem",
        62: "3.875rem",
        69: "4.313rem",
        85: "5.313rem",

      },

    colors: {
      "body-blue": "#E8F4FF",
      "custom-orange": "#EA8E38",
      "custom-blue": "#388AEA",
      "custom-white": "#f7f5f5",
      "chart-blue": "#7EB6F7",
      "chart-gray":"#2E2E2E"
    },
  }
}





// module.exports = {
//   content: ["./src/**/*.{html,js}"],
//   theme: {
//     fontSize: {
//       h: '2rem'
//     },
    
//   },
  
// };

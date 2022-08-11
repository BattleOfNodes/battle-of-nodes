export default {
  width: 300,
  height: 300,
  image: "/bon-logo.png",
  data: "https://bon.com",
  type: 'svg',
  margin: 0,
  qrOptions: {
    typeNumber: "0",
    mode: "Byte",
    errorCorrectionLevel: "Q"
  },
  imageOptions: {
    hideBackgroundDots: true,
    imageSize: 0.35,
    margin: 0
  },
  dotsOptions: {
    type: "extra-rounded",
    color: "#0b4d6c"
  },
  backgroundOptions: {
    color: "#ffffff"
  },
  dotsOptionsHelper: {
    colorType: {
      single: true,
      gradient: false
    },
    gradient: {
      linear: true,
      radial: false,
      color1: "#0b4d6c",
      color2: "#0b4d6c",
      rotation: "0"
    }
  },
  cornersSquareOptions: {
    type: "extra-rounded",
    color: "#000000"
  },
  cornersSquareOptionsHelper: {
    colorType: {
      single: true,
      gradient: false
    },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  cornersDotOptions: {
    type: "",
    color: "#6a1a4c"
  },
  cornersDotOptionsHelper: {
    colorType: {
      single: true,
      gradient: false
    },
    gradient: {
      linear: true,
      radial: false,
      color1: "#000000",
      color2: "#000000",
      rotation: "0"
    }
  },
  backgroundOptionsHelper: {
    colorType: {
      single: true,
      gradient: false
    },
    gradient: {
      linear: true,
      radial: false,
      color1: "#ffffff",
      color2: "#ffffff",
      rotation: "0"
    }
  }
}
export const baseUrl = () => {
  switch (process.env.NODE_ENV) {
    case "development":
    return 'http://localhost:8080/v1'

    case "production":
    return `${process.env.REACT_APP_PROD_URL}`
  
    default:
      break;
  }
}
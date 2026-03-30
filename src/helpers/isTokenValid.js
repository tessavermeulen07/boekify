function isTokenValid(decodedToken) {

    const expirationDateToken = new Date(decodedToken.exp * 1000);
    const dateTokenNow =  new Date();

    console.log(expirationDateToken > dateTokenNow);
    return expirationDateToken > dateTokenNow;

}

export default isTokenValid;
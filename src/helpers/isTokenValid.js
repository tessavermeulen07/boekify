function isTokenValid(decodedToken) {

    const expirationDateToken = new Date(decodedToken.exp * 1000);
    const dateTokenNow =  new Date();

    return expirationDateToken > dateTokenNow;

}

export default isTokenValid;
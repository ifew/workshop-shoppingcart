//Frontend
const getFrontendURL = (path = '') => `http://${location.host}/${path}`
const redirectToIndex = () => location.href = getFrontendURL();
const redirectToCart = () => location.href = getFrontendURL('cart.html');
const redirectToOrderSummary = () => location.href = getFrontendURL('order_detail.html');
//Backend
const getApiURL = (path = '') => `http://${location.host}:5001/${path}`
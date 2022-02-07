import { send, sendPromise } from './utils';

export default class ApiHandler {
  constructor(apiUrl) {
    this.apiUrl = apiUrl
  }

  getCatalog(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/catalog`)
      .then((data) => {
        // return JSON.parse(data)
        console.log(JSON.parse(data))
      })
  }

  getCart(onSuccess, onError) {
    return sendPromise(`${this.apiUrl}/cart`)
      .then((data) => {
        return JSON.parse(data)
        console.log(data)
      })
  }

  addToCart(idex) {
    fetch(`${this.api_url}/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(item)
    })
  }


  removeFromCart(id) {
    fetch(`${this.apiUrl}/cart/${id}`, {
      method: "DELETE",
    })
  }
}
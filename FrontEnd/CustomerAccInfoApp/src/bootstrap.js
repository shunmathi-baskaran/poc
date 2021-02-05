import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const mount = (el, {customerId, customerInfo, transactionDetails}) =>{
    ReactDOM.render( <App customerId={customerId} customerInfo={customerInfo} transactionDetails={transactionDetails}/>, el )
}

if(process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector('#_customeraccinfo-dev-root')
    if(devRoot)
        mount(devRoot, {
            customerId: 1000000,
            customerInfo: {
                customerId: 1000000,
                username: 'John',
                password: 'abcd',
                email: 'john@gmail.com',
                phoneNumber: '9876543212'
            },
            transactionDetails: (accountNumber) => console.log(accountNumber)
        })
}

export { mount }
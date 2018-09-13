import React from "react"
import ReactDOM from "react-dom"
import Root from "./Root"
import { Provider } from "react-redux"
import PropTypes from 'prop-types'
import store from "./store/store"

ReactDOM.render(
        <Root store={store} />,
    document.getElementById("root")
)


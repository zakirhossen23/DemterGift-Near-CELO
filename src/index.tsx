import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { App } from '@/components/App'
import '@/near-contracts/contract';
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)

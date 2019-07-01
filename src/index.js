import 'jquery'
//for whatever reason jquery doesn't really like being imported

import app from './index.html'
import pageHead from './components/page-head'

const domRoot = $('.App-Root')
const $app = $(app)


domRoot.append($app)

export default $app;

// Please make sure to set process.env.GOOGLE_API_KEY = 'XXxxXxXxxXXxxXXXXXxXXXXXXxXXXXXXXXXXXXX'

const patriarchy = require('patriarchy')
const knowledge = require('../index')

knowledge.google.search('katy perry').then(res => {
  console.log(patriarchy(res.top))
})

knowledge.duckduckgo.search('katy perry').then(res => {
  console.log(res)
})

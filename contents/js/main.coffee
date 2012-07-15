'use strict'
require('./orientfix')
require './mbp'

MBP.scaleFix()
MBP.hideUrlBarOnLoad()
MBP.enableActive()


exports.init = ->
  console.log $ 'html'
  $('html').removeClass('no-js')
  console.log 'Ready! Go!'


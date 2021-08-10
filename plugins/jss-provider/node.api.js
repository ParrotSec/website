import { ServerStyleSheets } from '@material-ui/core/styles'

export default () => ({
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets()
    return meta.muiSheets.collect(App)
  },

  headElements: (elements, { meta }) => [...elements, meta.muiSheets.getStyleElement()]
})

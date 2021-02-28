import { ComputeValue, compute } from './core/compute-value'
import useCrud from './use/use-crud.ts'
import defaultCrudOptions from './use/default-crud-options'
import utils from './utils'
import { setDictRequest, dict } from './core/dict'
import { useDict } from './use/use-dict.ts'
import { uiContext } from './ui'
import columnTypes from './types'
import * as components from './components'
export {
  ComputeValue,
  compute,
  dict,
  useDict,
  useCrud,
  utils,
  uiContext
}
export * from './components'
export default {
  install (app, options) {
    if (options?.ui) {
      uiContext.set(options.ui)
    }
    if (options?.commonOptions) {
      defaultCrudOptions.commonOptions = options.commonOptions
    }
    if (options?.dictRequest) {
      setDictRequest(options.dictRequest)
    }
    for (const key in components) {
      const com = components[key]
      app.component(key, com)
    }

    columnTypes.install()

    app.config.globalProperties.$fsui = uiContext.get()
  }
}

import { config } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify'

config.global.mocks = {
  $t: (msg: string, data = null) => `${msg}${ data ? ` | data: ${JSON.stringify(data)}` : ''}`
};

config.global.plugins = [
  ...config.global.plugins,
  vuetify(),
];

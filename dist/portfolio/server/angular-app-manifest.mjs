
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/about"
  }
],
  assets: {
    'index.csr.html': {size: 5091, hash: '99cf1536782b0c0468cb3b1ba8dc7cdea10131f131453784f722401851d0b8d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1088, hash: 'a8097a856a68d75779b69384a39ca67f3bf8fb2a48ee9c48edfe12a161722012', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 67902, hash: 'ee7ca208b9db1727f4c667e14fa49be3f32a9103757e4db3b37226fd09398d01', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 109110, hash: 'faef44371d5eae04884142e70f81e0b4e196f5a9d7e7251540a8c8236e81e86b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-U6YWPWAW.css': {size: 231722, hash: 'pcjV2df2NwA', text: () => import('./assets-chunks/styles-U6YWPWAW_css.mjs').then(m => m.default)}
  },
};

const config = {
    appName: 'React Starter Kit',
    homepage: '/',
    primaryColor: '#88c1f9',
    Url: typeof window === 'undefined' || window.location.hostname === 'localhost' ? '' : '//' + window.location.hostname
  }
export default config
export { config }
  
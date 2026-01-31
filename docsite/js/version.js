import { version } from '../../package.json'

const versionEl = document.getElementById('version')
if (versionEl) {
  versionEl.textContent = `v${version}`
}

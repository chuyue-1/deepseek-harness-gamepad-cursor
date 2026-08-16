// Node half of the dual-face package @dsh-user/gamepad-cursor.
// The host-side row is intentionally a no-op: it exists so the client-modules
// scan sees an activated fiber and serves the "./client" bundle to the browser.
// All real work happens in the browser half (client.js).
export default {
  name: '@dsh-user/gamepad-cursor',
  apply() {
    // nothing to do on the host side
  },
}

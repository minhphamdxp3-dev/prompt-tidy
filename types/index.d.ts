declare module 'claude-code' {
  interface PluginState {
    'prompt-tidy': { original: string | null; isBusy: boolean; note: string }
  }
}
export {}

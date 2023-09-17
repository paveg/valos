import { defineConfig } from 'orval'

export default defineConfig({
  private: {
    input: './openapi/root.yaml',
    output: {
      workspace: './src/models/generated',
      target: 'api.ts',
      client: 'react-query',
      mode: 'tags',
      mock: true,
    },
  }
})

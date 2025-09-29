import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable Tailwind CSS support
  tailwindcss: true,
  // Enable nuxt support
  nuxt: true,
  // Custom rules
  rules: {
    // Disable multi-word component names for pages and dynamic routes
    'vue/multi-word-component-names': ['error', {
      ignores: ['index', 'alphabet', 'rainbow', 'Rainbow', 'Navbar', 'SeoHead', 'StructuredData', '[no]'],
    }],
    // Allow v-html for structured data (safe JSON-LD)
    'vue/no-v-html': 'off',
    // Allow process.env in config files
    'node/prefer-global/process': 'off',
    // Allow unused refs in Vue components (they might be used in templates)
    'vue/no-unused-refs': 'warn',
    // Enforce template section to be first
    'vue/block-order': ['error', {
      order: ['template', 'script', 'style'],
    }],
  },
})

Please refer to the /commitlint.config.ts file when writing commit messages.

# Commit Message Writing Rules

extends: ["@commitlint/config-conventional"]

rules:

- type-enum: [2, "always", ["feat", "fix", "docs", "style", "refactor", "test", "chore"]]
- header-max-length: [0]
- body-leading-blank: [2, "always"]
- footer-leading-blank: [2, "always"]
- references-empty: [2, "never"]
- body-empty: [2, "never"]
- body-case: [2, "always", "sentence-case"]
- body-full-stop: [2, "always", "."]
- subject-case: [2, "always", "sentence-case"]
- body-max-line-length: [2, "always", 100]
- footer-max-line-length: [2, "always", 100]
- references-pattern: [2, "always", "#[0-9]+"]

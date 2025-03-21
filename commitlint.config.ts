module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "docs", "style", "refactor", "test", "chore"],
    ],
    "header-max-length": [0],
    "references-empty": [2, "never"],
    "references-pattern": [2, "always", "#[0-9]+"]
  },
};

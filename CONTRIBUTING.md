# 🤝 Contributing to Developer Portfolio

Thank you for your interest in contributing to this project!

Contributions, suggestions, bug reports, and improvements are welcome. This document provides guidelines for contributing to the **Developer Portfolio** while maintaining clean code, consistency, and project quality.

---

## 📌 Table of Contents

- [Getting Started](#-getting-started)
- [Ways to Contribute](#-ways-to-contribute)
- [Development Setup](#-development-setup)
- [Branching Guidelines](#-branching-guidelines)
- [Coding Standards](#-coding-standards)
- [Commit Guidelines](#-commit-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Bug Reports](#-bug-reports)
- [Feature Requests](#-feature-requests)
- [Code Review](#-code-review)

---

## 🚀 Getting Started

Before contributing:

1. Review the existing project structure.
2. Check existing issues and pull requests.
3. Avoid creating duplicate issues or features.
4. Keep proposed changes focused and relevant.
5. Follow the coding and contribution standards defined below.

---

## 💡 Ways to Contribute

Contributions may include:

- 🐛 Fixing bugs
- 🎨 Improving UI/UX
- 📱 Improving responsive design
- ♿ Improving accessibility
- ⚡ Improving frontend performance
- 🧹 Refactoring existing code
- 📚 Improving documentation
- 🔍 Improving SEO
- 🧪 Testing and identifying issues
- 💡 Suggesting useful features
- 🔐 Identifying security concerns

Please avoid unrelated changes that unnecessarily increase project complexity.

---

## ⚙️ Development Setup

### 1. Fork the Repository

Fork this repository to your GitHub account.

### 2. Clone Your Fork

```bash
git clone YOUR_FORK_URL
```

### 3. Navigate to the Project

```bash
cd dev-portfolio
```

### 4. Create a Development Branch

```bash
git checkout -b feature/your-feature-name
```

### 5. Run the Portfolio

Open:

```text
index.html
```

in your browser.

For local development, you can also use a development server such as **VS Code Live Server**.

---

## 🌿 Branching Guidelines

Create a separate branch for every meaningful change.

### Feature

```text
feature/feature-name
```

Example:

```text
feature/project-filter
```

### Bug Fix

```text
fix/issue-name
```

Example:

```text
fix/mobile-navigation
```

### Documentation

```text
docs/documentation-update
```

### Refactoring

```text
refactor/component-name
```

### Performance

```text
perf/optimization-name
```

Avoid making development changes directly on the `main` branch.

---

## 🧹 Coding Standards

### HTML

- Use semantic HTML elements where appropriate.
- Maintain proper indentation.
- Use meaningful class and ID names.
- Include accessibility attributes where required.
- Avoid unnecessary nested elements.
- Keep the document structure readable.

Example:

```html
<section class="projects" id="projects">
    <h2>Featured Projects</h2>
</section>
```

---

### CSS

- Use consistent naming conventions.
- Organize styles logically.
- Avoid unnecessary duplication.
- Maintain responsive behavior.
- Prefer reusable classes.
- Keep selectors maintainable.
- Remove unused styles before submitting changes.

Example:

```css
.project-card {
    display: flex;
    flex-direction: column;
    border-radius: 1rem;
}
```

---

### JavaScript

- Use `const` and `let` instead of `var`.
- Use descriptive variable and function names.
- Keep functions focused on a single responsibility.
- Avoid unnecessary global variables.
- Handle DOM operations carefully.
- Remove debugging statements before committing.

Example:

```javascript
const navigationToggle = document.querySelector(".nav-toggle");

function toggleNavigation() {
    navigationToggle.classList.toggle("active");
}
```

---

## 📝 Commit Guidelines

This project follows a **Conventional Commits-inspired** format.

### Format

```text
<type>: <short description>
```

### Common Types

| Type | Purpose |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting or visual changes |
| `refactor` | Code restructuring |
| `perf` | Performance improvement |
| `test` | Testing changes |
| `chore` | Maintenance tasks |

### Examples

```text
feat: add project filtering functionality
```

```text
fix: resolve mobile navigation issue
```

```text
docs: update portfolio documentation
```

```text
refactor: simplify navigation logic
```

```text
perf: optimize portfolio image loading
```

Keep commit messages concise, descriptive, and relevant to the actual change.

---

## 🔄 Pull Request Process

Before submitting a pull request:

1. Update your local branch.
2. Verify that the portfolio works correctly.
3. Test the affected functionality.
4. Check desktop and mobile layouts when applicable.
5. Remove debugging or temporary code.
6. Review your changed files.
7. Write a clear commit message.
8. Push your branch.
9. Open a pull request against `main`.

Example:

```bash
git status
git add .
git commit -m "feat: improve project showcase"
git push origin feature/project-showcase
```

---

## 📋 Pull Request Description

A pull request should clearly explain:

### What Changed?

Describe the implementation or modification.

### Why?

Explain the reason for the change.

### Testing

Explain how the change was tested.

### Screenshots

Include before/after screenshots when making significant UI changes.

Example:

```text
Title:
feat: improve responsive project cards

Summary:
Improves the project showcase layout across tablet and mobile devices.

Changes:
- Updated project card layout
- Improved responsive breakpoints
- Fixed text overflow
- Improved mobile spacing

Testing:
- Tested on desktop
- Tested on tablet viewport
- Tested on mobile viewport
```

---

## 🐛 Bug Reports

Before reporting a bug:

- Verify that the issue is reproducible.
- Check whether it has already been reported.
- Test with the latest version of the repository.

A useful bug report should contain:

```text
Bug:
Short description of the problem

Steps to Reproduce:
1. ...
2. ...
3. ...

Expected Behaviour:
What should happen

Actual Behaviour:
What actually happens

Environment:
Browser / Device / Operating System

Additional Information:
Screenshots or console errors if applicable
```

---

## 💡 Feature Requests

Feature suggestions should explain:

- The problem being addressed
- The proposed solution
- Why the feature improves the portfolio
- Possible alternatives
- Any implementation considerations

Features should remain aligned with the project's purpose and avoid unnecessary complexity.

---

## 🔍 Code Review

Contributions may be reviewed for:

- Correctness
- Readability
- Maintainability
- Responsive behaviour
- Accessibility
- Performance
- Security
- Browser compatibility
- Code duplication
- Project consistency

Changes may be requested before a pull request is accepted.

---

## 🔐 Security

Do not include sensitive information in commits or pull requests.

Never commit:

```text
.env
API keys
Access tokens
Passwords
Private keys
Credentials
Personal secrets
```

If you discover a potential security vulnerability, follow the instructions provided in `SECURITY.md` instead of publicly disclosing sensitive vulnerability details.

---

## 📜 License

By contributing to this project, you agree that your contributions will be distributed under the license included in the repository.

See:

```text
LICENSE
```

for additional information.

---

## 🙌 Thank You

Thank you for helping improve this project.

Constructive feedback, clean code, meaningful improvements, and high-quality contributions are always appreciated.

---

<div align="center">

### 💻 Build • Improve • Collaborate • Learn

**Developer Portfolio — Surya Teja 🚀**

</div>

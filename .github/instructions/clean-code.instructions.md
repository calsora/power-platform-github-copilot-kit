---
applyTo: '**/*.{html,js,jsx,tsx,ts,cs}'
description: 'Cross-project clean code guidance for HTML, JavaScript, TypeScript, and C# development.'
---

# Clean Code Instructions

This guidance summarizes essential clean code principles for HTML, JavaScript, TypeScript, and C# projects. Use it as a shared code quality baseline across projects.

## Why clean code matters

- Clean code is easy to understand, review, and maintain.
- It reduces defects and makes changes safer.
- It keeps teams aligned around consistent naming, structure, and intent.

## General rules

1. Follow standard conventions for the language and framework.
2. Keep it simple. Simpler solutions are easier to read and change.
3. Leave code cleaner than you found it.
4. Find and fix root causes, not just symptoms.

## Design rules

1. Keep configurable data at high levels.
2. Prefer polymorphism or strategy patterns over long `if/else` or `switch` chains.
3. Keep concurrency and async control logic separate from business logic.
4. Avoid over-configurability and unnecessary indirection.
5. Use dependency injection where it improves testability and decoupling.
6. Follow the Law of Demeter: use only direct dependencies.

## Understandability tips

1. Be consistent in style, naming, and structure.
2. Use explanatory variables and clear expressions.
3. Encapsulate boundary conditions and edge-case logic.
4. Prefer domain-specific value objects over raw primitives.
5. Avoid hidden dependencies between methods or modules.
6. Avoid negative conditionals when a positive form is clearer.

## Names rules

1. Choose descriptive, unambiguous names.
2. Make meaningful distinctions between similar concepts.
3. Use pronounceable names.
4. Use searchable names that are easy to find in the codebase.
5. Replace magic numbers with named constants.
6. Avoid encoding type or prefix information in names.

## Functions and methods

1. Keep functions small.
2. Do one thing per function.
3. Use descriptive names.
4. Prefer fewer arguments.
5. Avoid side effects whenever possible.
6. Don’t use flag arguments; split behavior into separate functions.

## Comments

1. Prefer self-explanatory code to comments.
2. Don’t add redundant comments.
3. Avoid noisy comments that state the obvious.
4. Don’t use closing-brace comments.
5. Don’t leave commented-out code in the repository.
6. Use comments to explain intent, clarify decisions, or warn about consequences.

## Source code structure

1. Separate concepts vertically.
2. Keep related code close together.
3. Declare variables close to where they are used.
4. Keep dependent functions near each other.
5. Place similar functions together.
6. Order functions in the downward direction of flow.
7. Keep lines short.
8. Avoid horizontal alignment of code elements.
9. Use whitespace to group related logic and separate unrelated code.
10. Preserve indentation and avoid breaking indentation style.

## Objects and data structures

1. Hide internal structure behind interfaces or accessors.
2. Prefer simple data structures and plain objects where appropriate.
3. Avoid hybrid structures that mix object behavior and raw data.
4. Keep objects small and focused.
5. Each type should have one responsibility.
6. Limit instance variables to the minimum needed.
7. Base classes should not depend on their derivatives.
8. Prefer many small functions over passing behavior into functions.
9. Prefer instance methods over static methods unless stateless utility behavior is required.

## Tests

1. Keep tests focused on one assertion or one behavior.
2. Keep tests readable.
3. Keep tests fast.
4. Keep tests independent from each other.
5. Keep tests repeatable and deterministic.

## Common code smells

1. Rigidity: code is hard to change.
2. Fragility: small changes cause many failures.
3. Immobility: code is hard to reuse.
4. Needless complexity: code is more complicated than required.
5. Needless repetition: repeated logic is duplicated instead of shared.
6. Opacity: code is hard to understand.

## HTML-specific guidance

- Use semantic markup and meaningful element names.
- Keep structure flat where possible and avoid deeply nested markup.
- Use CSS class names that describe purpose or role, not appearance.
- Avoid inline styles and inline JavaScript.
- Keep templates simple and separate structure, style, and behavior.

## JavaScript / TypeScript-specific guidance

- Prefer `const` and `let` over `var`.
- Use explicit types in TypeScript and keep type declarations accurate.
- Keep asynchronous logic clear with `async/await` or well-named promises.
- Avoid global variables and keep module boundaries explicit.
- Use modules, namespaces, or files to organize related functionality.
- Keep DOM access and side effects isolated from pure logic.

## C#-specific guidance

- Use PascalCase for types and public members.
- Use camelCase for private fields and local variables.
- Prefer properties over public fields.
- Favor immutable objects where possible.
- Keep classes small and focused.
- Use constructor injection for dependencies.

## Checklist

- [ ] Follow conventions for the target language and platform.
- [ ] Keep functions and components small and single-purpose.
- [ ] Use clear, descriptive naming.
- [ ] Avoid magic values, hidden dependencies, and duplicated logic.
- [ ] Keep comments useful and avoid noise.
- [ ] Keep code structure clean, vertical, and easy to scan.
- [ ] Use tests that are independent, fast, and readable.
- [ ] Refactor when code becomes harder to understand than it needs to be.

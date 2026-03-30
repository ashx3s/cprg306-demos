# Week 10 Activity: Blog Post Form with Tag Cloud

## Overview

In this activity you'll work with a pre-built blog post form that has been split into components. Your job is to complete the **tag cloud** feature by wiring up the add and remove buttons.

The app lets a signed-in user write a blog post with a title, description, body content, and a list of tags. Tags are managed in state before the post is submitted — this is a common pattern for any multi-value input (interests, categories, labels, etc.).

---

## File Structure

```
activity/
├── page.js                    ← Auth check lives here, not inside components
└── components/
    ├── BlogPostForm.js        ← Manages all form state; composes sub-components
    ├── FormField.js           ← Reusable label + input component
    ├── TagCloud.js            ← Displays tags; needs add/remove wired up (your task)
    └── PostList.js            ← Real-time list of published posts
```

## Key Concepts

- **Auth at the page layer** — `page.js` checks `authUser` and either renders the form or shows a message. The form component itself doesn't import or call any auth hooks.
- **State lifted to the parent** — `BlogPostForm` owns `formData` and `tagInput`. It passes state values and handler functions down to `TagCloud` as props. This is the standard React pattern for shared state.
- **Factory function for initial state** — `getInitialFormData()` is a function, not an object literal. This prevents the same object reference from being reused across resets.
- **Array state with spread** — Adding and removing tags follows the same immutable update pattern used throughout React: never mutate the array directly, always return a new one.

---

## Your Tasks

### 1. Implement `addTag` in `BlogPostForm.js`

The `addTag` function should:
- Read the current `tagInput` value and trim whitespace
- Do nothing if the trimmed value is empty
- Do nothing if the tag already exists in `formData.tags` (no duplicates)
- Add the tag to `formData.tags` using the spread operator
- Reset `tagInput` to `""`

### 2. Implement `removeTag` in `BlogPostForm.js`

The `removeTag` function receives a `target` string and should:
- Filter `formData.tags` to remove the matching tag
- Update state using `setFormData` with the spread operator pattern

### 3. Wire up the buttons in `TagCloud.js`

There are two `TODO` comments in `TagCloud.js`:
- Add an `onClick` to the `×` button on each tag that calls `removeTag` with that tag's value
- Add an `onClick` to the **Add Tag** button that calls `addTag`
- Add a call to `addTag` inside the `onKeyDown` handler when `Enter` is pressed

---

## Hints

For `addTag`, the array update looks like this pattern from the `enhanced-form` example:
```js
setFormData({
  ...formData,
  tags: [...formData.tags, trimmedValue],
});
```

For `removeTag`, use `.filter()`:
```js
formData.tags.filter((t) => t !== target)
```

---

## Extension Challenges

Once the tag cloud is working, try these:

1. **Prevent submit without a title** — it's already guarded, but add a visible error message to the form instead of silently doing nothing.
2. **Character limit on tags** — reject tags longer than 20 characters.
3. **Tag input on Enter only** — remove the Add Tag button and only allow Enter to add a tag. What UX trade-offs does this introduce?
4. **Move tag logic into a custom hook** — extract `tags`, `tagInput`, `addTag`, and `removeTag` into a `useTagCloud` hook.

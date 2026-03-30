// TagCloud displays the current tags and provides UI to add or remove them.
// State and handler functions come from BlogPostForm via props — this component
// only handles display and user interaction.

export default function TagCloud({ tags, tagInput, setTagInput, addTag, removeTag }) {
  return (
    <div>
      <p className="font-medium mb-2">Tags</p>

      {/* Render existing tags */}
      <div className="flex flex-wrap gap-2 mb-3 min-h-8">
        {tags.length === 0 && (
          <span className="text-gray-400 text-sm">No tags added yet.</span>
        )}
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 px-2 py-1 rounded flex items-center gap-1 text-sm"
          >
            {tag}
            {/* TODO: Add an onClick prop to this button that calls removeTag with this tag */}
            <button
              type="button"
              className="text-red-500 hover:text-red-700 ml-1 leading-none"
              aria-label={`Remove tag ${tag}`}
            >
              ×
            </button>
          </span>
        ))}
      </div>

      {/* Input to add a new tag */}
      <div className="flex gap-2">
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              // TODO: Call addTag when the user presses Enter
            }
          }}
          placeholder="Add a tag"
          className="border px-2 py-1 rounded flex-1"
        />
        {/* TODO: Add an onClick prop to this button that calls addTag */}
        <button
          type="button"
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Tag
        </button>
      </div>
    </div>
  );
}

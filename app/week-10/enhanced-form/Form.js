// design to be generic so it can be used in this example and others on different routes without consequence

// TODO: create top level conditional rendering based on auth status
export default function Form() {
  return (
    // if not authorized return to login page
    <section className="my-8">
      <h2 className="text-lg">{editId ? "Edit User" : "Add User"}</h2>
      {/* TODO: Wrap auth around form at PAGE layer and NOT inside component */}
      {authUser ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="border mx-2 p-2"
            />
          </div>
          {/* TODO: Create SingleFieldComponent */}
          <div>
            <label htmlFor="species">Species: </label>
            <input
              type="text"
              id="species"
              value={formData.species}
              onChange={(e) =>
                setFormData({ ...formData, species: e.target.value })
              }
              className="border mx-2 p-2"
            />
          </div>
          {/* USE Single field Component */}
          <div>
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              value={formData.age ?? ""}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  age: e.target.value ? Number(e.target.value) : null,
                })
              }
              className="border mx-2 p-2"
            />
          </div>
          {/* TODO: Create ArrayFormComponent */}
          <div>
            <label htmlFor="interests">Interests: </label>
            <div>
              <ul>
                {formData.interests.map((interest) => (
                  <li key={interest}>
                    {interest}
                    <button
                      type="button"
                      onClick={() => removeInterest(interest)}
                      className="bg-yellow-600 cursor-pointer p-1 rounded-md mx-4"
                    >
                      X
                    </button>
                  </li>
                ))}
              </ul>
              {/* TODO: Use Single File Component */}
              <input
                type="text"
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addInterest();
                  }
                }}
                placeholder="Add interest"
                className="border border-gray-300 dark:border-gray-700 rounded px-2 py-1"
              />
              <button
                type="button"
                onClick={addInterest}
                className="px-4 py-2 bg-blue-500 dark:bg-blue-800 mx-2"
              >
                Add Interest
              </button>
            </div>
          </div>
          {/* TODO: Consider how to standardize after refactoring inputs */}
          <input
            type="submit"
            className={`px-4 py-2 m-2 rounded-md cursor-pointer ${
              editId ? "bg-blue-500" : "bg-blue-700"
            }`}
            value={editId ? "Edit User" : "Add User"}
          />
          {editId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-4 py-2 m-2 rounded-md bg-gray-700"
            >
              Cancel Edit
            </button>
          )}
        </form>
      ) : (
        <p>Not authorized to view the form</p>
      )}
    </section>
    // if authorized show form information
  );
}

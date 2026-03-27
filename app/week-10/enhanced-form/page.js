"use client";
import { useState } from "react";
import { useAuth } from "@/app/contexts/AuthContext";
import { useFirestoreCollection } from "@/app/hooks/useFirestoreCollection";
import { addItem, updateItem, deleteItem } from "@/app/lib/controller";

// Factory function prevents shared mutable reference
const getInitialFormData = () => ({
  name: "",
  species: "",
  age: null,
  interests: [],
});

export default function Page() {
  const { authUser, loading } = useAuth();
  const [formData, setFormData] = useState(getInitialFormData);
  const [interestInput, setInterestInput] = useState("");
  const [editId, setEditId] = useState(null);
  const { data: items, isDataLoading, dataError } = useFirestoreCollection();

  const resetForm = () => {
    setFormData(getInitialFormData());
    setInterestInput("");
    setEditId(null);
  };

  const addInterest = () => {
    const trimmed = interestInput.trim();
    if (trimmed && !formData.interests.includes(trimmed)) {
      setFormData({
        ...formData,
        interests: [...formData.interests, trimmed],
      });
      setInterestInput("");
    }
  };

  const removeInterest = (target) => {
    setFormData({
      ...formData,
      interests: formData.interests.filter((i) => i !== target),
    });
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!formData.name.trim()) return;

    // userId distinguishes the owner from the Firestore doc id
    const userData = { ...formData, userId: authUser.uid };

    try {
      if (editId) {
        await updateItem(editId, "users", userData);
      } else {
        await addItem("users", userData);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving document:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      name: item.name || "",
      species: item.species || "",
      age: item.age ?? null,
      interests: item.interests || [],
    });
    setEditId(item.id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteItem(id, "users");
    } catch (error) {
      console.error(`Error deleting ${id}:`, error);
    }
  };

  if (isDataLoading || loading) {
    return (
      <div className="my-12">
        <p className="text-lg py-8">
          {loading ? "Authenticating..." : "Loading data..."}
        </p>
      </div>
    );
  }

  if (dataError) {
    return (
      <p className="text-2xl font-bold text-red-500 my-8">ERROR: {dataError}</p>
    );
  }

  return (
    <main>
      <header>
        <h1 className="text-4xl">Next + Firestore CRUD</h1>
      </header>

      <section className="my-4">
        <h2 className="text-2xl">List of Data Items</h2>
        {items.length > 0 ? (
          <ul>
            {items.map((character) => (
              <li key={character.id} className="my-4 flex gap-6">
                <h3 className="text-lg font-medium">{character.name}</h3>
                <ul>
                  <li>{character.age ?? "No age specified"}</li>
                  <li>{character.species || "No species specified"}</li>
                  {authUser && (
                    <li>
                      <ul>
                        {character.interests?.map((interest) => (
                          <li key={interest}>{interest}</li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
                {authUser && (
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(character)}
                      className="px-4 py-2 m-2 rounded-md bg-yellow-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(character.id)}
                      className="px-4 py-2 m-2 rounded-md bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No Data</p>
        )}
      </section>

      <section className="my-8">
        <h2 className="text-lg">{editId ? "Edit User" : "Add User"}</h2>
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
    </main>
  );
}

// Reusable single-field component for text inputs.
// Accepts label, id, value, onChange, and an optional type prop.

export default function FormField({ label, id, value, onChange, type = "text" }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        className="border-2 block w-full px-2 py-1 rounded"
      />
    </div>
  );
}

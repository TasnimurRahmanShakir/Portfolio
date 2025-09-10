export const InputField = ({ title, name, placeholder, type, id }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2 text-start">
        {title}
      </label>

      {type.toLowerCase() === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
          rows={3} 
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required
          placeholder={placeholder}
          className="w-full px-4 py-2 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
        />
      )}
    </div>
  );
};

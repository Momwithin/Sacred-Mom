
export function InputBox({ value, onChange, onSubmit, placeholder }) {
  return (
    <div className="flex items-center gap-2 border rounded-xl px-4 py-2 shadow-sm">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
        className="flex-1 outline-none text-base placeholder-gray-400"
      />
      <button onClick={onSubmit} className="text-rose-500 text-xl">
        ⏎
      </button>
    </div>
  );
}

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <label className="search-box">
      <span aria-hidden="true">⌕</span>
      <span className="sr-only">İl, ilçe veya kurum ara</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="İl, ilçe veya kurum ara"
      />
    </label>
  );
}


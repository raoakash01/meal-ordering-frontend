import React from 'react';
import '../assets/css/TagFilter.css';

const TagFilter = ({ labels, selectedTags, setSelectedTags }) => {
  const handleTagClick = (label) => {
    const isSelected = selectedTags.includes(label);
    if (isSelected) {
      setSelectedTags(selectedTags.filter(tag => tag !== label));
    } else {
      setSelectedTags([...selectedTags, label]);
    }
  };

  const handleSelectAll = () => {
    const allLabels = labels.map(label => label.label);
    setSelectedTags(allLabels);
  };

  return (
    <div className="tag-filter">
      <button
        className={`tag-button ${selectedTags.length === labels.length ? 'selected' : ''}`}
        onClick={handleSelectAll}
      >
        All
      </button>
      {labels.map(label => (
        <button
          key={label.id}
          className={`tag-button ${selectedTags.includes(label.label) ? 'selected' : ''}`}
          onClick={() => handleTagClick(label.label)}
        >
          {label.label}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;

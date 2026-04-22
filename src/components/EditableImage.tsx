'use client';

import React, { useRef } from 'react';
import { asset } from '@/lib/paths';

interface EditableImageProps {
  src: string;
  onChange: (dataUrl: string) => void;
  className?: string;
  style?: React.CSSProperties;
  alt?: string;
  objectPosition?: string;
}

export default function EditableImage({
  src,
  onChange,
  className = '',
  style,
  alt = 'Image',
  objectPosition = 'center',
}: EditableImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      className={`editable-image ${className}`}
      style={style}
      onClick={handleClick}
    >
      {src && (
        <img
          src={asset(src)}
          alt={alt}
          className="w-full h-full object-cover"
          style={{ objectPosition }}
          draggable={false}
        />
      )}
      <div className="edit-overlay">
        <span>Modifier</span>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );
}

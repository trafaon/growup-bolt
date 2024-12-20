import React from 'react';

type FormFieldProps = {
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    multiline?: boolean;
    type?: 'text' | 'password';
    className?: string;
};

export function FormField({ 
    label, 
    placeholder, 
    value, 
    onChange, 
    multiline = false,
    type = 'text',
    className = ""
}: FormFieldProps) {
    return (
        <div className="mb-4">
            <label className="block text-lg font-medium mb-2">{label}</label>
            {multiline ? (
                <textarea
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    rows={4}
                />
            ) : (
                <input
                    type={type}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${className}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
            )}
        </div>
    );
}
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormField } from '../../ui/FormField';
import { Button } from '../../ui/Button';
import './LoginScreen.css';

export function LoginScreen() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      navigate('/goal');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>GROWUp</h1>
          <p>Your Personal Development Journey</p>
        </div>
        
        <form onSubmit={handleLogin} className="login-form">
          <FormField
            label="Username"
            placeholder="Enter your username"
            value={username}
            onChange={setUsername}
          />
          <FormField
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={setPassword}
            type="password"
          />
          <Button type="submit" className="w-full mt-4">
            Start Your Journey
          </Button>
        </form>
        
        <div className="login-footer">
          <p>Track your growth using the GROW model:</p>
          <div className="grow-items">
            <span className="grow-item goal">Goals</span>
            <span className="grow-item reality">Reality</span>
            <span className="grow-item options">Options</span>
            <span className="grow-item will">Will</span>
          </div>
        </div>
      </div>
    </div>
  );
}